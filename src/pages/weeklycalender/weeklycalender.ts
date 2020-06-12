import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavController, NavParams, PopoverController, ToastController, LoadingController,Platform,App } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';

import { GlobalProvider } from '../../providers/global/global';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import "dhtmlx-scheduler";
// import { } from "@types/dhtmlxscheduler";

declare let scheduler: any;
// import 'dhtmlx-scheduler/codebase/dhtmlxscheduler.css';


@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'page-weeklycalender',
	templateUrl: 'weeklycalender.html',
	//@import '~dhtmlx-scheduler/codebase/dhtmlxscheduler.css'
	//styleUrls: ['../../../dhtmlx-scheduler/codebase/dhtmlxscheduler.css']
})
export class WeeklycalenderPage implements OnInit {

	public UserDetails = Array();
	public loading;
	allTasks = Array();
	allTasksDaily = Array();
	allTasksWeekly = Array();
	allTasksMonthly = Array();
	allTasksUnassign = Array();
	urlGet: string = '';
	subscription;
	private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

	@ViewChild("scheduler_here") schedulerContainer: ElementRef;
	constructor(public app: App, private platform: Platform,public loadingCtrl: LoadingController, public global: GlobalProvider, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, private storage: Storage, public http: Http, private toastCtrl: ToastController) {
		// // debugger;
		this.urlGet = global.url;
	}

	ionViewWillLeave() {
		// debugger;
		console.log('Looks like I’m about to leave');
		let eventId = scheduler.getState().lightbox_id;
		if (eventId) {
			// scheduler.cancel_lightbox();
			scheduler.endLightbox(eventId);
			console.log('opened');
		}

		this.subscription = 0;

	}

	ionViewDidLoad() {

		// debugger;
		this.storage.get("userdetails").then((userval) => {
			console.log('User details is', userval);
			this.UserDetails = userval;
			//console.log(this.UserDetails['userdetails'].id);
		});
		console.log('ionViewDidLoad WeeklycalenderPage');
	}
	ionViewDidEnter() {
		console.log('ionViewDidLoad TasksPage');
		this.get_user_tasks();

		this.subscription = 1;
		//Registration of push in Android and Windows Phone
		this.platform.registerBackButtonAction(() => {

			if(this.subscription == 1)
			{
				var evs = scheduler.getEvents();

				// console.log(evs[evs.length]);
				for (var i=0; i<evs.length; i++)
				{
					scheduler.editStop(evs[i].id);
				}
				// scheduler.eventRemove(evs[evs.length] );
			}
			else
			{
				let nav = this.app.getActiveNav();
				if (nav.canGoBack()){
				nav.pop();
				}else{
				this.platform.exitApp();
				}
			}
			console.log("run backbuttton");
		});
	}


	//popover cntrl
	presentPopover(myEvent) {
		// debugger;
		let popover = this.popoverCtrl.create(PopoverComponent);
		popover.present({
			ev: myEvent
		});
	}

	ngOnInit() {
	}

	showLoading() {
		if (!this.loading) {
			this.loading = this.loadingCtrl.create({
				content: 'Please Wait...'
			});
			this.loading.present();
		}
	}



	dismissLoading() {
		if (this.loading) {
			this.loading.dismiss();
			this.loading = null;
		}
	}

	get_user_tasks() {

		// debugger;

		this.showLoading();

		scheduler.clearAll();

		scheduler.config.date_format = '%Y-%m-%d %H:%i';

		scheduler.config.touch_swipe_dates = true;

		scheduler.config.touch_drag = 150;
		scheduler.config.show_loading = true;
		scheduler.config.touch = "force";
		scheduler.init(this.schedulerContainer.nativeElement, new Date(), "week");


		scheduler.attachEvent('onEventAdded', (id, ev) => {
			// debugger;
			console.log('event added ', ev);
			console.log('event id ', id);
			var start_date_Hours = ev.start_date.getHours();
			var start_date_mins = ev.start_date.getMinutes();
			var end_date_Hours = ev.end_date.getHours();
			var end_date_mins = ev.end_date.getMinutes();
			var start_time =  start_date_Hours + ':' +  start_date_mins;
			var end_time =  end_date_Hours + ':' +  end_date_mins;
			var duration_hours = end_date_Hours - start_date_Hours;
			var duration_min = end_date_mins - start_date_mins;
			var duration = duration_hours +':' + duration_min;
			console.log('start date', duration);


			let taskdata = {
				'user_id': this.UserDetails['userdetails'].id,
				'task_name': ev.text,
				'duration': duration,
				'bring_with_you': '',
				'frequency': '',
				'if_not_completed': '',
				'priority': '',
				'category': '',
				'color': 'blue',
				'due_date': ev.end_date,
				'sub_tasks': '',
				'reminders': '',
				'minutes_before': 15,
				'repetition': 'daily',
				'type': 'event'
			} 

			let _url: string = "http://52.29.115.88/api/v1/user/create_task";
			this.http.post(_url, taskdata, { headers: this.headers })
				.subscribe(
					(data) => {
						let result = JSON.parse(data["_body"]);
						console.log(result);

						let toast = this.toastCtrl.create({
							message: result.message,
							duration: 3000,
							position: 'top'
						});

						toast.onDidDismiss(() => {
							console.log('Dismissed toast');
							// this.newTaskform.reset();
							// this.navCtrl.push(CalendarPage);
						});

						toast.present();
					});
		});

		scheduler.attachEvent("onEventDropOut", function (id, original, to, e) {
			// debugger;
			console.log(`onEventDropOut fired`);
		});

		scheduler.attachEvent('onEventChanged', (id, ev) => {

			// debugger;
			console.log('event changed ', ev);
			var start_date = this.convert(ev.start_date);
			var end_date = this.convert(ev.end_date);
			console.log(start_date);
			let taskdata = {
				'user_id': this.UserDetails['userdetails'].id,
				'taskdata': ev,
				'start_date': start_date,
				'end_date': end_date
			};
			console.log(ev.start_date);
			let _url: string = this.urlGet + "api/v1/user/update_user_task";
			this.http.post(_url, taskdata, { headers: this.headers })
				.subscribe(
					(data) => {
						let result = JSON.parse(data["_body"]);
						console.log(result);
						if (result.status == "failed") {

							let toast = this.toastCtrl.create({
								message: result.message,
								duration: 3000,
								position: 'top',
								cssClass: "customtoast",
							});
							toast.onDidDismiss(() => {
								console.log('Dismissed toast');
							});
							toast.present();
						} else {
							let toast = this.toastCtrl.create({
								message: result.message,
								duration: 3000,
								position: 'top',
								cssClass: "customtoast",
							});

							toast.onDidDismiss(() => {
								console.log('Log in toast');
							});
							toast.present();
						}
					});
		});

		scheduler.attachEvent('onEventDeleted', (id) => {

			// debugger;
			//this.eventService.remove(id);
			console.log(id);
			let taskdata = {
				'user_id': this.UserDetails['userdetails'].id,
				'id': id
			};
			console.log(taskdata);
			let _url: string = this.urlGet + "api/v1/user/delete_user_task";
			this.http.post(_url, taskdata, { headers: this.headers })
				.subscribe(
					(data) => {
						let result = JSON.parse(data["_body"]);
						console.log(result);
						if (result.status == "failed") {

							let toast = this.toastCtrl.create({
								message: result.message,
								duration: 3000,
								position: 'top',
								cssClass: "customtoast",
							});
							toast.onDidDismiss(() => {
								console.log('Dismissed toast');
							});
							toast.present();
						} else {
							let toast = this.toastCtrl.create({
								message: result.message,
								duration: 3000,
								position: 'top',
								cssClass: "customtoast",
							});

							toast.onDidDismiss(() => {
								console.log('Log in toast');
							});
							toast.present();
						}
					});
		});

		let _url: string = this.urlGet + "api/v1/user/get_user_task_calender";
		let postdata = {
			'user_id': this.UserDetails['userdetails'].id
		}

		this.http.post(_url, postdata, { headers: this.headers })
			.subscribe(
				(data) => {

					// debugger;
					let taskList = JSON.parse(data["_body"]);

					this.allTasks.push(taskList.all_tasks);


					console.log(this.allTasks[0]);
					scheduler.parse(this.allTasks[0], "json");
					this.dismissLoading();

				}, err => {
					this.dismissLoading();
				});


		this.get_user_unassigntasks();
	}

	get_user_unassigntasks() {

		// debugger;
		console.log(this.urlGet);

		let _url: string = this.urlGet + "api/v1/user/get_user_task_unassign";
		let postdata = {
			'user_id': this.UserDetails['userdetails'].id
		}
		this.http.post(_url, postdata, { headers: this.headers })
			.subscribe(
				(data) => {
					let taskList = JSON.parse(data["_body"]);
					console.log(taskList.all_tasks.daily);
					this.allTasksDaily.push(taskList.all_tasks.daily);
					this.allTasksWeekly.push(taskList.all_tasks.weekly);
					this.allTasksMonthly.push(taskList.all_tasks.monthly);
					this.allTasksUnassign.push(taskList.all_tasks.unassigned);
					console.log(this.allTasksWeekly);
					this.dismissLoading();

				}, (err) => {
					this.dismissLoading();
					console.log(err);
				});
	}

	private convert(str) {

		// debugger;
		var date = new Date(str),
			mnth = ("0" + (date.getMonth() + 1)).slice(-2),
			day = ("0" + date.getDate()).slice(-2);

		var hours = ("0" + date.getHours()).slice(-2);
		var min = ("0" + date.getMinutes()).slice(-2);
		var data = [date.getFullYear(), mnth, day].join("-");
		data = data + ' ' + hours + ':' + min
		return data;
	}
}
