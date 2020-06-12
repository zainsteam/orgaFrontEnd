webpackJsonp([0],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_privacypolicies_privacypolicies__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_termandconditions_termandconditions__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_rateus_rateus__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(app, navCtrl, navParams, storage, viewCtrl, alertCtrl) {
        // console.log('Hello PopoverComponent Component');
        // this.text = 'Hello World';
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.UserDetails = Array();
        // used for an example of ngFor and navigation
        this.menus = [
            { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_3__pages_privacypolicies_privacypolicies__["a" /* PrivacypoliciesPage */], icon: 'paper' },
            { title: 'Terms and Conditions', component: __WEBPACK_IMPORTED_MODULE_4__pages_termandconditions_termandconditions__["a" /* TermandconditionsPage */], icon: 'lock' },
            //  { title: 'Term', component: TermPage, icon:'lock' },
            { title: 'Rate Us', component: __WEBPACK_IMPORTED_MODULE_5__pages_rateus_rateus__["a" /* RateusPage */], icon: 'star-half' },
        ];
    }
    PopoverComponent.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (val) {
            //console.log('User details is', val);
            _this.UserDetails = val;
        });
    };
    // navigation in popover
    PopoverComponent.prototype.goTopage = function (menu, title) {
        var _this = this;
        console.log(title);
        if (title == 'Rate Us') {
            window.open('https://play.google.com/store', '_system', 'location=yes');
        }
        else if (title == 'Terms and Conditions') {
            window.open('http://orga-nice-app.com/Mobile-App-Terms.pdf', '_system', 'location=yes');
        }
        else {
            console.log('Into alert controler');
            this.viewCtrl.dismiss().then(function () {
                _this.app.getRootNav().push(menu.component);
            });
            /* this.navCtrl.push(menu.component).then(() => {
              this.viewCtrl.dismiss();
          }); */
            //this.navCtrl.push(menu.component);
            // this.viewCtrl.dismiss();
            //console.log(this.UserDetails[0]);
            //console.log(this.UserDetails);
            /* if (this.UserDetails == null) {
              let alert = this.alertCtrl.create({
                title: 'Please Login!',
                subTitle: 'You need to login to your account to view your To-Dos.',
                buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      this.navCtrl.push(LoginhomePage);
                      this.viewCtrl.dismiss();
                    }
                  }
                ]
              });
              alert.present();
            }else{
              this.navCtrl.push(menu.component);
              this.viewCtrl.dismiss();
            } */
            //this.navCtrl.push(menu.component);
            //this.viewCtrl.dismiss();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], PopoverComponent.prototype, "nav", void 0);
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\components\popover\popover.html"*/'<!-- Generated template for the PopoverComponent component -->\n\n<ion-list>\n\n  <button class="side-menu-font" style="color:#444444;" ion-item *ngFor="let menu of menus" (click)="goTopage(menu,menu.title)">\n\n    <ion-icon name="{{menu.icon}}" color="buttoncolor"></ion-icon>&nbsp;&nbsp;{{menu.title}}\n\n  </button>\n\n</ion-list>'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\components\popover\popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypoliciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PrivacypoliciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacypoliciesPage = /** @class */ (function () {
    function PrivacypoliciesPage(navCtrl, navParams, popoverCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    PrivacypoliciesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacypoliciesPage2');
    };
    //popover cntrl
    PrivacypoliciesPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    PrivacypoliciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacypolicies',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\privacypolicies\privacypolicies.html"*/'<!--\n\n  Generated template for the PrivacypoliciesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n    <ion-title>Privacy Policy</ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pp_background" padding>\n\n  <div style="background: #ffffff; padding: 20px 10px 20px 10px; margin: 20px 0 0;     -webkit-box-shadow: 0px 4px 6px 2px #f1f1f1;\n\n  box-shadow: 0px 4px 6px 2px #f1f1f1;">\n\n    <h3 class="pp_heading"><img style="max-width: 20px; margin: 2px 8px 0;" src="../../assets/imgs/p&p.svg"/>Orga-Nice Privacy Policy</h3>\n\n	\n\n	<p class="pp_content">This privacy policy defines how Orga-Nice UG (haftungsbeschr&auml;nkt) uses personal data collected from users through the website www.orga-nice-app.com and the Orga-Nice mobile app.</p>\n\n<p style="text-align: left;"><b>What data do we collect?</b></p>\n\n<ul style="list-style-type: circle;">\n\n<li style="text-align: left;">identification information (Name, Email, Date of birth and phone number)</li>\n\n</ul>\n\n<p style="text-align: left;"><br /><b>How do we collect your data?</b></p>\n\n<p style="text-align: left;">Orga-Nice collects data that you insert during your registration. Data can be collected in the following situations:</p>\n\n<ul style="list-style-type: circle;">\n\n<li>You register an account in the mobile app and insert your personal data</li>\n\n<li>You voluntarily provide information via email or our contact form</li>\n\n<li>You use or view our website via your browser&rsquo;s cookies</li>\n\n</ul>\n\n<p style="text-align: left;">\n\n<br />Orga-Nice collects your data so that we can allow you to contact us and provide you a personalized use of our app. We will not use your data for other purposes than letting you access our services and we keep high security standards so that no third party can access your data.<br />\n\nWe store your data as long as needed to give you access to the mobile app, and will delete this data at your request or after a prolonged time of inactivity.<br />\n\n<p style="text-align: left;"><br /><b>What are your rights?</b></p>\n\nOrga-Nice informs you of every right you have regarding the use of your personal data by us, which you can find below:<br />\n\n<b>The right to access</b> - you may ask us at any time to access your personal data saved in our servers. We may charge you a small fee for this service.<br />\n\n<b>The right to rectification</b> &ndash; you have the right to ask us to correct information that you see as incorrect as well as to complete information you see as incomplete.<br />\n\n<b>The right to erasure</b> &ndash; You can ask us at any time to erase the data we collected about you.<br/>\n\n<b>The right to restrict processing</b> &ndash; you have the right to ask Orga-Nice to restrict processing of your data. However, in some circumstances we might refuse your request.<br />\n\n<b>The right to object to processing</b> &ndash; you have the right to object our processing of your data, if certain conditions are met.<br />\n\n<b>The right to data portability</b> &ndash; You have the right to request Orga-Nice to transfer the data we have collected to another organization, or directly to you, if certain conditions are met.<br />\n\nIf you make a request, we have one month to respond to you. Please contact us at: info@orga-nice-app.com<br />\n\n<p style="text-align: left;"><b>What are cookies?</b></p>Cookies are text files saved on your computer to collect standard log information. These files are saved by most websites that you visit with your browser and we might use cookies when you visit our page. You can manage the use of cookies and even block them in the options of your internet browser.\n\n \n\n  </div>\n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n  <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer>-->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\privacypolicies\privacypolicies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PrivacypoliciesPage);
    return PrivacypoliciesPage;
}());

//# sourceMappingURL=privacypolicies.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermandconditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TermandconditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermandconditionsPage = /** @class */ (function () {
    function TermandconditionsPage(loadingCtrl, global, navCtrl, navParams, popoverCtrl, storage, http, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        //pdfSrc:any;
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //this.urlGet = global.url;
        //pdfSrc: string = '/Mobile-App-Terms.pdf';
    }
    TermandconditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermandconditionsPage');
    };
    //popover cntrl
    TermandconditionsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    TermandconditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termandconditions',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\termandconditions\termandconditions.html"*/'<!--\n\n  Generated template for the TermandconditionsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="header_font" color="primary">Terms and Conditions</ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="tc_background" padding>\n\n  <iframe src="https://docs.google.com/viewerng/viewer?url=http://orga-nice-app.com/Mobile-App-Terms.pdf&embedded=true" frameborder="0" height="100%" width="100%">\n\n  </iframe>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\termandconditions\termandconditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], TermandconditionsPage);
    return TermandconditionsPage;
}());

//# sourceMappingURL=termandconditions.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginhomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginhomePage = /** @class */ (function () {
    function LoginhomePage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    LoginhomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginhomePage');
    };
    //popover
    LoginhomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    LoginhomePage.prototype.gologin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    LoginhomePage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginhomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loginhome',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\loginhome\loginhome.html"*/'<!--\n\n  Generated template for the LoginhomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n		<ion-title>log In</ion-title>\n\n		<!-- <ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<object style="max-width: 156px; width: 100%; margin: 30px auto 30px auto; left: 0; right: 0; display: block;" type="image/svg+xml" data="../../assets/imgs/logo.svg">\n\n		Your browser does not support SVG\n\n	</object>\n\n	<!-- <img style="max-width: 100%;" src="../../assets/imgs/logo.svg"/> -->\n\n	<!--<button ion-button block class="fb_btn s_btn"> <ion-icon class="s_media_icon fb_icon" ios="logo-facebook" md="logo-facebook"></ion-icon>Log In via Facebook</button>\n\n	<button ion-button block class="lnkdn_btn s_btn"><ion-icon class="s_media_icon" ios="logo-linkedin" md="logo-linkedin"></ion-icon>Log In via Linkedin</button>\n\n	-->\n\n	<button ion-button block class="eml_btn s_btn" (click)="gologin()">Log In via Email</button>\n\n	<ion-label class="create_acnt_lnk">Don\'t have an Account? <a class="accnt_creat" href="javascript:void(0)" (click)="goRegister()">Click Here</a></ion-label>\n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n	<p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer>-->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\loginhome\loginhome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], LoginhomePage);
    return LoginhomePage;
}());

//# sourceMappingURL=loginhome.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, popoverCtrl, http, toastCtrl, storage, nav, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.hidecontinue = true;
        this.hideregister = false;
        this.hideotp = false;
        //userData = { "name": "", "email": "", "country": "", "dob": "", "password": "","cnfpassword":"" };
        this.userData = { "name": "", "email": "", "otp": "" };
        this.userDetails = "userdetails";
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    RegisterPage.prototype.ngOnInit = function () {
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signupform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(EMAILPATTERN)]),
            otp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])
            // country: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(20)]),
            // dob: new FormControl('', [Validators.required]),
            //password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
            //cnfpassword: new FormControl('', [Validators.required]),
        });
    };
    // Signup 
    RegisterPage.prototype.sentotp = function () {
        var _this = this;
        console.log('sentotp');
        var data = this.signupform.value;
        //console.log(data);
        var regdata = {
            "email": data.email,
        };
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        //let _url: string = "http://52.29.115.88/api/v1/user/register";
        var _url = "http://52.29.115.88/api/v1/user/regotp";
        this.http.post(_url, regdata, { headers: this.headers })
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            //console.log(result);
            loading.dismiss();
            loading.onDidDismiss(function () {
                var toast = _this.toastCtrl.create({
                    message: result,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                    if (result == "Otp successfully sent.") {
                        console.log(result);
                        //this.signupform.reset();
                        //this.nav.popToRoot();
                        _this.hideregister = true;
                        _this.hideotp = true;
                        _this.hidecontinue = false;
                    }
                });
                toast.present();
            });
        });
        // set the user details to localstorage
        //this.storage.set(this.userDetails, regdata);
        // get the value from localstorage
        // Or to get a key/value pair
        /* this.storage.get(this.userDetails).then((val) => {
          console.log('User details is', val);
        }); */
    };
    RegisterPage.prototype.signup = function () {
        var _this = this;
        if (this.signupform.valid) {
            var data = this.signupform.value;
            //console.log(data);
            var regdata = {
                "name": data.name,
                "email": data.email,
                "otp": data.otp
            };
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            //let _url: string = "http://52.29.115.88/api/v1/user/register";
            var _url = "http://52.29.115.88/api/v1/user/regotpverify";
            this.http.post(_url, regdata, { headers: this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                //console.log(result);
                loading_1.dismiss();
                loading_1.onDidDismiss(function () {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 1000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                        if (result.message == "Registerd successfully.") {
                            console.log(result);
                            _this.signupform.reset();
                            _this.storage.ready().then(function () {
                                _this.storage.set(_this.userDetails, result).then(function () {
                                    _this.storage.get('userdetails').then(function (value) {
                                        //this.nav.popToRoot();
                                        //this.navCtrl.setRoot(HomePage);
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
                                    });
                                });
                            });
                        }
                    });
                    toast.present();
                });
            });
            // set the user details to localstorage
            this.storage.set(this.userDetails, regdata);
            // get the value from localstorage
            // Or to get a key/value pair
            this.storage.get(this.userDetails).then(function (val) {
                console.log('User details is', val);
            });
        }
    };
    /* signupold() {
         
      if (this.signupform.valid) {
        var data = this.signupform.value;
        //console.log(data);
        var regdata = {
          "name": data.name,
          "email": data.email,
          "country": data.country,
          "dob": data.dob,
          "password": data.password
        };
        let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
  
              loading.present();
        //let _url: string = "http://52.29.115.88/api/v1/user/register";
        let _url: string = "http://52.29.115.88/api/v1/user/reg";
        this.http.post(_url, regdata, { headers: this.headers })
          .subscribe(
            (data) => {
              let result = JSON.parse(data["_body"]);
              //console.log(result);
  
             
              loading.dismiss();
              loading.onDidDismiss(() => {
                let toast = this.toastCtrl.create({
                  message: result,
                  duration: 1000,
                  position: 'top',
                  cssClass: "customtoast",
                });
  
                toast.onDidDismiss(() => {
                  console.log('Dismissed toast');
                  if (result == "Registerd successfully."){
                    console.log(result);
                    this.signupform.reset();
                    this.nav.popToRoot();
                    
                  }
                });
  
                toast.present();
              });
            });
        // set the user details to localstorage
        this.storage.set(this.userDetails, regdata);
        // get the value from localstorage
        // Or to get a key/value pair
        this.storage.get(this.userDetails).then((val) => {
          console.log('User details is', val);
        });
      }
    }
   */
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    //popover cntrl
    RegisterPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n		<ion-title>Register</ion-title>\n\n		<!-- <ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n    <form novalidate (ngSubmit)="signup()" [formGroup]="signupform">\n\n		<ion-list style="width: 100%;">\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputuser.svg"/>Name</ion-label>\n\n				<ion-input type="text" [(ngModel)]="userData.name" formControlName="name"\n\n          [class.error1]="!signupform.controls.name.valid && signupform.controls.name.dirty"></ion-input>\n\n			</ion-item>\n\n			<ion-item no-lines *ngIf="( signupform.get(\'name\').hasError(\'minlength\') || signupform.get(\'name\').hasError(\'maxlength\') ||signupform.get(\'name\').hasError(\'pattern\') ||signupform.get(\'name\').hasError(\'required\') ) && signupform.get(\'name\').touched">\n\n				<div class="error" *ngIf="signupform.get(\'name\').hasError(\'required\') && signupform.get(\'name\').touched">\n\n					Please enter your name!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'name\').hasError(\'minlength\') && signupform.get(\'name\').touched">\n\n					Minimum 4 characters\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'name\').hasError(\'maxlength\') && signupform.get(\'name\').touched">\n\n					Maximum 30 characters\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'name\').hasError(\'pattern\') && signupform.get(\'name\').touched">\n\n					Just use alphabet character\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 15px; position: absolute; left: 0; top: 3px;" src="../../assets/imgs/inputemail.svg"/>Email Address</ion-label>\n\n				<ion-input type="mail" class="input_form" [(ngModel)]="userData.email" formControlName="email"\n\n          [class.error1]="!signupform.controls.email.valid && signupform.controls.email.dirty"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item no-lines\n\n				*ngIf="( signupform.get(\'email\').hasError(\'minlength\') || signupform.get(\'email\').hasError(\'pattern\') ||signupform.get(\'email\').hasError(\'required\') ) && signupform.get(\'email\').touched">\n\n				<div class="error" *ngIf="signupform.get(\'email\').hasError(\'required\') && signupform.get(\'email\').touched">\n\n					Please Enter your email!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'email\').hasError(\'pattern\') && signupform.get(\'email\').touched">\n\n					Please enter a valid email address!\n\n				</div>\n\n			</ion-item>\n\n			\n\n			<ion-item class="input_item" *ngIf="hideotp">			\n\n			<ion-label class="input_label" color="inputcolor" floating>Otp</ion-label>\n\n			<ion-input type="text" [(ngModel)]="userData.otp" formControlName="otp"></ion-input>\n\n		   </ion-item>\n\n		   <ion-item no-lines\n\n				*ngIf="(signupform.get(\'otp\').hasError(\'required\') || signupform.get(\'otp\').hasError(\'minlength\')) && signupform.get(\'otp\').touched">\n\n				<div class="error" *ngIf="signupform.get(\'otp\').hasError(\'required\') && signupform.get(\'otp\').touched">\n\n					Please Enter your otp..!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'otp\').hasError(\'minlength\') && signupform.get(\'otp\').touched">\n\n					Please Enter minimum 6 characters..!\n\n				</div>\n\n			</ion-item>\n\n\n\n			\n\n		</ion-list>\n\n		 <button ion-button type="button" block class="login_page_btn" (click)="sentotp()" *ngIf="hidecontinue" [disabled]="signupform.get(\'email\').hasError(\'required\') || signupform.get(\'email\').hasError(\'pattern\') || signupform.get(\'name\').hasError(\'minlength\') || signupform.get(\'name\').hasError(\'maxlength\') ||signupform.get(\'name\').hasError(\'pattern\') ||signupform.get(\'name\').hasError(\'required\')">Continue</button>\n\n		<button ion-button block type="submit" class="login_page_btn" *ngIf="hideregister" [disabled]="signupform.invalid">Register</button>\n\n	</form>\n\n	<!--<form novalidate (ngSubmit)="signup()" [formGroup]="signupform">\n\n		<ion-list style="width: 100%;">\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputuser.svg"/>Name</ion-label>\n\n				<ion-input type="text" [(ngModel)]="userData.name" formControlName="name"\n\n          [class.error1]="!signupform.controls.name.valid && signupform.controls.name.dirty"></ion-input>\n\n			</ion-item>\n\n			<ion-item no-lines *ngIf="( signupform.get(\'name\').hasError(\'minlength\') || signupform.get(\'name\').hasError(\'maxlength\') ||signupform.get(\'name\').hasError(\'pattern\') ||signupform.get(\'name\').hasError(\'required\') ) && signupform.get(\'name\').touched">\n\n				<div class="error" *ngIf="signupform.get(\'name\').hasError(\'required\') && signupform.get(\'name\').touched">\n\n					Please enter your name!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'name\').hasError(\'minlength\') && signupform.get(\'name\').touched">\n\n					Minimum 4 characters\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'name\').hasError(\'maxlength\') && signupform.get(\'name\').touched">\n\n					Maximum 30 characters\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'name\').hasError(\'pattern\') && signupform.get(\'name\').touched">\n\n					Just use alphabet character\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 15px; position: absolute; left: 0; top: 3px;" src="../../assets/imgs/inputemail.svg"/>Email Address</ion-label>\n\n				<ion-input type="mail" class="input_form" [(ngModel)]="userData.email" formControlName="email"\n\n          [class.error1]="!signupform.controls.email.valid && signupform.controls.email.dirty"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item no-lines\n\n				*ngIf="( signupform.get(\'email\').hasError(\'minlength\') || signupform.get(\'email\').hasError(\'pattern\') ||signupform.get(\'email\').hasError(\'required\') ) && signupform.get(\'email\').touched">\n\n				<div class="error" *ngIf="signupform.get(\'email\').hasError(\'required\') && signupform.get(\'email\').touched">\n\n					Please Enter your email!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'email\').hasError(\'pattern\') && signupform.get(\'email\').touched">\n\n					Please enter a valid email address!\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 16px; position: absolute; left: 0;" src="../../assets/imgs/inputcntry.svg"/>Country</ion-label>\n\n				<ion-input class="input_form" [(ngModel)]="userData.country" formControlName="country"\n\n          [class.error1]="!signupform.controls.country.valid && signupform.controls.country.dirty"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item no-lines\n\n				*ngIf="( signupform.get(\'country\').hasError(\'minlength\') || signupform.get(\'country\').hasError(\'maxlength\') ||signupform.get(\'country\').hasError(\'pattern\') ||signupform.get(\'country\').hasError(\'required\') ) && signupform.get(\'country\').touched">\n\n				<div class="error" *ngIf="signupform.get(\'country\').hasError(\'required\') && signupform.get(\'country\').touched">\n\n					Please Enter your country!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'country\').hasError(\'minlength\') && signupform.get(\'country\').touched">\n\n					Must be minimum 4 characters!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'country\').hasError(\'maxlength\') && signupform.get(\'country\').touched">\n\n					Maximum 10 characters allowed!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'country\').hasError(\'pattern\') && signupform.get(\'country\').touched">\n\n					Just use alphabet character!\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 14px; position: absolute; left: 0; top: 4px;" src="../../assets/imgs/inputclndr.svg"/>Date of Birth</ion-label>\n\n				<ion-datetime class="input_form" displayFormat="DD MMMM YYYY" [(ngModel)]="userData.dob" formControlName="dob" min="1970" max="2005-01-01">\n\n				</ion-datetime>\n\n			</ion-item>\n\n\n\n			<ion-item no-lines *ngIf="(signupform.get(\'dob\').hasError(\'required\') && signupform.get(\'dob\').touched)">\n\n				<div class="error" *ngIf="signupform.get(\'dob\').hasError(\'required\') && signupform.get(\'dob\').touched">\n\n					please Enter your date of birth!.\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 17px; position: absolute; left: 0;" src="../../assets/imgs/inputlock.svg"/>Password</ion-label>\n\n				<ion-input type="password" class="input_form" [(ngModel)]="userData.password" formControlName="password"\n\n          [class.error1]="!signupform.controls.password.valid && signupform.controls.password.dirty"></ion-input>\n\n			</ion-item>\n\n			<ion-item no-lines\n\n				*ngIf="( signupform.get(\'password\').hasError(\'minlength\') || signupform.get(\'password\').hasError(\'maxlength\') ||signupform.get(\'password\').hasError(\'required\') ) && signupform.get(\'password\').touched">\n\n				<div class="error" *ngIf="signupform.get(\'password\').hasError(\'required\') && signupform.get(\'password\').touched">\n\n					Please enter your password!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'password\').hasError(\'minlength\') && signupform.get(\'password\').touched">\n\n					Please enter minimum 6 characters!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'password\').hasError(\'maxlength\') && signupform.get(\'password\').touched">\n\n					Maximum 12 characters are allowed!\n\n				</div>\n\n			</ion-item>\n\n			\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 17px; position: absolute; left: 0;" src="../../assets/imgs/inputlock.svg"/>Repeat Password</ion-label>\n\n				<ion-input type="password" class="input_form" pattern="{{userData.password}}" [(ngModel)]="userData.cnfpassword" formControlName="cnfpassword"\n\n          [class.error1]="!signupform.controls.cnfpassword.valid && signupform.controls.cnfpassword.dirty"></ion-input>\n\n			</ion-item>\n\n			<ion-item no-lines\n\n				*ngIf="( signupform.get(\'cnfpassword\').hasError(\'minlength\') || signupform.get(\'cnfpassword\').hasError(\'maxlength\') ||signupform.get(\'cnfpassword\').hasError(\'required\') ||signupform.get(\'cnfpassword\').hasError(\'pattern\') ) && signupform.get(\'cnfpassword\').touched">\n\n				<div class="error" *ngIf="signupform.get(\'cnfpassword\').hasError(\'required\') && signupform.get(\'cnfpassword\').touched">\n\n					Please re-enter your password!\n\n				</div>\n\n				<div class="error" *ngIf="signupform.get(\'cnfpassword\').hasError(\'pattern\') && signupform.get(\'cnfpassword\').touched">\n\n					Please re-enter the same new password!\n\n				</div>\n\n			</ion-item>\n\n\n\n		</ion-list>\n\n		<button ion-button block class="login_page_btn" [disabled]="signupform.invalid">Register</button>\n\n	</form>-->\n\n	<!--<div class="or_social_optn">\n\n		<p class="or_opt">Or</p>\n\n	</div>\n\n	<button ion-button block class="fb_btn s_btn"> <ion-icon class="s_media_icon fb_icon" ios="logo-facebook" md="logo-facebook"></ion-icon>Log In via Facebook</button>\n\n	<button ion-button block class="lnkdn_btn s_btn"><ion-icon class="s_media_icon" ios="logo-linkedin" md="logo-linkedin"></ion-icon>Log In via Linkedin</button>-->\n\n</ion-content>\n\n<!-- <ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditnewtaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditnewtaskPage = /** @class */ (function () {
    function EditnewtaskPage(nav, navCtrl, http, navParams, popoverCtrl, storage, toastCtrl, loadingCtrl) {
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.UserDetails = Array();
        this.allCats = Array();
        this.allTask = Array();
        this.subtaskArray = [];
        this.subtasksCount = 1;
        //public due_date: string = new Date().toISOString();
        this.taskdata = { 'task_name': '', 'duration': '', 'bring_with_you': '', 'frequency': '', 'not_completed': '', 'priority': '', 'category': '', 'color': '', 'due_date': '', 'type': '' };
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.taskid = navParams.get('task_id');
        console.log(this.taskid);
    }
    EditnewtaskPage.prototype.ngOnInit = function () {
        this.newTaskform = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            task_name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(50)]),
            duration: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            //bring_with_you: new FormControl('', [Validators.required]),
            bring_with_you: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            frequency: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            not_completed: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            priority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            category: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            color: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            //due_date: new FormControl('', [Validators.required]),
            due_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            sub_task1: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            sub_task2: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            sub_task3: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            sub_task4: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            sub_task5: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            sub_task6: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            sub_task7: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            sub_task8: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            sub_task9: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            sub_task10: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            taskid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
    };
    EditnewtaskPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            //console.log(this.UserDetails['userdetails'].id);
            _this.get_user_tasks(_this.taskid);
        });
        console.log(this.UserDetails);
    };
    EditnewtaskPage.prototype.get_user_tasks = function (taskid) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var _url = "http://52.29.115.88/api/v1/user/get_user_taskbyid";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id,
            'id': taskid
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var taskList = JSON.parse(data["_body"]);
            //console.log(postdata);
            console.log(taskList.all_tasks[0]);
            _this.allTask.push(taskList.all_tasks);
            console.log(taskList.all_tasks[0].name);
            console.log(taskList.all_tasks[0].duration);
            _this.duration = taskList.all_tasks[0].duration;
            _this.frequency = taskList.all_tasks[0].frequency;
            _this.not_completed = taskList.all_tasks[0].if_not_completed;
            _this.priority = taskList.all_tasks[0].priority;
            _this.category = taskList.all_tasks[0].category;
            _this.color = taskList.all_tasks[0].color;
            _this.due_date = taskList.all_tasks[0].due_date;
            console.log(taskList.all_tasks[0].due_date);
            loading.dismiss();
            _this.subtask = taskList.all_tasks[0].sub_tasks;
            console.log(_this.subtask.length);
            for (var i = 0; i < _this.subtask.length; i++) {
                console.log(_this.subtask[i]);
                _this.subtaskArray.push({ 'value': _this.subtask[i] });
            }
        });
    };
    EditnewtaskPage.prototype.ionViewDidEnter = function () {
        this.get_user_categories();
    };
    //get user category
    EditnewtaskPage.prototype.get_user_categories = function () {
        var _this = this;
        var _url = "http://52.29.115.88/api/v1/user/user_category";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var catList = JSON.parse(data["_body"]);
            console.log(catList);
            _this.allCats.push(catList.all_category);
        });
        console.log(this.allCats);
    };
    EditnewtaskPage.prototype.gotasks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* TasksPage */]);
    };
    //popover cntrl
    EditnewtaskPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    //add sub task
    EditnewtaskPage.prototype.AddsubTask = function () {
        this.subtasksCount++;
        this.newTaskform.addControl('sub_task' + this.subtasksCount, new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]());
        this.subtaskArray.push({ 'value': '' });
        console.log(this.subtaskArray);
        this.data = true;
    };
    EditnewtaskPage.prototype.remaovesubTask = function (value) {
        this.subtaskArray = this.subtaskArray.filter(function (element) { return element.value != value; });
        this.newTaskform.removeControl('sub_task' + this.subtasksCount);
        console.log(this.subtaskArray);
    };
    EditnewtaskPage.prototype.addTask = function () {
        var _this = this;
        if (this.newTaskform.valid) {
            var data = this.newTaskform.value;
            console.log(data);
            if (this.subtaskArray != null) {
                var taskdata = {
                    'user_id': this.UserDetails['userdetails'].id,
                    'task_name': data.task_name,
                    'duration': data.duration,
                    'bring_with_you': data.bring_with_you,
                    'frequency': data.frequency,
                    'if_not_completed': data.not_completed,
                    'priority': data.priority,
                    'category': data.category,
                    'color': data.color,
                    'due_date': data.due_date,
                    'sub_tasks': this.subtaskArray,
                    'type': 'task',
                    'id': data.taskid,
                };
                console.log(taskdata);
                var _url = "http://52.29.115.88/api/v1/user/update_task";
                this.http.post(_url, taskdata, { headers: this.headers })
                    .subscribe(function (data) {
                    var result = JSON.parse(data["_body"]);
                    console.log(result);
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                        _this.newTaskform.reset();
                        //this.navCtrl.push(TasksPage);
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* TasksPage */]).then(function () {
                            var startIndex = _this.navCtrl.getActive().index - 1;
                            _this.navCtrl.remove(startIndex, 1);
                            var startIndex2 = _this.navCtrl.getActive().index - 2;
                            _this.navCtrl.remove(startIndex2, 1);
                        });
                    });
                    toast.present();
                });
            }
            else {
                var taskdata = {
                    'user_id': this.UserDetails['userdetails'].id,
                    'task_name': data.task_name,
                    'duration': data.duration,
                    'bring_with_you': data.bring_with_you,
                    'frequency': data.frequency,
                    'if_not_completed': data.not_completed,
                    'priority': data.priority,
                    'category': data.category,
                    'color': data.color,
                    'due_date': data.due_date,
                    'type': 'task'
                };
                var _url = "http://52.29.115.88/api/v1/user/create_task";
                this.http.post(_url, taskdata, { headers: this.headers })
                    .subscribe(function (data) {
                    var result = JSON.parse(data["_body"]);
                    console.log(result);
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                        _this.newTaskform.reset();
                        //this.navCtrl.push(TasksPage);
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* TasksPage */]).then(function () {
                            var startIndex = _this.navCtrl.getActive().index - 1;
                            _this.navCtrl.remove(startIndex, 1);
                            var startIndex2 = _this.navCtrl.getActive().index - 2;
                            _this.navCtrl.remove(startIndex2, 1);
                        });
                    });
                    toast.present();
                });
            }
        }
    };
    EditnewtaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editnewtask',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\editnewtask\editnewtask.html"*/'<ion-header>\n\n	<ion-navbar class="header_font" color="primary">\n\n		<ion-title>Edit Task</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngFor="let Task of allTask[0]">\n\n	<form novalidate (ngSubmit)="addTask()" [formGroup]="newTaskform">\n\n		<ion-list style="width: 100%;">\n\n			<ion-item class="input_item">\n\n				<ion-label class="input_label" color="inputcolor" floating><img\n\n						style="max-width: 19px; position: absolute; left: 0;"\n\n						src="../../assets/imgs/inputtask.svg" />Task Name</ion-label>\n\n				<ion-input type="text" value="{{Task.name}}" formControlName="task_name"\n\n					[class.error1]="!newTaskform.controls.task_name.valid && newTaskform.controls.task_name.dirty">\n\n				</ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item no-lines\n\n				*ngIf="( newTaskform.get(\'task_name\').hasError(\'minlength\') || newTaskform.get(\'task_name\').hasError(\'maxlength\')  ||newTaskform.get(\'task_name\').hasError(\'required\') ) && newTaskform.get(\'task_name\').touched">\n\n				<div class="error"\n\n					*ngIf="newTaskform.get(\'task_name\').hasError(\'required\') && newTaskform.get(\'task_name\').touched">\n\n					Please enter your task name!\n\n				</div>\n\n				<div class="error"\n\n					*ngIf="newTaskform.get(\'task_name\').hasError(\'minlength\') && newTaskform.get(\'task_name\').touched">\n\n					Minimum 3 characters\n\n				</div>\n\n				<div class="error"\n\n					*ngIf="newTaskform.get(\'task_name\').hasError(\'maxlength\') && newTaskform.get(\'task_name\').touched">\n\n					Maximum 50 characters\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-item class="input_item">\n\n				<ion-label class="input_label" color="inputcolor" floating><img\n\n						style="max-width: 18px; position: absolute; left: 0;"\n\n						src="../../assets/imgs/inputclock.svg" />Duration</ion-label>\n\n				<ion-datetime class="input_form" displayFormat="H:mm" [ngModel]=\'duration\' formControlName="duration"\n\n					[class.error1]="!newTaskform.controls.duration.valid && newTaskform.controls.duration.dirty">\n\n				</ion-datetime>\n\n\n\n			</ion-item>\n\n			<ion-item no-lines\n\n				*ngIf="( newTaskform.get(\'task_name\').hasError(\'required\') ) && newTaskform.get(\'task_name\').touched">\n\n				<div class="error"\n\n					*ngIf="newTaskform.get(\'duration\').hasError(\'required\') && newTaskform.get(\'duration\').touched">\n\n					Please enter your task duration!\n\n				</div>\n\n			</ion-item>\n\n			<ion-item class="input_item">\n\n				<ion-label class="input_label" color="inputcolor" floating><img\n\n						style="max-width: 20px; position: absolute; left: 0;"\n\n						src="../../assets/imgs/inputuser.svg" />Bring with You</ion-label>\n\n				<ion-input class="input_form" type="text" value="{{Task.bring_with_you}}"\n\n					formControlName="bring_with_you"\n\n					[class.error1]="!newTaskform.controls.bring_with_you.valid && newTaskform.controls.bring_with_you.dirty">\n\n				</ion-input>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Frequency</ion-label>\n\n				<ion-select class="task_slct_optn" [ngModel]=\'frequency\' formControlName="frequency">\n\n					<ion-option value="daily">Daily</ion-option>\n\n					<ion-option value="weekly">Weekly</ion-option>\n\n					<ion-option value="monthly">Monthly</ion-option>\n\n					<ion-option value="unassigned">Once</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">if not Completed</ion-label>\n\n				<ion-select class="task_slct_optn" [ngModel]=\'not_completed\' formControlName="not_completed">\n\n					<ion-option value="nxt_day">Move to Next day</ion-option>\n\n					<ion-option value="nxt_week">Move to Next Week</ion-option>\n\n					<ion-option value="nxt_month">Move to Next Month</ion-option>\n\n					<ion-option value="delete">Delete</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Priority</ion-label>\n\n				<ion-select class="task_slct_optn" [ngModel]=\'priority\' formControlName="priority">\n\n					<ion-option value="high">High</ion-option>\n\n					<ion-option value="medium">Medium</ion-option>\n\n					<ion-option value="low">Low</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Category</ion-label>\n\n				<ion-select class="task_slct_optn" [ngModel]=\'category\' formControlName="category">\n\n					<div *ngFor="let cat of allCats[0]">\n\n						<ion-option value="{{cat.category_name}}">{{cat.category_name}}</ion-option>\n\n					</div>\n\n				</ion-select>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Color</ion-label>\n\n				<ion-select class="task_slct_optn" [ngModel]=\'color\' formControlName="color">\n\n					<ion-option value="green">Green</ion-option>\n\n					<ion-option value="black">Black</ion-option>\n\n					<ion-option value="blue">Blue</ion-option>\n\n					<ion-option value="red">Red</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n\n\n			<ion-item style="margin: 7px 0 7px;" class="input_item">\n\n				<ion-label class="input_label" color="inputcolor" style="font-family: quicksandsR!important;"><img\n\n						style="max-width: 17px; position: absolute; left: 0;" src="../../assets/imgs/inputclndr.svg" />\n\n					Due Date</ion-label>\n\n\n\n				<ion-datetime class="input_form" displayFormat="D MMM YYYY H:mm" [ngModel]="due_date"\n\n					formControlName="due_date"></ion-datetime>\n\n			</ion-item>\n\n\n\n\n\n			<p class="add_sub_task">Need to add some related sub task?</p>\n\n			<ion-item class="input_item" *ngFor="let att of subtaskArray; let idx = index">\n\n\n\n				<ion-label color="primary">{{att.label}}{{idx+1}}</ion-label>\n\n				<ion-input type="text" text-left [(ngModel)]="subtaskArray[idx].value"\n\n					formControlName="sub_task{{idx+1}}" placeholder="Enter sub task"></ion-input>\n\n				<div ion-button item-end style="margin: 14px 0 0; background: #db2d04; color: #ffffff;" clear\n\n					(click)="remaovesubTask(subtaskArray[idx].value)">\n\n					<ion-icon name="remove"></ion-icon>\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-grid>\n\n				<ion-row>\n\n					<ion-col col-6>\n\n						<div ion-button style="margin: 14px 0 0; background: #73a82f; color: #ffffff;" clear\n\n							(click)="AddsubTask()">\n\n							<ion-icon name="add"></ion-icon>\n\n						</div>\n\n					</ion-col>\n\n\n\n				</ion-row>\n\n			</ion-grid>\n\n		</ion-list>\n\n		<button ion-button block class="save_btn" [disabled]="newTaskform.invalid">Save</button>\n\n		<ion-input type="hidden" formControlName="taskid" [ngModel]="taskid" disabled></ion-input>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\editnewtask\editnewtask.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditnewtaskPage);
    return EditnewtaskPage;
}());

//# sourceMappingURL=editnewtask.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodaystasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newtask_newtask__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editnewtask_editnewtask__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_categories__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TodaystasksPage = /** @class */ (function () {
    function TodaystasksPage(loadingCtrl, global, navCtrl, navParams, popoverCtrl, storage, http, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.UserDetails = Array();
        this.allTasks = Array();
        this.allTasksDaily = Array();
        this.allTasksWeekly = Array();
        this.allTasksMonthly = Array();
        this.allTasksUnassign = Array();
        this.urlGet = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.urlGet = global.url;
    }
    TodaystasksPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
        });
        console.log(this.UserDetails);
    };
    TodaystasksPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad TasksPage');
        this.get_user_tasks();
    };
    TodaystasksPage.prototype.get_user_tasks = function () {
        var _this = this;
        this.allTasks = [];
        this.allTasksDaily = [];
        this.allTasksWeekly = [];
        this.allTasksMonthly = [];
        this.allTasksUnassign = [];
        console.log(this.urlGet);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        // debugger;
        loading.present();
        var _url = "http://52.29.115.88/api/v1/user/get_user_todaystask";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var taskList = JSON.parse(data["_body"]);
            console.log(taskList.all_tasks.daily);
            _this.allTasks.push(taskList.all_tasks);
            _this.allTasksDaily.push(taskList.all_tasks.daily);
            _this.allTasksWeekly.push(taskList.all_tasks.weekly);
            _this.allTasksMonthly.push(taskList.all_tasks.monthly);
            _this.allTasksUnassign.push(taskList.all_tasks.unassigned);
            console.log(_this.allTasksDaily);
            loading.dismiss();
        });
    };
    TodaystasksPage.prototype.gonewtask = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newtask_newtask__["a" /* NewtaskPage */]);
    };
    TodaystasksPage.prototype.gocategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categories_categories__["a" /* CategoriesPage */]);
    };
    TodaystasksPage.prototype.edittask = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editnewtask_editnewtask__["a" /* EditnewtaskPage */], { task_id: id });
    };
    TodaystasksPage.prototype.completetask = function (id) {
        var _this = this;
        console.log(id);
        var _url = this.urlGet + "api/v1/user/update_user_task_status";
        var postdata = {
            'id': id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            if (result.status == "failed") {
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Log in toast');
                });
                toast.present();
                _this.get_user_tasks();
                // this.navCtrl.push(TodaystasksPage);
            }
        });
    };
    TodaystasksPage.prototype.deletetask = function (id) {
        var _this = this;
        var taskdata = {
            'user_id': this.UserDetails['userdetails'].id,
            'id': id
        };
        console.log(taskdata);
        var _url = this.urlGet + "api/v1/user/delete_user_task";
        this.http.post(_url, taskdata, { headers: this.headers })
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            console.log(result);
            if (result.status == "failed") {
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Log in toast');
                });
                toast.present();
                _this.get_user_tasks();
                // this.navCtrl.push(TasksPage);
            }
        });
    };
    //popover cntrl
    TodaystasksPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    TodaystasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todaystasks',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\todaystasks\todaystasks.html"*/'<ion-header>\n\n	<ion-navbar class="header_font" color="primary">\n\n		<ion-title>Today\'s Tasks</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col col-6>\n\n				<button ion-button secondary class="header_btn" (click)="gocategories()">\n\n					<ion-icon style="margin-right: 5px;" ios="ios-add" md="md-add" class="plus_icon"></ion-icon>\n\n					Categories\n\n				</button>\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<button ion-button secondary class="header_btn" (click)="gonewtask()">\n\n					<ion-icon style="margin-right: 5px;" ios="ios-add" md="md-add" class="plus_icon"></ion-icon>New Task\n\n				</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<form>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">Daily</p>\n\n				</div>\n\n			</ion-row>\n\n\n\n			<div class="tab" *ngFor="let item of allTasksDaily[0]; let i = index">\n\n				<div class="tab" *ngIf="item.status == 0">\n\n					<input type="checkbox" id="chckd{{i}}">\n\n					<label class="tab-label" for="chckd{{i}}">{{item.name}}</label>\n\n					<div class="tab-content">\n\n						<ion-list style="width: 100%;">\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Task Name:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Due date:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Duration:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Bring with You:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n							</ion-row>\n\n\n\n\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Frequency:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Priority:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Category:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Color:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">If not Completed:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n							</ion-row>\n\n\n\n\n\n							<button ion-button block (click)="completetask(item.id)"\n\n								class="save_btn save_btn_complete">Complete</button>\n\n							<button ion-button block (click)="edittask(item.id)"\n\n								class="save_btn save_btn_edit">Edit</button>\n\n							<button ion-button block (click)="deletetask(item.id)"\n\n								class="save_btn save_btn_delete">Delete</button>\n\n						</ion-list>\n\n					</div>\n\n				</div>\n\n			</div>\n\n\n\n		</ion-grid>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">Weekly</p>\n\n				</div>\n\n			</ion-row>\n\n\n\n			<div class="tab" *ngFor="let item of allTasksWeekly[0]; let i = index">\n\n				<div class="tab" *ngIf="item.status == 0">\n\n					<input type="checkbox" id="chckw{{i}}">\n\n					<label class="tab-label" for="chckw{{i}}">{{item.name}}</label>\n\n					<div class="tab-content">\n\n						<ion-list style="width: 100%;">\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Task Name:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Due date:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Duration:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Bring with You:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n							</ion-row>\n\n\n\n\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Frequency:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Priority:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Category:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Color:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">If not Completed:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n							</ion-row>\n\n\n\n\n\n							<button ion-button block (click)="completetask(item.id)"\n\n								class="save_btn save_btn_complete">Complete</button>\n\n							<button ion-button block (click)="edittask(item.id)"\n\n								class="save_btn save_btn_edit">Edit</button>\n\n							<button ion-button block (click)="deletetask(item.id)"\n\n								class="save_btn save_btn_delete">Delete</button>\n\n						</ion-list>\n\n					</div>\n\n				</div>\n\n			</div>\n\n\n\n\n\n		</ion-grid>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">Monthly</p>\n\n				</div>\n\n			</ion-row>\n\n			<div class="tab" *ngFor="let item of allTasksMonthly[0]; let i = index">\n\n				<div class="tab" *ngIf="item.status == 0">\n\n					<input type="checkbox" id="chckm{{i}}">\n\n					<label class="tab-label" for="chckm{{i}}">{{item.name}}</label>\n\n					<div class="tab-content">\n\n						<ion-list style="width: 100%;">\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Task Name:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Due date:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Duration:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Bring with You:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n							</ion-row>\n\n\n\n\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Frequency:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Priority:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Category:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Color:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">If not Completed:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n							</ion-row>\n\n\n\n\n\n							<button ion-button block (click)="completetask(item.id)"\n\n								class="save_btn save_btn_complete">Complete</button>\n\n							<button ion-button block (click)="edittask(item.id)"\n\n								class="save_btn save_btn_edit">Edit</button>\n\n							<button ion-button block (click)="deletetask(item.id)"\n\n								class="save_btn save_btn_delete">Delete</button>\n\n						</ion-list>\n\n					</div>\n\n				</div>\n\n			</div>\n\n\n\n		</ion-grid>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">Once</p>\n\n				</div>\n\n			</ion-row>\n\n\n\n			<div class="tab" *ngFor="let item of allTasksUnassign[0]; let i = index">\n\n				<div class="tab" *ngIf="item.status == 0">\n\n					<input type="checkbox" id="chcko{{i}}">\n\n					<label class="tab-label" for="chcko{{i}}">{{item.name}}</label>\n\n					<div class="tab-content">\n\n						<ion-list style="width: 100%;">\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Task Name:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Due date:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Duration:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Bring with You:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n							</ion-row>\n\n\n\n\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Frequency:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Priority:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Category:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Color:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n							</ion-row>\n\n							<ion-row>\n\n								<ion-col size="6" class="title">If not Completed:</ion-col>\n\n								<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n							</ion-row>\n\n\n\n\n\n							<button ion-button block (click)="completetask(item.id)"\n\n								class="save_btn save_btn_complete">Complete</button>\n\n							<button ion-button block (click)="edittask(item.id)"\n\n								class="save_btn save_btn_edit">Edit</button>\n\n							<button ion-button block (click)="deletetask(item.id)"\n\n								class="save_btn save_btn_delete">Delete</button>\n\n						</ion-list>\n\n					</div>\n\n				</div>\n\n			</div>\n\n\n\n		</ion-grid>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\todaystasks\todaystasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], TodaystasksPage);
    return TodaystasksPage;
}());

//# sourceMappingURL=todaystasks.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appsettings_appsettings__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privacypolicies_privacypolicies__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__termandconditions_termandconditions__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.goprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    SettingsPage.prototype.goappsettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__appsettings_appsettings__["a" /* AppsettingsPage */]);
    };
    SettingsPage.prototype.goprivacypolicies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__privacypolicies_privacypolicies__["a" /* PrivacypoliciesPage */]);
    };
    SettingsPage.prototype.gotermandconditions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__termandconditions_termandconditions__["a" /* TermandconditionsPage */]);
        //  window.open('http://52.29.115.88/Mobile-App-Terms.pdf', '_system', 'location=yes');
    };
    SettingsPage.prototype.gorateus = function () {
        window.open('https://play.google.com/store', '_system', 'location=yes');
    };
    //popover cntrl
    SettingsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n		<ion-title>Settings</ion-title>\n\n		<!-- <ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<object style="max-width: 156px; width: 100%; margin: 30px auto 30px auto; left: 0; right: 0; display: block;" type="image/svg+xml" data="../../assets/imgs/logo.svg">\n\n		Your browser does not support SVG\n\n	</object>\n\n	<button ion-button block class="opt_btn" (click)="goprofile()"><img style="max-width: 18px; margin-right: 5px;" src="../../assets/imgs/inputuser.svg"/>Profile</button>\n\n	<button ion-button block class="opt_btn" (click)="goappsettings()"><img style="max-width: 15px; margin-right: 5px;" src="../../assets/imgs/settings.svg"/>App Settings</button>\n\n	<button ion-button block class="opt_btn" (click)="gorateus()" ><img style="max-width: 15px; margin-right: 5px;" src="../../assets/imgs/star.svg"/>Rate Us</button>\n\n	<button ion-button block class="opt_btn" (click)="goprivacypolicies()"><img style="max-width: 15px; margin-right: 5px;" src="../../assets/imgs/inputlock.svg"/>Privacy Policy</button>\n\n	<button ion-button block class="opt_btn"(click)="gotermandconditions()"><img style="max-width: 16px; margin-right: 5px;" src="../../assets/imgs/inputtask.svg"/>Terms and condition</button>\n\n</ion-content>\n\n<!-- <ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer> -->'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_calendar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AddeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddeventPage = /** @class */ (function () {
    function AddeventPage(navCtrl, http, navParams, popoverCtrl, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.UserDetails = Array();
        this.allCats = Array();
        this.subtaskArray = [];
        this.subtasksCount = 1;
        this.due_date = new Date().toISOString();
        this.taskdata = { 'task_name': '', 'duration': '', 'bring_with_you': '', 'frequency': '', 'not_completed': '', 'priority': '', 'category': '', 'color': '', 'due_date': '', 'reminders': '', 'minutes_before': '', 'repetition': '', 'type': '' };
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    AddeventPage.prototype.ngOnInit = function () {
        this.newTaskform = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            task_name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(12)]),
            duration: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            bring_with_you: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            // frequency: new FormControl('', [Validators.required]),
            // not_completed: new FormControl('', [Validators.required]),
            // priority: new FormControl('', [Validators.required]),
            // category: new FormControl('', [Validators.required]),
            //color: new FormControl('', [Validators.required]),
            due_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            // sub_task1: new FormControl(),
            //reminders:new FormControl('', [Validators.required]),
            minutes_before: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            repetition: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
        });
        this.taskdata.duration = "00:00";
    };
    AddeventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            //console.log(this.UserDetails['userdetails'].id);
        });
        console.log(this.UserDetails);
    };
    AddeventPage.prototype.ionViewDidEnter = function () {
        this.get_user_categories();
    };
    //get user category
    AddeventPage.prototype.get_user_categories = function () {
        var _this = this;
        var _url = "http://52.29.115.88/api/v1/user/user_category";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var catList = JSON.parse(data["_body"]);
            console.log(catList);
            _this.allCats.push(catList.all_category);
        });
        console.log(this.allCats);
    };
    AddeventPage.prototype.gotasks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* TasksPage */]);
    };
    //popover cntrl
    AddeventPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    //add sub task
    AddeventPage.prototype.AddsubTask = function () {
        this.subtasksCount++;
        this.newTaskform.addControl('sub_task' + this.subtasksCount, new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]());
        this.subtaskArray.push({ 'value': '' });
        console.log(this.subtaskArray);
        this.data = true;
    };
    AddeventPage.prototype.remaovesubTask = function () {
        var arrlength = this.subtaskArray.length;
        this.subtaskArray.splice(0, 1);
        if (arrlength == 1) {
            this.data = false;
        }
        this.newTaskform.removeControl('sub_task' + this.subtasksCount);
        console.log(this.subtaskArray);
    };
    AddeventPage.prototype.addTask = function () {
        var _this = this;
        if (this.newTaskform.valid) {
            var data = this.newTaskform.value;
            var taskdata = {
                'user_id': this.UserDetails['userdetails'].id,
                'task_name': data.task_name,
                'duration': data.duration,
                'bring_with_you': data.bring_with_you,
                'frequency': '',
                'if_not_completed': '',
                'priority': '',
                'category': '',
                'color': '',
                'due_date': data.due_date,
                'sub_tasks': '',
                'reminders': data.reminders,
                'minutes_before': data.minutes_before,
                'repetition': data.repetition,
                'type': 'event'
            };
            console.log(taskdata);
            var _url = "http://52.29.115.88/api/v1/user/create_task";
            this.http.post(_url, taskdata, { headers: this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                console.log(result);
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 3000,
                    position: 'top'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                    _this.newTaskform.reset();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__calendar_calendar__["a" /* CalendarPage */]);
                });
                toast.present();
            });
        }
    };
    AddeventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addevent',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\addevent\addevent.html"*/'<!--\n\n  Generated template for the AddeventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n		<ion-title>Add Event</ion-title>\n\n		<!-- <ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<form novalidate (ngSubmit)="addTask()" [formGroup]="newTaskform">\n\n    <ion-list style="width: 100%;">\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 19px; position: absolute; left: 0;" src="../../assets/imgs/inputtask.svg"/>Event Name</ion-label>\n\n				<ion-input type="text" [(ngModel)]="taskdata.task_name" formControlName="task_name"\n\n          [class.error1]="!newTaskform.controls.task_name.valid && newTaskform.controls.task_name.dirty"></ion-input>\n\n			</ion-item>\n\n\n\n						<ion-item no-lines\n\n							*ngIf="( newTaskform.get(\'task_name\').hasError(\'minlength\') || newTaskform.get(\'task_name\').hasError(\'maxlength\')  ||newTaskform.get(\'task_name\').hasError(\'required\') ) && newTaskform.get(\'task_name\').touched">\n\n							<div class="error" *ngIf="newTaskform.get(\'task_name\').hasError(\'required\') && newTaskform.get(\'task_name\').touched">\n\n								Please enter your task name!\n\n							</div>\n\n							<div class="error" *ngIf="newTaskform.get(\'task_name\').hasError(\'minlength\') && newTaskform.get(\'task_name\').touched">\n\n								Minimum 4 characters\n\n							</div>\n\n							<div class="error" *ngIf="newTaskform.get(\'task_name\').hasError(\'maxlength\') && newTaskform.get(\'task_name\').touched">\n\n								Maximum 12 characters\n\n							</div>\n\n						</ion-item>\n\n\n\n			<ion-item style="margin: 7px 0 7px;" class="input_item">\n\n				<ion-label class="input_label" color="inputcolor" style="font-family: quicksandsR!important;"><img style="max-width: 17px; position: absolute; left: 0;" src="../../assets/imgs/inputclndr.svg"/>Start Date</ion-label>\n\n				<ion-datetime class="input_form" displayFormat="D MMM YYYY H:mm"  [(ngModel)]="taskdata.due_date" formControlName="due_date" min="{{due_date}}"></ion-datetime>\n\n			</ion-item>\n\n			\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputclock.svg"/>Duration</ion-label>\n\n				<ion-datetime class="input_form" displayFormat="H:mm" value="00:00" [(ngModel)]="taskdata.duration" formControlName="duration" [class.error1]="!newTaskform.controls.duration.valid && newTaskform.controls.duration.dirty"></ion-datetime>\n\n			\n\n			</ion-item>\n\n			<ion-item no-lines\n\n				*ngIf="( newTaskform.get(\'task_name\').hasError(\'required\') ) && newTaskform.get(\'task_name\').touched">\n\n				<div class="error" *ngIf="newTaskform.get(\'duration\').hasError(\'required\') && newTaskform.get(\'duration\').touched">\n\n					Please enter your task duration!\n\n				</div>\n\n			</ion-item>\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 20px; position: absolute; left: 0;" src="../../assets/imgs/inputuser.svg"/>Bring with You</ion-label>\n\n				<ion-input class="input_form" type="text" [(ngModel)]="taskdata.bring_with_you" formControlName="bring_with_you"\n\n          [class.error1]="!newTaskform.controls.bring_with_you.valid && newTaskform.controls.bring_with_you.dirty"></ion-input>\n\n			</ion-item>\n\n			\n\n			<!--<ion-item class="input_item">			\n\n			<ion-label class="input_label" color="inputcolor" floating>\n\n			<img style="max-width: 17px; position: absolute; left: 0;" src="../../assets/imgs/add-reminder.svg"/>Reminders</ion-label>\n\n			<ion-input class="input_form" type="text" [(ngModel)]="taskdata.reminders" formControlName="reminders"\n\n          [class.error1]="!newTaskform.controls.reminders.valid && newTaskform.controls.reminders.dirty"></ion-input>\n\n		   </ion-item>-->\n\n		   \n\n		    <ion-item class="input_item task_select_opt">\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;"\n\n					src="../../assets/imgs/inputclock.svg" />Reminders</ion-label>\n\n			<ion-select class="task_slct_optn" class="task_slct_optn" [(ngModel)]="taskdata.minutes_before" formControlName="minutes_before">\n\n				<ion-option value="15">15 minutes</ion-option>\n\n				<ion-option value="30">30 Minutes</ion-option>\n\n			</ion-select>\n\n		   </ion-item>\n\n		   \n\n		   <ion-item style="border-bottom: 1px solid #dedede;" class="input_item task_select_opt">\n\n			<ion-label style="font-family: quicksandsR!important; color: #636363;">Repetition</ion-label>\n\n			<ion-select class="task_slct_optn" class="task_slct_optn" [(ngModel)]="taskdata.repetition" formControlName="repetition">\n\n				<!--<ion-option value="nxt_day">Daily</ion-option>\n\n				<ion-option value="today">Move to Next day</ion-option>-->\n\n				<ion-option value="daily">Daily</ion-option>\n\n					<ion-option value="weekly">Weekly</ion-option>\n\n					<ion-option value="monthly">Monthly</ion-option>\n\n					<ion-option value="notrepeating">Not Repeating</ion-option>\n\n			</ion-select>\n\n		   </ion-item>\n\n			\n\n			\n\n			\n\n		</ion-list>\n\n		<button ion-button block class="save_btn" [disabled]="newTaskform.invalid">Save</button>\n\n	</form>\n\n	<!--<ion-list style="width: 100%;">\n\n		<ion-item class="input_item">			\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 19px; position: absolute; left: 0;" src="../../assets/imgs/inputtask.svg"/>Event Name</ion-label>\n\n			<ion-input></ion-input>\n\n		</ion-item>\n\n		<ion-item style="margin: 14px 0 0px 0" class="input_item">\n\n			<ion-label class="input_label" color="inputcolor" style="font-family: quicksandsR!important;"><img style="max-width: 17px; position: absolute; left: 0;" src="../../assets/imgs/inputclndr.svg"/>Start Date</ion-label>\n\n			<ion-datetime class="input_form" display-format="MMM DD, YYYY HH:mm"></ion-datetime>\n\n		</ion-item>\n\n		<ion-item class="input_item">			\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputclock.svg"/>Duration</ion-label>\n\n			<ion-input class="input_form"></ion-input>\n\n		</ion-item>\n\n		<ion-item class="input_item">			\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 20px; position: absolute; left: 0;" src="../../assets/imgs/inputuser.svg"/>Bring with You</ion-label>\n\n			<ion-input class="input_form"></ion-input>\n\n		</ion-item>\n\n		<ion-item class="input_item">			\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 17px; position: absolute; left: 0;" src="../../assets/imgs/add-reminder.svg"/>Reminders</ion-label>\n\n			<ion-input class="input_form"></ion-input>\n\n		</ion-item>\n\n		<ion-item class="input_item task_select_opt">\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;"\n\n					src="../../assets/imgs/inputclock.svg" />Minutes Before</ion-label>\n\n			<ion-select class="task_slct_optn">\n\n				<ion-option value="15">15 minutes</ion-option>\n\n				<ion-option value="30">30 Minutes</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n		<ion-item style="border-bottom: 1px solid #dedede;" class="input_item task_select_opt">\n\n			<ion-label style="font-family: quicksandsR!important; color: #636363;">Repetition</ion-label>\n\n			<ion-select class="task_slct_optn">\n\n				<ion-option value="nxt_day">Daily</ion-option>\n\n				<ion-option value="today">Move to Next day</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n	</ion-list>\n\n	<button ion-button block class="save_btn" (click)="gotasks()">Save</button>-->\n\n	\n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer>-->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\addevent\addevent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddeventPage);
    return AddeventPage;
}());

//# sourceMappingURL=addevent.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklycalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dhtmlx_scheduler__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dhtmlx_scheduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dhtmlx_scheduler__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import 'dhtmlx-scheduler/codebase/dhtmlxscheduler.css';
var WeeklycalenderPage = /** @class */ (function () {
    function WeeklycalenderPage(app, platform, loadingCtrl, global, navCtrl, navParams, popoverCtrl, storage, http, toastCtrl) {
        this.app = app;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.UserDetails = Array();
        this.allTasks = Array();
        this.allTasksDaily = Array();
        this.allTasksWeekly = Array();
        this.allTasksMonthly = Array();
        this.allTasksUnassign = Array();
        this.urlGet = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // // debugger;
        this.urlGet = global.url;
    }
    WeeklycalenderPage.prototype.ionViewWillLeave = function () {
        // debugger;
        console.log('Looks like I’m about to leave');
        var eventId = scheduler.getState().lightbox_id;
        if (eventId) {
            // scheduler.cancel_lightbox();
            scheduler.endLightbox(eventId);
            console.log('opened');
        }
        this.subscription = 0;
    };
    WeeklycalenderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // debugger;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            //console.log(this.UserDetails['userdetails'].id);
        });
        console.log('ionViewDidLoad WeeklycalenderPage');
    };
    WeeklycalenderPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad TasksPage');
        this.get_user_tasks();
        this.subscription = 1;
        //Registration of push in Android and Windows Phone
        this.platform.registerBackButtonAction(function () {
            if (_this.subscription == 1) {
                var evs = scheduler.getEvents();
                // console.log(evs[evs.length]);
                for (var i = 0; i < evs.length; i++) {
                    scheduler.editStop(evs[i].id);
                }
                // scheduler.eventRemove(evs[evs.length] );
            }
            else {
                var nav = _this.app.getActiveNav();
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    _this.platform.exitApp();
                }
            }
            console.log("run backbuttton");
        });
    };
    //popover cntrl
    WeeklycalenderPage.prototype.presentPopover = function (myEvent) {
        // debugger;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    WeeklycalenderPage.prototype.ngOnInit = function () {
    };
    WeeklycalenderPage.prototype.showLoading = function () {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            this.loading.present();
        }
    };
    WeeklycalenderPage.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    WeeklycalenderPage.prototype.get_user_tasks = function () {
        // debugger;
        var _this = this;
        this.showLoading();
        scheduler.clearAll();
        scheduler.config.date_format = '%Y-%m-%d %H:%i';
        scheduler.config.touch_swipe_dates = true;
        scheduler.config.touch_drag = 150;
        scheduler.config.show_loading = true;
        scheduler.config.touch = "force";
        scheduler.init(this.schedulerContainer.nativeElement, new Date(), "week");
        scheduler.attachEvent('onEventAdded', function (id, ev) {
            // debugger;
            console.log('event added ', ev);
            console.log('event id ', id);
            var start_date_Hours = ev.start_date.getHours();
            var start_date_mins = ev.start_date.getMinutes();
            var end_date_Hours = ev.end_date.getHours();
            var end_date_mins = ev.end_date.getMinutes();
            var start_time = start_date_Hours + ':' + start_date_mins;
            var end_time = end_date_Hours + ':' + end_date_mins;
            var duration_hours = end_date_Hours - start_date_Hours;
            var duration_min = end_date_mins - start_date_mins;
            var duration = duration_hours + ':' + duration_min;
            console.log('start date', duration);
            var taskdata = {
                'user_id': _this.UserDetails['userdetails'].id,
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
            };
            var _url = "http://52.29.115.88/api/v1/user/create_task";
            _this.http.post(_url, taskdata, { headers: _this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                console.log(result);
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 3000,
                    position: 'top'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                    // this.newTaskform.reset();
                    // this.navCtrl.push(CalendarPage);
                });
                toast.present();
            });
        });
        scheduler.attachEvent("onEventDropOut", function (id, original, to, e) {
            // debugger;
            console.log("onEventDropOut fired");
        });
        scheduler.attachEvent('onEventChanged', function (id, ev) {
            // debugger;
            console.log('event changed ', ev);
            var start_date = _this.convert(ev.start_date);
            var end_date = _this.convert(ev.end_date);
            console.log(start_date);
            var taskdata = {
                'user_id': _this.UserDetails['userdetails'].id,
                'taskdata': ev,
                'start_date': start_date,
                'end_date': end_date
            };
            console.log(ev.start_date);
            var _url = _this.urlGet + "api/v1/user/update_user_task";
            _this.http.post(_url, taskdata, { headers: _this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                console.log(result);
                if (result.status == "failed") {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Log in toast');
                    });
                    toast.present();
                }
            });
        });
        scheduler.attachEvent('onEventDeleted', function (id) {
            // debugger;
            //this.eventService.remove(id);
            console.log(id);
            var taskdata = {
                'user_id': _this.UserDetails['userdetails'].id,
                'id': id
            };
            console.log(taskdata);
            var _url = _this.urlGet + "api/v1/user/delete_user_task";
            _this.http.post(_url, taskdata, { headers: _this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                console.log(result);
                if (result.status == "failed") {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Log in toast');
                    });
                    toast.present();
                }
            });
        });
        var _url = this.urlGet + "api/v1/user/get_user_task_calender";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            // debugger;
            var taskList = JSON.parse(data["_body"]);
            _this.allTasks.push(taskList.all_tasks);
            console.log(_this.allTasks[0]);
            scheduler.parse(_this.allTasks[0], "json");
            _this.dismissLoading();
        }, function (err) {
            _this.dismissLoading();
        });
        this.get_user_unassigntasks();
    };
    WeeklycalenderPage.prototype.get_user_unassigntasks = function () {
        var _this = this;
        // debugger;
        console.log(this.urlGet);
        var _url = this.urlGet + "api/v1/user/get_user_task_unassign";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var taskList = JSON.parse(data["_body"]);
            console.log(taskList.all_tasks.daily);
            _this.allTasksDaily.push(taskList.all_tasks.daily);
            _this.allTasksWeekly.push(taskList.all_tasks.weekly);
            _this.allTasksMonthly.push(taskList.all_tasks.monthly);
            _this.allTasksUnassign.push(taskList.all_tasks.unassigned);
            console.log(_this.allTasksWeekly);
            _this.dismissLoading();
        }, function (err) {
            _this.dismissLoading();
            console.log(err);
        });
    };
    WeeklycalenderPage.prototype.convert = function (str) {
        // debugger;
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        var hours = ("0" + date.getHours()).slice(-2);
        var min = ("0" + date.getMinutes()).slice(-2);
        var data = [date.getFullYear(), mnth, day].join("-");
        data = data + ' ' + hours + ':' + min;
        return data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("scheduler_here"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WeeklycalenderPage.prototype, "schedulerContainer", void 0);
    WeeklycalenderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
            selector: 'page-weeklycalender',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\weeklycalender\weeklycalender.html"*/'<ion-header>\n\n	<ion-navbar class="header_font" color="primary">\n\n		<ion-title>Weekly Calendar</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div #scheduler_here class="dhx_cal_container" style="width: 100%; height:100vh">\n\n		<div class="dhx_cal_navline">\n\n			<div class="dhx_cal_prev_button">&nbsp;</div>\n\n			<div class="dhx_cal_next_button" >&nbsp;</div>\n\n			<div class="dhx_cal_today_button"></div>\n\n			<div class="dhx_cal_date"></div>\n\n			<div class="dhx_cal_tab" name="day_tab"></div>\n\n			<div class="dhx_cal_tab" name="week_tab"></div>\n\n			<div class="dhx_cal_tab" name="month_tab"></div>\n\n		</div>\n\n		<div class="dhx_cal_header"></div>\n\n		<div class="dhx_cal_data"></div>\n\n	</div>\n\n	<!-- <button ion-button block (click)="deleteEvent()" class="save_btn save_btn_delete">Delete</button> -->\n\n</ion-content>'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\weeklycalender\weeklycalender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], WeeklycalenderPage);
    return WeeklycalenderPage;
}());

//# sourceMappingURL=weeklycalender.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlycalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dhtmlx_scheduler__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dhtmlx_scheduler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dhtmlx_scheduler__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {} from  'dhtmlx-scheduler/codebase/dhtmlxscheduler.css';




var MonthlycalenderPage = /** @class */ (function () {
    function MonthlycalenderPage(loadingCtrl, global, navCtrl, navParams, popoverCtrl, storage, http, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.UserDetails = Array();
        this.allTasks = Array();
        this.urlGet = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.urlGet = global.url;
    }
    MonthlycalenderPage.prototype.ionViewWillLeave = function () {
        // debugger;
        console.log('Looks like I’m about to leave');
        var eventId = scheduler.getState().lightbox_id;
        if (eventId) {
            // scheduler.cancel_lightbox();
            scheduler.endLightbox(eventId);
            console.log('opened');
        }
    };
    MonthlycalenderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            //console.log(this.UserDetails['userdetails'].id);
        });
        console.log('ionViewDidLoad WeeklycalenderPage');
    };
    MonthlycalenderPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad TasksPage');
        this.get_user_tasks();
    };
    //popover cntrl
    MonthlycalenderPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    MonthlycalenderPage.prototype.ngOnInit = function () {
    };
    MonthlycalenderPage.prototype.get_user_tasks = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        scheduler.clearAll();
        scheduler.init(this.schedulerContainer.nativeElement, new Date(), "month");
        scheduler.config.xml_date = '%Y-%m-%d %H:%i';
        this.dhx_cal_today_button.nativeElement.innerHTML = "Current month";
        scheduler.attachEvent('onEventAdded', function (id, ev) {
            console.log(ev);
        });
        scheduler.attachEvent('onEventChanged', function (id, ev) {
            console.log(ev);
            var start_date = _this.convert(ev.start_date);
            var end_date = _this.convert(ev.end_date);
            console.log(start_date);
            var taskdata = {
                'user_id': _this.UserDetails['userdetails'].id,
                'taskdata': ev,
                'start_date': start_date,
                'end_date': end_date
            };
            console.log(taskdata);
            var _url = _this.urlGet + "api/v1/user/update_user_task";
            _this.http.post(_url, taskdata, { headers: _this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                console.log(result);
                if (result.status == "failed") {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Log in toast');
                    });
                    toast.present();
                }
            });
        });
        scheduler.attachEvent('onEventDeleted', function (id) {
            console.log(id);
            var taskdata = {
                'user_id': _this.UserDetails['userdetails'].id,
                'id': id
            };
            console.log(taskdata);
            var _url = _this.urlGet + "api/v1/user/delete_user_task";
            _this.http.post(_url, taskdata, { headers: _this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                console.log(result);
                if (result.status == "failed") {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Log in toast');
                    });
                    toast.present();
                }
            });
        });
        var _url = this.urlGet + "api/v1/user/get_user_task_calender";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var taskList = JSON.parse(data["_body"]);
            _this.allTasks.push(taskList.all_tasks);
            console.log(_this.allTasks[0]);
            scheduler.parse(_this.allTasks[0], "json");
            loading.dismiss();
        });
    };
    MonthlycalenderPage.prototype.dataset = function () {
        var events = [
            { id: 1, start_date: '2017-09-01 00:00', end_date: '2017-09-01 03:00', text: 'Event 1' },
            { id: 2, start_date: '2017-09-03 00:00', end_date: '2017-09-03 05:00', text: 'Event 2' }
        ];
        return { events: events };
    };
    MonthlycalenderPage.prototype.convert = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        var hours = ("0" + date.getHours()).slice(-2);
        var min = ("0" + date.getMinutes()).slice(-2);
        var data = [date.getFullYear(), mnth, day].join("-");
        data = data + ' ' + hours + ':' + min;
        return data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('dhx_cal_today_button'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MonthlycalenderPage.prototype, "dhx_cal_today_button", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("scheduler_here"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MonthlycalenderPage.prototype, "schedulerContainer", void 0);
    MonthlycalenderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
            selector: 'page-monthlycalender',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\monthlycalender\monthlycalender.html"*/'<!--\n\n  Generated template for the WeeklycalenderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n   <ion-navbar class="header_font" color="primary">\n\n	<ion-title>Monthly Calendar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<div #scheduler_here class="dhx_cal_container" style="width: 100%; height:100vh">\n\n   <div class="dhx_cal_navline">\n\n       <div class="dhx_cal_prev_button">&nbsp;</div>\n\n       <div class="dhx_cal_next_button">&nbsp;</div>\n\n       <div #dhx_cal_today_button class="dhx_cal_today_button" style="width: 100px;text-transform: initial;"></div>\n\n       <div class="dhx_cal_date"></div>\n\n       <div class="dhx_cal_tab" name="day_tab"></div>\n\n       <div class="dhx_cal_tab" name="week_tab"></div>\n\n       <div class="dhx_cal_tab" name="month_tab"></div>\n\n   </div>\n\n   <div class="dhx_cal_header"></div>\n\n   <div class="dhx_cal_data"></div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\monthlycalender\monthlycalender.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MonthlycalenderPage);
    return MonthlycalenderPage;
}());

//# sourceMappingURL=monthlycalender.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { CircleProgressComponent } from '../../../node_modules/ng-circle-progress';



/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(storage, http, global, navCtrl, navParams, popoverCtrl, nav, toastCtrl, loadingCtrl) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.UserDetails = Array();
        this.dashboard = Array();
        this.userdetails = Array();
        this.urlGet = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.urlGet = global.url;
    }
    /* ionViewWillEnter()
     {
        
     } */
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('ionViewDidLoad DashboardPage'); 
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            console.log(_this.UserDetails['userdetails'].id);
            _this.userdetails.push(_this.UserDetails['userdetails']);
            _this.get_dashboard();
            console.log(_this.UserDetails);
        });
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        //this.get_dashboard();
    };
    DashboardPage.prototype.get_dashboard = function () {
        var _this = this;
        //console.log(this.urlGet);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var _url = this.urlGet + "api/v1/user/dashboard";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var noteList = JSON.parse(data["_body"]);
            console.log(noteList);
            _this.dashboard.push(noteList.dashboard);
            console.log(_this.dashboard);
            loading.dismiss();
        });
        //console.log(this.allNotes);
    };
    //popover cntrl
    DashboardPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-navbar class="header_font" color="primary">\n\n		<ion-title>Dashboard</ion-title>\n\n		<!-- <ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n	</ion-navbar>\n\n	<ion-list style="margin: 0;"  *ngFor="let note of userdetails">\n\n		<ion-item class="dshbrd_user_detail">\n\n			<ion-avatar class="user_phto_sec" item-start>\n\n				<img style="width: 40px; height: 40px; border-radius: 50%;" src="../../assets/imgs/dash_profile_picture.png">\n\n			</ion-avatar>\n\n			<h2 class="user_dshbrd_nme">{{note.name}}</h2>\n\n			<p class="user_dshbrd_cntry">{{note.country}}</p>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-row class="progress" *ngFor="let note of dashboard">\n\n	<circle-progress\n\n	[percent]="note.percent"\n\n	[radius]="80"\n\n	[outerStrokeWidth]="14"\n\n	[innerStrokeWidth]="8"\n\n	[outerStrokeColor]="\'#73a82f\'"\n\n	[innerStrokeColor]="\'#e9e9e9\'"\n\n	[animation]="false"\n\n  ></circle-progress>\n\n  </ion-row>\n\n	  <p class="perentage_text">Percentage completed(Monthly)</p> \n\n	  <div class="counting_sec">\n\n		<ion-grid class="no_padding">\n\n			<ion-row *ngFor="let note of dashboard">\n\n				<ion-col class="border_right" col-6>\n\n					<h3 class="nmbr">{{note.completed}}</h3>\n\n					<p class="para">Completed tasks</p>\n\n				</ion-col>\n\n				<ion-col col-6>\n\n					<h3 class="nmbr">{{note.notcompleted}}</h3>\n\n					<!--<p class="para">Medals collected</p>-->\n\n					<p class="para">Pending tasks</p>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>	\n\n	</div> \n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n	<p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer>-->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 230;

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RateusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RateusPage = /** @class */ (function () {
    function RateusPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.anArray = [];
    }
    RateusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RateusPage');
    };
    //popover cntrl
    RateusPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    //dynamic input field
    RateusPage.prototype.goTo = function () {
        console.log('this.anArray', this.anArray);
        this.data = true;
    };
    RateusPage.prototype.Add = function () {
        this.anArray.push({ 'value': '' });
    };
    RateusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rateus',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\rateus\rateus.html"*/'<!--\n\n  Generated template for the RateusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Rate Us</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item *ngFor="let att of anArray; let idx = index">\n\n    <ion-label color="primary">{{att.label}}{{idx+1}}</ion-label>\n\n    <ion-input type="text" text-left [(ngModel)]="anArray[idx].value"></ion-input>\n\n  </ion-item>\n\n  <button ion-button (click)="Add()">Add More</button>\n\n  <button ion-button full (click)="goTo()">let\'s go</button>\n\n  \n\n  <ion-card *ngIf="data">\n\n    <ion-item *ngFor="let att of anArray;">\n\n      <div class="card-title">{{att.value}}</div>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\rateus\rateus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], RateusPage);
    return RateusPage;
}());

//# sourceMappingURL=rateus.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(navCtrl, navParams, http, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.changepassdata = { "oldpassword": "", "newpassword": "", "cnfnewpassword": "" };
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.UserDetails = Array();
    }
    ChangepasswordPage.prototype.ngOnInit = function () {
        this.changepassform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            oldpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            newpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(12)]),
            cnfnewpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
    };
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChangepasswordPage');
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            //console.log(this.UserDetails['userdetails'].id);
        });
        console.log(this.UserDetails);
    };
    ChangepasswordPage.prototype.changePassword = function () {
        var _this = this;
        var user_id = this.UserDetails['userdetails'].id;
        var encrypt_old_password = this.UserDetails['userdetails'].password;
        if (this.changepassform.valid) {
            var data = this.changepassform.value;
            console.log(data);
            var pass_change_data = {
                "user_id": user_id,
                "encrypt_old_password": encrypt_old_password,
                "entered_old_password": data.oldpassword,
                "new_password": data.newpassword
            };
            var _url = "http://52.29.115.88/api/v1/user/change_password";
            this.http.post(_url, pass_change_data, { headers: this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                //console.log(result);
                if (result.status == "failed") {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('change password in toast');
                        //console.log(result);
                        _this.changepassform.reset();
                    });
                    toast.present();
                }
            });
        }
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\changepassword\changepassword.html"*/'<!--\n\n  Generated template for the ChangepasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n    <ion-title center text-center style="padding:--px;">Change Password</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form novalidate (ngSubmit)="changePassword()" [formGroup]="changepassform">\n\n    <ion-item class="input_item">\n\n      <ion-label class="input_label" color="inputcolor" floating><img\n\n          style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputlock.svg" />Enter Old Password\n\n      </ion-label>\n\n      <ion-input type="password" [(ngModel)]="changepassdata.oldpassword" formControlName="oldpassword" [class.error1]="!changepassform.controls.oldpassword.valid && changepassform.controls.oldpassword.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-lines *ngIf="( changepassform.get(\'oldpassword\').hasError(\'required\') ) && changepassform.get(\'oldpassword\').touched">\n\n      <div class="error" *ngIf="changepassform.get(\'oldpassword\').hasError(\'required\') && changepassform.get(\'oldpassword\').touched">\n\n        Please enter your old password.\n\n      </div>\n\n    </ion-item>\n\n\n\n    <ion-item class="input_item">\n\n      <ion-label class="input_label" color="inputcolor" floating><img\n\n          style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputlock.svg" />Enter New Password\n\n      </ion-label>\n\n      <ion-input type="password" [(ngModel)]="changepassdata.newpassword" formControlName="newpassword" [class.error1]="!changepassform.controls.newpassword.valid && changepassform.controls.newpassword.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-lines *ngIf="( changepassform.get(\'newpassword\').hasError(\'minlength\') || changepassform.get(\'newpassword\').hasError(\'maxlength\') ||changepassform.get(\'newpassword\').hasError(\'required\') ) && changepassform.get(\'newpassword\').touched">\n\n      <div class="error"\n\n        *ngIf="changepassform.get(\'newpassword\').hasError(\'required\') && changepassform.get(\'newpassword\').touched">\n\n        Please enter your new password.\n\n      </div>\n\n      <div class="error"\n\n        *ngIf="changepassform.get(\'newpassword\').hasError(\'minlength\') && changepassform.get(\'newpassword\').touched">\n\n        Minimum 6 characters please.\n\n      </div>\n\n      <div class="error"\n\n        *ngIf="changepassform.get(\'newpassword\').hasError(\'maxlength\') && changepassform.get(\'newpassword\').touched">\n\n        Maximum 12 characters allowed.\n\n      </div>\n\n    </ion-item>\n\n\n\n    <ion-item class="input_item">\n\n      <ion-label class="input_label" color="inputcolor" floating><img style="max-width: 17px; position: absolute; left: 0;"\n\n          src="../../assets/imgs/inputlock.svg" />Repeat Password</ion-label>\n\n      <ion-input type="password" class="input_form" pattern="{{changepassdata.newpassword}}" [(ngModel)]="changepassdata.cnfnewpassword"\n\n        formControlName="cnfnewpassword"\n\n        [class.error1]="!changepassform.controls.cnfnewpassword.valid && changepassform.controls.cnfnewpassword.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-lines\n\n      *ngIf="( changepassform.get(\'cnfnewpassword\').hasError(\'minlength\') || changepassform.get(\'cnfnewpassword\').hasError(\'maxlength\') ||changepassform.get(\'cnfnewpassword\').hasError(\'required\') ||changepassform.get(\'cnfnewpassword\').hasError(\'pattern\') ) && changepassform.get(\'cnfnewpassword\').touched">\n\n      <div class="error"\n\n        *ngIf="changepassform.get(\'cnfnewpassword\').hasError(\'required\') && changepassform.get(\'cnfnewpassword\').touched">\n\n        Please re-enter your password!\n\n      </div>\n\n    \n\n      <div class="error" *ngIf="changepassform.get(\'cnfnewpassword\').hasError(\'pattern\') && changepassform.get(\'cnfnewpassword\').touched">\n\n        Please re-enter the same new password!\n\n      </div>\n\n    </ion-item>\n\n    <!-- <ion-item class="input_item">\n\n      <ion-label class="input_label" color="inputcolor" floating><img\n\n          style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputlock.svg" />Re-Enter New\n\n        Password</ion-label>\n\n      <ion-input type="password" pattern="{{changepassdata.newpassword}}" ([ngModel])="changepassdata.cnfnewpassword" formControlName="cnfnewpassword" \n\n      [class.error1]="!changepassform.controls.cnfnewpassword.valid && changepassform.controls.cnfnewpassword.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-lines\n\n      *ngIf="( changepassform.get(\'cnfnewpassword\').hasError(\'required\') || changepassform.get(\'cnfnewpassword\').hasError(\'pattern\') ) && changepassform.get(\'cnfnewpassword\').touched">\n\n      <div class="error"\n\n        *ngIf="changepassform.get(\'cnfnewpassword\').hasError(\'required\') && changepassform.get(\'cnfnewpassword\').touched">\n\n        Please re-enter your new password.\n\n      </div>\n\n      <div class="error"\n\n        *ngIf="changepassform.get(\'cnfnewpassword\').hasError(\'pattern\') && changepassform.get(\'cnfnewpassword\').touched">\n\n        Please re-enter your same new password.\n\n      </div>\n\n    </ion-item> -->\n\n    <button ion-button secondary class="save_btn" [disabled]="changepassform.invalid">Save</button>\n\n  </form>\n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n  <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer>-->'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forgotpassword_forgotpassword__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LoginPage = /** @class */ (function () {
    function LoginPage(platform, fcm, navCtrl, navParams, popoverCtrl, http, nav, toastCtrl, storage, loadingCtrl) {
        this.platform = platform;
        this.fcm = fcm;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.hidecontinue = true;
        this.hideregister = false;
        this.hideotplogin = false;
        this.loginData = { "email": "", "devicetoken": "", "otp": "" };
        this.userDetails = "userdetails";
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.getMobileToken();
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern(EMAILPATTERN)]),
            otp: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    };
    LoginPage.prototype.getMobileToken = function () {
        var _this = this;
        if ((this.platform.is('ios') || this.platform.is('android')) && this.platform.is('cordova')) {
            //Notifications
            this.fcm.subscribeToTopic('all');
            this.fcm.getToken().then(function (token) {
                _this.mobileToken = token;
                console.log(token);
            });
            this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log("Received in background");
                }
                else {
                    console.log("Received in foreground");
                }
                ;
            });
            this.fcm.onTokenRefresh().subscribe(function (token) {
                console.log(token);
            });
            //end notifications.
        }
    };
    LoginPage.prototype.sentotplogin = function () {
        var _this = this;
        // debugger;
        console.log('sentotp');
        var data = this.loginform.value;
        //console.log(data);
        var regdata = {
            "email": data.email,
        };
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var _url = "http://52.29.115.88/api/v1/user/logotp";
        console.log(JSON.stringify(this.headers));
        this.http.post(_url, regdata, { headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            console.log(JSON.stringify(data));
            var result = JSON.parse(data["_body"]);
            loading.dismiss();
            loading.onDidDismiss(function () {
                var toast = _this.toastCtrl.create({
                    message: result,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                    if (result == "Otp successfully sent.") {
                        console.log(result);
                        //this.signupform.reset();
                        //this.nav.popToRoot();
                        _this.hideregister = true;
                        _this.hideotplogin = true;
                        _this.hidecontinue = false;
                    }
                });
                toast.present();
            });
        }, function (err2) {
            loading.dismiss();
            // test
            // this one is for android device, bcz api is not working fine till now on real device
            _this.hideregister = true;
            _this.hideotplogin = true;
            _this.hidecontinue = false;
            console.error(JSON.stringify(err2));
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // debugger;
        console.log("mobiletoken", this.mobileToken);
        localStorage.setItem('mobiletoken', this.mobileToken);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        if (this.loginform.valid) {
            var data = this.loginform.value;
            // let logindata = {
            // 	"email": data.email,
            // 	"devicetoken": 'sam',
            // 	"otp": data.otp
            // };
            var logindata = {
                "email": data.email,
                "devicetoken": this.mobileToken,
                "otp": data.otp
            };
            // verifying that enter otp is correct
            var _url = "http://52.29.115.88/api/v1/user/login";
            this.http.post(_url, logindata, { headers: this.headers })
                .subscribe(function (data) {
                console.log(data);
                console.log(JSON.stringify(data));
                var result = JSON.parse(data["_body"]);
                if (result.status == "failed") {
                    var loading = _this.loadingCtrl.create({
                        content: 'Please wait...',
                        duration: 1000
                    });
                    loading.present();
                    loading.onDidDismiss(function () {
                        var toast = _this.toastCtrl.create({
                            message: result.message,
                            duration: 1000,
                            position: 'top',
                            cssClass: "customtoast",
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                    });
                }
                else {
                    // set the user details to localstorage
                    // this.storage.set(this.userDetails, result);
                    var loading = _this.loadingCtrl.create({
                        content: 'Please wait...',
                        duration: 1000
                    });
                    loading.present();
                    loading.onDidDismiss(function () {
                        var toast = _this.toastCtrl.create({
                            message: result.message,
                            duration: 1000,
                            position: 'top',
                            cssClass: "customtoast",
                        });
                        toast.onDidDismiss(function () {
                            console.log('Log in toast');
                            //console.log(result);
                            if (result.message == "You are successfully logged in.") {
                                _this.loginform.reset();
                                _this.storage.ready().then(function () {
                                    _this.storage.set(_this.userDetails, result).then(function () {
                                        _this.storage.get('userdetails').then(function (value) {
                                            console.log(value); // is empty...
                                            console.log(result.userdetails.profile_update_status); // is empty...
                                            if (result.userdetails.profile_update_status > 0) {
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
                                            }
                                            else {
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
                                            }
                                        });
                                    });
                                });
                            }
                            // else {
                            // 	// fake login for browser, bcz on browser apis are working fine but otp not receiving on mail
                            // 	this.fakeLogin();
                            // }
                        });
                        toast.present();
                    });
                }
            }
            // , (err) => {
            // 	// fake login for android, bcz for now api is not working for android
            // 	this.fakeLogin();
            // }
            );
        }
    };
    LoginPage.prototype.fakeLogin = function () {
        var _this = this;
        //test
        console.log('error while verifying otp::now faking login ');
        this.loginform.reset();
        var dummyData = {
            status: "ok",
            message: "you are successfully logged in!",
            userdetails: {
                profile_update_status: 1,
                id: 2443453
            }
        };
        this.storage.ready().then(function () {
            _this.storage.set(_this.userDetails, dummyData).then(function () {
                _this.storage.get('userdetails').then(function (value) {
                    console.log(value);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
                });
            });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goregister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.goprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
    };
    LoginPage.prototype.goforgotpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    //popover cntrl
    LoginPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n		<ion-title>login</ion-title>\n\n		<!-- <ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<object style="max-width: 156px; width: 100%; margin: 20px auto 10px auto; left: 0; right: 0; display: block;" type="image/svg+xml" data="../../assets/imgs/logo.svg">\n\n		Your browser does not support SVG\n\n	</object>\n\n	<form novalidate (ngSubmit)="login()" [formGroup]="loginform">\n\n	<ion-list style="width: 100%;">\n\n		<ion-item class="input_item">			\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 15px; position: absolute; left: 0;" src="../../assets/imgs/inputemail.svg"/>Email</ion-label>\n\n			<ion-input type="mail" [(ngModel)]="loginData.email" formControlName="email"\n\n          [class.error1]="!loginform.controls.email.valid && loginform.controls.email.dirty"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item no-lines\n\n			*ngIf="( loginform.get(\'email\').hasError(\'minlength\') || loginform.get(\'email\').hasError(\'pattern\') ||loginform.get(\'email\').hasError(\'required\') ) && loginform.get(\'email\').touched">\n\n			<div class="error" *ngIf="loginform.get(\'email\').hasError(\'required\') && loginform.get(\'email\').touched">\n\n				Please Enter your email..!\n\n			</div>\n\n			<div class="error" *ngIf="loginform.get(\'email\').hasError(\'pattern\') && loginform.get(\'email\').touched">\n\n				Please enter a valid email address..!\n\n			</div>\n\n		</ion-item>\n\n        <ion-item class="input_item" *ngIf="hideotplogin">			\n\n			<ion-label class="input_label" color="inputcolor" floating>Otp</ion-label>\n\n			<ion-input type="text" [(ngModel)]="loginData.otp" formControlName="otp"></ion-input>\n\n		</ion-item>\n\n		<ion-item no-lines\n\n			*ngIf="(loginform.get(\'otp\').hasError(\'required\') ) && loginform.get(\'otp\').touched">\n\n			<div class="error" *ngIf="loginform.get(\'otp\').hasError(\'required\') && loginform.get(\'otp\').touched">\n\n				Please Enter your otp..!\n\n			</div>\n\n		</ion-item>\n\n	</ion-list>\n\n	<!--<div style="margin: 15px 0 10px 0!important;">\n\n		<a style="font-family:quicksandsR!important;" (click)="goforgotpassword()" href="#">Forgot Password?</a>\n\n	</div>-->\n\n	<button ion-button type="button" block class="login_page_btn" (click)="sentotplogin()" *ngIf="hidecontinue" [disabled]="loginform.get(\'email\').hasError(\'required\') || loginform.get(\'email\').hasError(\'pattern\')">Continue</button>\n\n		\n\n	<button ion-button block type="submit" class="login_page_btn" *ngIf="hideregister" [disabled]="loginform.invalid">Log In</button>\n\n	</form>\n\n	\n\n	<!--<form novalidate (ngSubmit)="login()" [formGroup]="loginform">\n\n	<ion-list style="width: 100%;">\n\n		<ion-item class="input_item">			\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 15px; position: absolute; left: 0;" src="../../assets/imgs/inputemail.svg"/>Email</ion-label>\n\n			<ion-input type="mail" [(ngModel)]="loginData.email" formControlName="email"\n\n          [class.error1]="!loginform.controls.email.valid && loginform.controls.email.dirty"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item no-lines\n\n			*ngIf="( loginform.get(\'email\').hasError(\'minlength\') || loginform.get(\'email\').hasError(\'pattern\') ||loginform.get(\'email\').hasError(\'required\') ) && loginform.get(\'email\').touched">\n\n			<div class="error" *ngIf="loginform.get(\'email\').hasError(\'required\') && loginform.get(\'email\').touched">\n\n				Please Enter your email..!\n\n			</div>\n\n			<div class="error" *ngIf="loginform.get(\'email\').hasError(\'pattern\') && loginform.get(\'email\').touched">\n\n				Please enter a valid email address..!\n\n			</div>\n\n		</ion-item>\n\n\n\n		<ion-item class="input_item">			\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 15px; position: absolute; left: 0;" src="../../assets/imgs/inputlock.svg"/>Password</ion-label>\n\n			<ion-input type="password" class="input_form" [(ngModel)]="loginData.password" formControlName="password"\n\n          [class.error1]="!loginform.controls.password.valid && loginform.controls.password.dirty"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item no-lines\n\n			*ngIf="( loginform.get(\'password\').hasError(\'minlength\') || loginform.get(\'password\').hasError(\'maxlength\') ||loginform.get(\'password\').hasError(\'required\') ) && loginform.get(\'password\').touched">\n\n			<div class="error" *ngIf="loginform.get(\'password\').hasError(\'required\') && loginform.get(\'password\').touched">\n\n				Please enter your password..!\n\n			</div>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n	<div style="margin: 15px 0 10px 0!important;">\n\n		<a style="font-family:quicksandsR!important;" (click)="goforgotpassword()" href="#">Forgot Password?</a>\n\n	</div>\n\n	<button ion-button block class="login_page_btn" [disabled]="loginform.invalid">Log In</button>\n\n	</form>-->\n\n	<ion-label class="create_acnt_lnk">Don\'t have an Account? <a class="accnt_creat" href="#" (click)="goregister()">Click Here</a></ion-label>\n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer>-->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setpassword_setpassword__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, navParams, http, toastCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.forgotpasswordData = { 'email': '' };
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage.prototype.ngOnInit = function () {
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.forgotpasswordForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern(EMAILPATTERN)])
        });
    };
    ForgotpasswordPage.prototype.gosetpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__setpassword_setpassword__["a" /* SetpasswordPage */]);
    };
    ForgotpasswordPage.prototype.forgotpassword = function () {
        var _this = this;
        if (this.forgotpasswordForm.valid) {
            var data = this.forgotpasswordForm.value;
            var forgot_password_data = {
                'email': data.email
            };
            var _url = "http://52.29.115.88/api/v1/user/forgot_password";
            this.http.post(_url, forgot_password_data, { headers: this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                //console.log(result);
                if (result.status == "failed") {
                    var loading = _this.loadingCtrl.create({
                        content: 'Please wait...',
                        duration: 4000
                    });
                    loading.present();
                    loading.onDidDismiss(function () {
                        var toast = _this.toastCtrl.create({
                            message: result.message,
                            duration: 3000,
                            position: 'top',
                            cssClass: "customtoast",
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                    });
                }
                else {
                    var userdata = {
                        'email': result.user_email,
                        'user_otp': result.otp
                    };
                    _this.storage.set('user_data', userdata);
                    var loading = _this.loadingCtrl.create({
                        content: 'Please wait...',
                        duration: 4000
                    });
                    loading.present();
                    loading.onDidDismiss(function () {
                        var toast = _this.toastCtrl.create({
                            message: result.message,
                            duration: 3000,
                            position: 'top',
                            cssClass: "customtoast",
                        });
                        toast.onDidDismiss(function () {
                            console.log('Log in toast');
                            //console.log(result);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__setpassword_setpassword__["a" /* SetpasswordPage */]);
                        });
                        toast.present();
                    });
                }
            });
        }
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\forgotpassword\forgotpassword.html"*/'<!--\n\n  Generated template for the ForgotpasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n    <ion-title>Forgot Password</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h5 class="otp_content">We will send an OTP to your Email</h5>\n\n  <form novalidate (ngSubmit)="forgotpassword()" [formGroup]="forgotpasswordForm">\n\n    <ion-item class="input_item">			\n\n      <ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputemail.svg"/>Enter Your Email</ion-label>\n\n      <ion-input type="mail" [(ngModel)]="forgotpasswordData.email" formControlName="email"\n\n          [class.error1]="!forgotpasswordForm.controls.email.valid && forgotpasswordForm.controls.email.dirty"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines\n\n      *ngIf="( forgotpasswordForm.get(\'email\').hasError(\'pattern\') ||forgotpasswordForm.get(\'email\').hasError(\'required\') ) && forgotpasswordForm.get(\'email\').touched">\n\n      <div class="error" *ngIf="forgotpasswordForm.get(\'email\').hasError(\'required\') && forgotpasswordForm.get(\'email\').touched">\n\n        Please Enter your email..!\n\n      </div>\n\n      <div class="error" *ngIf="forgotpasswordForm.get(\'email\').hasError(\'pattern\') && forgotpasswordForm.get(\'email\').touched">\n\n        Please enter a valid email address..!\n\n      </div>\n\n    </ion-item>\n\n\n\n    <button ion-button secondary class="next_btn" [disabled]="forgotpasswordForm.invalid">Next</button>\n\n  </form>\n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer>-->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetpasswordPage = /** @class */ (function () {
    function SetpasswordPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.setpasswordData = { 'oldpass': '', 'newpass': '', 'cnfnewpass': '' };
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SetpasswordPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("user_data").then(function (userval) {
            //console.log('User details is', userval);
            _this.UserData = userval;
            console.log(_this.UserData);
        });
        console.log(this.UserData.email);
    };
    SetpasswordPage.prototype.ngOnInit = function () {
        //let userotp = this.UserData['user_data'].id;
        this.setpasswordForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({});
    };
    SetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setpassword',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\setpassword\setpassword.html"*/'<!--\n\n  Generated template for the SetpasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n    <ion-title>Set Password</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item class="input_item">			\n\n    <ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputlock.svg"/>Enter OTP</ion-label>\n\n    <ion-input></ion-input>\n\n  </ion-item>\n\n  <ion-item class="input_item">			\n\n      <ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputlock.svg"/>Enter New Password</ion-label>\n\n      <ion-input></ion-input>\n\n    </ion-item>\n\n    <ion-item class="input_item">			\n\n        <ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputlock.svg"/>Re-Enter New Password</ion-label>\n\n        <ion-input></ion-input>\n\n      </ion-item>\n\n  <button ion-button secondary class="save_btn" (click)="gosetpassword()">Save</button>\n\n</ion-content>\n\n<!-- <ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\setpassword\setpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SetpasswordPage);
    return SetpasswordPage;
}());

//# sourceMappingURL=setpassword.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_categories__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AddcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddcategoryPage = /** @class */ (function () {
    function AddcategoryPage(nav, navCtrl, navParams, popoverCtrl, http, storage, toastCtrl, loadingCtrl) {
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.categoryData = { 'category_name': '' };
        this.UserDetails = Array();
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    AddcategoryPage.prototype.ngOnInit = function () {
        this.categoryForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            category_name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(15)])
        });
    };
    AddcategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddcategoryPage');
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            //console.log(this.UserDetails['userdetails'].id);
        });
        console.log(this.UserDetails);
    };
    //add category
    AddcategoryPage.prototype.addCategory = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var user_id = this.UserDetails['userdetails'].id;
        if (this.categoryForm.valid) {
            var data = this.categoryForm.value;
            var add_category_data = {
                'user_id': user_id,
                'category_name': data.category_name
            };
            var _url = "http://52.29.115.88/api/v1/user/add_category";
            this.http.post(_url, add_category_data, { headers: this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                //console.log(result);
                if (result.status == "failed") {
                    //loading.present();
                    loading.dismiss();
                    loading.onDidDismiss(function () {
                        var toast = _this.toastCtrl.create({
                            message: result.message,
                            duration: 1000,
                            position: 'top',
                            cssClass: "customtoast",
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                    });
                }
                else {
                    /* let loading = this.loadingCtrl.create({
                      content: 'Please wait...',
                      duration: 1000
                    }); */
                    //loading.present();
                    loading.dismiss();
                    loading.onDidDismiss(function () {
                        var toast = _this.toastCtrl.create({
                            message: result.message,
                            duration: 1000,
                            position: 'top',
                            cssClass: "customtoast",
                        });
                        toast.onDidDismiss(function () {
                            console.log('Log in toast');
                            //console.log(result);
                            _this.categoryForm.reset();
                            //this.nav.popToRoot(); 
                            //window.location.reload();
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__categories_categories__["a" /* CategoriesPage */]).then(function () {
                                //const index = this.nav.getActive().index;
                                //this.nav.remove(0, index);
                                var startIndex = _this.navCtrl.getActive().index - 1;
                                _this.navCtrl.remove(startIndex, 1);
                                var startIndex2 = _this.navCtrl.getActive().index - 2;
                                _this.navCtrl.remove(startIndex2, 1);
                            });
                        });
                        toast.present();
                    });
                }
            });
        }
    };
    //popover cntrl
    AddcategoryPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    AddcategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcategory',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\addcategory\addcategory.html"*/'<!--\n\n  Generated template for the AddcategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n		<ion-title>Add Category</ion-title>\n\n		<!-- <ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-grid class="task_list">\n\n		<ion-row>\n\n			<div class="tsk_ctgry">\n\n				<p class="tsk_ctgry_hedng">Add Category</p>\n\n			</div>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<form novalidate (ngSubmit)="addCategory()" [formGroup]="categoryForm">\n\n		<ion-item class="input_item">			\n\n			<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputtask.svg"/>Category Name</ion-label>\n\n			<ion-input type="text" [(ngModel)]="categoryData.category_name" formControlName="category_name" [class.error1]="!categoryForm.controls.category_name.valid && categoryForm.controls.category_name.dirty"></ion-input>\n\n		</ion-item>\n\n		<ion-item no-lines\n\n			*ngIf="( categoryForm.get(\'category_name\').hasError(\'minlength\') || categoryForm.get(\'category_name\').hasError(\'maxlength\') ||categoryForm.get(\'category_name\').hasError(\'required\') ) && categoryForm.get(\'category_name\').touched">\n\n			<div class="error" *ngIf="categoryForm.get(\'category_name\').hasError(\'required\') && categoryForm.get(\'category_name\').touched">\n\n				Please enter your category name!\n\n			</div>\n\n			<div class="error" *ngIf="categoryForm.get(\'category_name\').hasError(\'minlength\') && categoryForm.get(\'category_name\').touched">\n\n				Please enter minimum 4 characters!\n\n			</div>\n\n			<div class="error" *ngIf="categoryForm.get(\'category_name\').hasError(\'maxlength\') && categoryForm.get(\'category_name\').touched">\n\n				Maximum 10 characters are allowed!\n\n			</div>\n\n		</ion-item>\n\n		<ion-buttons end>\n\n			<button ion-button secondary [disabled]="categoryForm.invalid">Save</button>\n\n		</ion-buttons>\n\n	</form>\n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer>-->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\addcategory\addcategory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddcategoryPage);
    return AddcategoryPage;
}());

//# sourceMappingURL=addcategory.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AppsettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppsettingsPage = /** @class */ (function () {
    function AppsettingsPage(storage, http, toastCtrl, popoverCtrl) {
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.UserDetails = Array();
        this.allCats = Array();
        this.urlGet = '';
    }
    AppsettingsPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('freuency') != null) {
            this.frequency = localStorage.getItem('freuency');
            console.log(localStorage.getItem('freuency'));
        }
        if (localStorage.getItem('priority') != null) {
            this.priority = localStorage.getItem('priority');
            console.log(localStorage.getItem('priority'));
        }
        if (localStorage.getItem('category') != null) {
            this.category = localStorage.getItem('category');
            console.log(localStorage.getItem('category'));
        }
        if (localStorage.getItem('color') != null) {
            this.color = localStorage.getItem('color');
            console.log(localStorage.getItem('color'));
        }
    };
    AppsettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            if (_this.UserDetails) {
                _this.get_user_categories();
            }
            //console.log(this.UserDetails['userdetails'].id);
        });
        console.log(this.UserDetails);
    };
    //popover cntrl
    AppsettingsPage.prototype.onChange = function ($event) {
        //console.log($event.target.value);
        var toast = this.toastCtrl.create({
            message: "Setting saved successfully.",
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AppsettingsPage.prototype.get_user_categories = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var _url = "http://52.29.115.88/api/v1/user/user_category";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: headers })
            .subscribe(function (data) {
            var catList = JSON.parse(data["_body"]);
            console.log(catList);
            _this.allCats.push(catList.all_category);
        });
        console.log(this.allCats);
    };
    AppsettingsPage.prototype.setFreq = function (e) {
        console.log(e);
        localStorage.setItem('freuency', this.frequency);
        console.log(localStorage.getItem('freuency'));
    };
    AppsettingsPage.prototype.setPri = function () {
        localStorage.setItem('priority', this.priority);
        console.log(localStorage.getItem('priority'));
    };
    AppsettingsPage.prototype.setCat = function () {
        localStorage.setItem('category', this.category);
        console.log(localStorage.getItem('category'));
    };
    AppsettingsPage.prototype.setColor = function () {
        localStorage.setItem('color', this.color);
        console.log(localStorage.getItem('color'));
    };
    AppsettingsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    AppsettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appsettings',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\appsettings\appsettings.html"*/'<!--\n\n  Generated template for the AppsettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n	<ion-title>App Settings</ion-title>\n\n	<!-- <ion-buttons end>\n\n		<button ion-button icon-only (click)="presentPopover($event)">\n\n			<ion-icon name="more"></ion-icon>\n\n		</button>\n\n	</ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-list style="width: 100%;">\n\n		<ion-item style="border-bottom: 1px solid #dfdfdf" class="input_item task_select_opt">\n\n			<ion-label style="font-family: quicksandsR!important; color: #636363;">Sound for reminders</ion-label>\n\n			<ion-select class="task_slct_optn" [(ngModel)]="gender" (ngModelChange)="onChange($event)" ionChange="onChange($event)" >\n\n				<ion-option value="sound1">Sound 1</ion-option>\n\n				<ion-option value="sound2">Sound 2</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n		<ion-item class="input_item task_select_opt">\n\n			<ion-label style="font-family: quicksandsR!important; color: #636363;">Frequency</ion-label>\n\n			<ion-select class="task_slct_optn" [(ngModel)]="frequency" (ngModelChange)="setFreq($event)">\n\n				<ion-option value="daily">Daily</ion-option>\n\n				<ion-option value="weekly">Weekly</ion-option>\n\n				<ion-option value="monthly">Monthly</ion-option>\n\n				<ion-option value="unassigned">Once</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n		<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Priority</ion-label>\n\n				<ion-select class="task_slct_optn" [(ngModel)]="priority" (ngModelChange)="setPri($event)">\n\n					<ion-option value="high">High</ion-option>\n\n					<ion-option value="medium">Medium</ion-option>\n\n					<ion-option value="low">Low</ion-option>\n\n				</ion-select>\n\n		</ion-item>\n\n		<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Category</ion-label>\n\n				<ion-select class="task_slct_optn" [(ngModel)]="category" (ngModelChange)="setCat($event)">\n\n				\n\n					<div *ngFor="let cat of allCats[0]">\n\n					<ion-option value="{{cat.category_name}}">{{cat.category_name}}</ion-option>\n\n					</div>\n\n				</ion-select>\n\n		</ion-item>\n\n		<ion-item class="input_item task_select_opt">\n\n			<ion-label style="font-family: quicksandsR!important; color: #636363;">Color</ion-label>\n\n			<ion-select class="task_slct_optn" [(ngModel)]="color" (ngModelChange)="setColor($event)">\n\n				<!---<ion-option class="y_color" value="yellow">Yellow</ion-option>-->\n\n				<ion-option value="green">Green</ion-option>\n\n				<ion-option value="black">Black</ion-option>\n\n				<ion-option value="blue">Blue</ion-option>\n\n				<ion-option value="red">Red</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n	</ion-list>\n\n	<!--<ion-grid class="task_list">\n\n		<ion-row>\n\n			<div class="tsk_ctgry">\n\n				<p class="tsk_ctgry_hedng">Sort tasks based on</p>\n\n			</div>\n\n		</ion-row>\n\n		<ion-row>\n\n				<ion-col class="tsk_chkbx_area" col-12>\n\n					<div>\n\n						<div float-left class="my-checkbox">\n\n							<ion-checkbox checked class="task_chkbx" name="colours">\n\n							</ion-checkbox>\n\n							<ion-label chkbx_lbl text-uppercase>Colours</ion-label>\n\n						</div>\n\n					</div>\n\n				</ion-col>\n\n			</ion-row>\n\n			<ion-row>\n\n				<ion-col class="tsk_chkbx_area" col-12>\n\n					<div>\n\n						<div float-left class="my-checkbox">\n\n							<ion-checkbox checked class="task_chkbx" name="priority">\n\n							</ion-checkbox>\n\n							<ion-label chkbx_lbl text-uppercase>Priorities</ion-label>\n\n						</div>\n\n					</div>\n\n				</ion-col>\n\n			</ion-row>\n\n			<ion-row>\n\n				<ion-col class="tsk_chkbx_area" col-12>\n\n					<div>\n\n						<div float-left class="my-checkbox">\n\n							<ion-checkbox checked class="task_chkbx" name="dute_dates">\n\n							</ion-checkbox>\n\n							<ion-label chkbx_lbl text-uppercase>Due Dates</ion-label>\n\n						</div>\n\n					</div>\n\n				</ion-col>\n\n			</ion-row>\n\n			<button ion-button block class="save_app_sttngs_btn">Save</button>\n\n	</ion-grid>-->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\appsettings\appsettings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], AppsettingsPage);
    return AppsettingsPage;
}());

//# sourceMappingURL=appsettings.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritenotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quicknotes_quicknotes__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the WritenotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WritenotesPage = /** @class */ (function () {
    function WritenotesPage(navCtrl, navParams, popoverCtrl, storage, http, nav, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.http = http;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.noteData = { "notes": "" };
        this.UserDetails = Array();
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    WritenotesPage.prototype.ngOnInit = function () {
        this.noteForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            notes: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
        });
    };
    WritenotesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            //console.log('User details is', userval);
            _this.UserDetails = userval;
            console.log(_this.UserDetails['userdetails'].id);
        });
        console.log('ionViewDidLoad WritenotesPage');
    };
    /* add notes */
    WritenotesPage.prototype.add_notes = function () {
        var _this = this;
        if (this.noteForm.valid) {
            var data = this.noteForm.value;
            var notedata = {
                'user_id': this.UserDetails['userdetails'].id,
                'note': data.notes
            };
            console.log(notedata);
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var _url = "http://52.29.115.88/api/v1/user/stickynotes";
            this.http.post(_url, notedata, { headers: this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                //console.log(result);
                if (result.status == "failed") {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 1000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
                else {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 1000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Log in toast');
                        //console.log(result);
                        _this.noteForm.reset();
                        //this.nav.popToRoot();
                        //this.navCtrl.remove(1, 1);
                        //this.navCtrl.push(QuicknotesPage);
                        //window.location.reload();
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__quicknotes_quicknotes__["a" /* QuicknotesPage */]).then(function () {
                            //const index = this.nav.getActive().index;
                            //this.nav.remove(0, index);
                            var startIndex = _this.navCtrl.getActive().index - 1;
                            _this.navCtrl.remove(startIndex, 1);
                            var startIndex2 = _this.navCtrl.getActive().index - 2;
                            _this.navCtrl.remove(startIndex2, 1);
                        });
                    });
                    toast.present();
                }
            });
        }
    };
    /* end of add notes */
    WritenotesPage.prototype.goquicknotes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__quicknotes_quicknotes__["a" /* QuicknotesPage */]);
    };
    //popover cntrl
    WritenotesPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    WritenotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-writenotes',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\writenotes\writenotes.html"*/'<!--\n\n  Generated template for the WritenotesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n    <ion-title>Write Notes</ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <div class="write_notes_sec">\n\n      <p class="write_notes_hedng">Write Notes</p>\n\n    </div>\n\n  </ion-row>  \n\n  <form novalidate (ngSubmit)="add_notes()" [formGroup]="noteForm">\n\n    <ion-item class="input_item">			\n\n      <ion-label class="input_label" color="inputcolor" floating>Write Notes Here</ion-label>\n\n      <ion-textarea [(ngModel)]="noteData.notes" formControlName="notes" [class.error1]="!noteForm.controls.notes.valid && noteForm.controls.notes.dirty"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item no-lines *ngIf="( noteForm.get(\'notes\').hasError(\'required\') ) && noteForm.get(\'notes\').touched">\n\n      <div class="error" *ngIf="noteForm.get(\'notes\').hasError(\'required\') && noteForm.get(\'notes\').touched">\n\n        Please Enter your notes..!\n\n      </div>\n\n    </ion-item>\n\n	<!--<ion-input type="text" value="{{noteData.id}}" formControlName="id"></ion-input>-->\n\n    <ion-row>\n\n      <!-- <ion-col col-6>\n\n          <button ion-button secondary class="notes_btn_sec">Cancel</button>\n\n      </ion-col> -->\n\n      <ion-col col-12>\n\n          <button ion-button secondary class="notes_btn_sec" [disabled]="noteForm.invalid">Save</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n\n<!-- <ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\writenotes\writenotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], WritenotesPage);
    return WritenotesPage;
}());

//# sourceMappingURL=writenotes.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditnotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quicknotes_quicknotes__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the WritenotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditnotesPage = /** @class */ (function () {
    function EditnotesPage(navCtrl, navParams, popoverCtrl, storage, http, nav, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.http = http;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.noteData = { "notes": "", "id": "" };
        this.allNotes = Array();
        this.UserDetails = Array();
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.noteid = navParams.get('note_id');
        //this.notes = navParams.get('notes');
        console.log(this.noteid);
    }
    EditnotesPage.prototype.ngOnInit = function () {
        this.noteForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            notes: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
        });
    };
    EditnotesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            //console.log('User details is', userval);
            _this.UserDetails = userval;
            console.log(_this.UserDetails['userdetails'].id);
            _this.get_user_notes(_this.noteid);
        });
        console.log('ionViewDidLoad WritenotesPage');
    };
    EditnotesPage.prototype.get_user_notes = function (noteid) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var _url = "http://52.29.115.88/api/v1/user/getnotesbyid";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id,
            'id': noteid
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var noteList = JSON.parse(data["_body"]);
            console.log(noteList);
            _this.allNotes.push(noteList.all_notes);
            loading.dismiss();
        });
        console.log(this.allNotes);
    };
    /* add notes */
    EditnotesPage.prototype.add_notes = function () {
        var _this = this;
        if (this.noteForm.valid) {
            var data = this.noteForm.value;
            var notedata = {
                'user_id': this.UserDetails['userdetails'].id,
                'note': data.notes,
                'id': data.id
            };
            console.log(notedata);
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var _url = "http://52.29.115.88/api/v1/user/stickynotesupdate";
            this.http.post(_url, notedata, { headers: this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                //console.log(result);
                if (result.status == "failed") {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 1000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
                else {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 1000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        console.log('Log in toast');
                        //console.log(result);
                        _this.noteForm.reset();
                        //this.nav.popToRoot();
                        //this.navCtrl.remove(1, 1);
                        //this.navCtrl.push(QuicknotesPage);
                        //window.location.reload();
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__quicknotes_quicknotes__["a" /* QuicknotesPage */]).then(function () {
                            //const index = this.nav.getActive().index;
                            //this.nav.remove(0, index);
                            var startIndex = _this.navCtrl.getActive().index - 1;
                            _this.navCtrl.remove(startIndex, 1);
                            var startIndex2 = _this.navCtrl.getActive().index - 2;
                            _this.navCtrl.remove(startIndex2, 1);
                        });
                    });
                    toast.present();
                }
            });
        }
    };
    /* end of add notes */
    EditnotesPage.prototype.goquicknotes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__quicknotes_quicknotes__["a" /* QuicknotesPage */]);
    };
    //popover cntrl
    EditnotesPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    EditnotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editnotes',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\editnotes\editnotes.html"*/'<!--\n\n  Generated template for the WritenotesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n    <ion-title>Write Notes</ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngFor="let note of allNotes[0]">\n\n  <ion-row>\n\n    <div class="write_notes_sec">\n\n      <p class="write_notes_hedng">Write Notes</p>\n\n    </div>\n\n  </ion-row>  \n\n  <form novalidate (ngSubmit)="add_notes()" [formGroup]="noteForm">\n\n    <!--<ion-item class="input_item">			\n\n      <ion-label class="input_label" color="inputcolor" floating>Write Notes Here{{notes}}</ion-label>\n\n      <ion-textarea [(ngModel)]="noteData.notes" value="{{note.notes}}"  formControlName="notes" [class.error1]="!noteForm.controls.notes.valid && noteForm.controls.notes.dirty"></ion-textarea>\n\n    </ion-item>-->\n\n	\n\n	<ion-item class="input_item">			\n\n      <ion-label class="input_label" color="inputcolor" floating>Write Notes Here</ion-label>\n\n      <ion-textarea  value="{{note.notes}}"  formControlName="notes" [class.error1]="!noteForm.controls.notes.valid && noteForm.controls.notes.dirty"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item no-lines *ngIf="( noteForm.get(\'notes\').hasError(\'required\') ) && noteForm.get(\'notes\').touched">\n\n      <div class="error" *ngIf="noteForm.get(\'notes\').hasError(\'required\') && noteForm.get(\'notes\').touched">\n\n        Please Enter your notes..!\n\n      </div>\n\n    </ion-item>\n\n	<ion-input type="hidden" formControlName="id" value="{{note.id}}" disabled ></ion-input>\n\n	<!--<ion-input type="text" value="{{noteData.id}}" formControlName="id"></ion-input>-->\n\n    <ion-row>\n\n      <!-- <ion-col col-6>\n\n          <button ion-button secondary class="notes_btn_sec">Cancel</button>\n\n      </ion-col> -->\n\n      <ion-col col-12>\n\n          <button ion-button secondary class="notes_btn_sec" [disabled]="noteForm.invalid">Save</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n\n<!-- <ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\editnotes\editnotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditnotesPage);
    return EditnotesPage;
}());

//# sourceMappingURL=editnotes.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(http) {
        this.http = http;
        // public url = "http://52.29.115.88/";
        this.url = "http://52.29.115.88/";
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newtask_newtask__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editnewtask_editnewtask__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_categories__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TasksPage = /** @class */ (function () {
    function TasksPage(global, navCtrl, navParams, popoverCtrl, storage, http, toastCtrl, loadingCtrl) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.UserDetails = Array();
        this.allCats = Array();
        this.allTasks = Array();
        this.allTasksDaily = Array();
        this.allTasksWeekly = Array();
        this.allTasksMonthly = Array();
        this.allTasksUnassign = Array();
        this.urlGet = '';
        this.dailyMore = false;
        this.weeklyMore = false;
        this.monthlyMore = false;
        this.getDailyMoreTasks = false;
        this.getWeeklyMoreTasks = false;
        this.getMonthlyMoreTasks = false;
        this.filterData = [];
        this.frequency = false;
        this.priority = false;
        this.category = false;
        this.color = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.taskdata = { 'sortBy': 'frequency' };
        this.urlGet = global.url;
    }
    TasksPage.prototype.ngOnInit = function () {
        this.newTaskform = new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormGroup */]({
            sortBy: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormControl */](''),
        });
    };
    TasksPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
        });
        console.log(this.UserDetails);
    };
    TasksPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad TasksPage');
        this.get_user_tasks();
    };
    TasksPage.prototype.get_user_categories = function () {
        var _this = this;
        // debugger;
        var _url = "http://52.29.115.88/api/v1/user/user_category";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var catList = JSON.parse(data["_body"]);
            console.log(catList);
            _this.allCats.push(catList.all_category);
        });
        console.log(this.allCats);
    };
    TasksPage.prototype.get_user_tasks = function () {
        var _this = this;
        this.allTasks = [];
        this.allTasksDaily = [];
        this.allTasksWeekly = [];
        this.allTasksMonthly = [];
        this.allTasksUnassign = [];
        console.log(this.urlGet);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // debugger;
        var _url = this.urlGet + "api/v1/user/get_user_task";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var taskList = JSON.parse(data["_body"]);
            //console.log(postdata);
            console.log(taskList.all_tasks);
            var dueDateTasks = [];
            var todayDate = new Date();
            if (taskList.all_tasks.daily) {
                _this.allTasksDaily = [];
                taskList.all_tasks.daily.filter(function (element) {
                    var databaseData = new Date(element.due_date);
                    if (todayDate.getDate() == databaseData.getDate()) {
                        _this.allTasksDaily.push(element);
                        _this.dailyMore = true;
                    }
                });
            }
            if (taskList.all_tasks.weekly) {
                _this.allTasksWeekly = [];
                taskList.all_tasks.weekly.filter(function (element) {
                    var databaseData = new Date(element.due_date);
                    if (todayDate.getDate() == databaseData.getDate()) {
                        _this.allTasksWeekly.push(element);
                        _this.weeklyMore = true;
                    }
                });
            }
            if (taskList.all_tasks.monthly) {
                _this.allTasksMonthly = [];
                taskList.all_tasks.monthly.filter(function (element) {
                    var databaseData = new Date(element.due_date);
                    if (todayDate.getDate() == databaseData.getDate()) {
                        _this.allTasksMonthly.push(element);
                        _this.monthlyMore = true;
                    }
                });
            }
            _this.allTasks.push(taskList.all_tasks);
            console.log(_this.allTasks);
            if (_this.allTasksDaily.length < 1 || _this.getDailyMoreTasks === true) {
                if (taskList.all_tasks.daily) {
                    _this.allTasksDaily = [];
                    taskList.all_tasks.daily.forEach(function (element) {
                        _this.allTasksDaily.push(element);
                        _this.dailyMore = false;
                    });
                }
            }
            if (_this.allTasksWeekly.length < 1 || _this.getWeeklyMoreTasks === true) {
                if (taskList.all_tasks.weekly) {
                    _this.allTasksWeekly = [];
                    taskList.all_tasks.weekly.forEach(function (element) {
                        _this.allTasksWeekly.push(element);
                        _this.weeklyMore = false;
                    });
                }
            }
            if (_this.allTasksMonthly.length < 1 || _this.getMonthlyMoreTasks === true) {
                if (taskList.all_tasks.monthly) {
                    _this.allTasksMonthly = [];
                    taskList.all_tasks.monthly.forEach(function (element) {
                        _this.allTasksMonthly.push(element);
                        _this.monthlyMore = false;
                    });
                }
            }
            _this.allTasksUnassign.push(taskList.all_tasks.unassigned);
            loading.dismiss();
            _this.get_user_categories();
            _this.sortByFunction();
        });
    };
    TasksPage.prototype.moreTaskDaily = function () {
        console.log('daily');
        this.getDailyMoreTasks = true;
        this.get_user_tasks();
    };
    TasksPage.prototype.moreTaskWeekly = function () {
        this.getWeeklyMoreTasks = true;
        this.get_user_tasks();
    };
    TasksPage.prototype.moreTaskMonthly = function () {
        this.getMonthlyMoreTasks = true;
        this.get_user_tasks();
    };
    TasksPage.prototype.gonewtask = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newtask_newtask__["a" /* NewtaskPage */]);
    };
    TasksPage.prototype.gocategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categories_categories__["a" /* CategoriesPage */]);
    };
    TasksPage.prototype.edittask = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editnewtask_editnewtask__["a" /* EditnewtaskPage */], { task_id: id });
    };
    TasksPage.prototype.completetask = function (id) {
        var _this = this;
        console.log(id);
        var _url = this.urlGet + "api/v1/user/update_user_task_status";
        var postdata = {
            'id': id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            if (result.status == "failed") {
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Log in toast');
                });
                toast.present();
                _this.get_user_tasks();
                // this.navCtrl.push(TasksPage);
            }
        });
    };
    TasksPage.prototype.deletetask = function (id) {
        var _this = this;
        var taskdata = {
            'user_id': this.UserDetails['userdetails'].id,
            'id': id
        };
        console.log(taskdata);
        var _url = this.urlGet + "api/v1/user/delete_user_task";
        this.http.post(_url, taskdata, { headers: this.headers })
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            console.log(result);
            if (result.status == "failed") {
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'top',
                    cssClass: "customtoast",
                });
                toast.onDidDismiss(function () {
                    console.log('Log in toast');
                });
                toast.present();
                _this.get_user_tasks();
                // this.navCtrl.push(TasksPage);
            }
        });
    };
    TasksPage.prototype.filterTask = function () {
        var _this = this;
        if (this.newTaskform.valid) {
            var data = this.newTaskform.value;
            console.log(data);
            var taskdata = {
                'user_id': this.UserDetails['userdetails'].id,
                'frequency': data.frequency,
                'priority': data.priority,
                'category': data.category,
                'color': data.color
            };
            console.log(taskdata);
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var _url = "http://52.29.115.88/api/v1/user/filter_task";
            this.http.post(_url, taskdata, { headers: this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                console.log(result);
                _this.newTaskform.reset();
                console.log(result.all_tasks.daily);
                _this.allTasks = Array();
                _this.allTasksDaily = Array();
                _this.allTasksWeekly = Array();
                _this.allTasksMonthly = Array();
                _this.allTasksUnassign = Array();
                _this.allTasks.push(result.all_tasks);
                _this.allTasksDaily.push(result.all_tasks.daily);
                _this.allTasksWeekly.push(result.all_tasks.weekly);
                _this.allTasksMonthly.push(result.all_tasks.monthly);
                _this.allTasksUnassign.push(result.all_tasks.unassigned);
                console.log(_this.allTasksWeekly);
                loading_1.dismiss();
            });
        }
    };
    //popover cntrl
    TasksPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    TasksPage.prototype.sortByFunction = function () {
        debugger;
        console.log(this.taskdata.sortBy);
        console.log(this.allTasks);
        if (this.allTasks.length > 0) {
            console.log('this.allTasks');
            if (this.taskdata.sortBy == 'frequency') {
                this.frequency = true;
                this.filterData = this.allTasks[0];
            }
            else {
                this.frequency = false;
            }
            if (this.taskdata.sortBy == 'priority') {
                this.priority = true;
                this.filterData = { "high": [], "medium": [], "low": [] };
                if (this.allTasks[0].daily)
                    for (var i = 0; i < this.allTasks[0].daily.length; i++) {
                        if (this.allTasks[0].daily[i].priority == 'high') {
                            this.filterData.high.push(this.allTasks[0].daily[i]);
                        }
                        if (this.allTasks[0].daily[i].priority == 'medium') {
                            this.filterData.medium.push(this.allTasks[0].daily[i]);
                        }
                        if (this.allTasks[0].daily[i].priority == 'low') {
                            this.filterData.low.push(this.allTasks[0].daily[i]);
                        }
                    }
                if (this.allTasks[0].weekly)
                    for (var i = 0; i < this.allTasks[0].weekly.length; i++) {
                        if (this.allTasks[0].weekly[i].priority == 'high') {
                            this.filterData.high.push(this.allTasks[0].weekly[i]);
                        }
                        if (this.allTasks[0].weekly[i].priority == 'medium') {
                            this.filterData.medium.push(this.allTasks[0].weekly[i]);
                        }
                        if (this.allTasks[0].weekly[i].priority == 'low') {
                            this.filterData.low.push(this.allTasks[0].weekly[i]);
                        }
                    }
                if (this.allTasks[0].monthly)
                    for (var i = 0; i < this.allTasks[0].monthly.length; i++) {
                        if (this.allTasks[0].monthly[i].priority == 'high') {
                            this.filterData.high.push(this.allTasks[0].monthly[i]);
                        }
                        if (this.allTasks[0].monthly[i].priority == 'medium') {
                            this.filterData.medium.push(this.allTasks[0].monthly[i]);
                        }
                        if (this.allTasks[0].monthly[i].priority == 'low') {
                            this.filterData.low.push(this.allTasks[0].monthly[i]);
                        }
                    }
                // this.allTasks[0].daily.forEach(element => {
                // 	if (element.priority == 'high') {
                // 		this.filterData.high.push(element)
                // 	}
                // 	if (element.priority == 'medium') {
                // 		this.filterData.medium.push(element)
                // 	}
                // 	if (element.priority == 'low') {
                // 		this.filterData.low.push(element)
                // 	}
                // });
                // this.allTasks[0].weekly.forEach(element => {
                // 	if (element.priority == 'high') {
                // 		this.filterData.high.push(element)
                // 	}
                // 	if (element.priority == 'medium') {
                // 		this.filterData.medium.push(element)
                // 	}
                // 	if (element.priority == 'low') {
                // 		this.filterData.low.push(element)
                // 	}
                // });
                // this.allTasks[0].monthly.forEach(element => {
                // 	if (element.priority == 'high') {
                // 		this.filterData.high.push(element)
                // 	}
                // 	if (element.priority == 'medium') {
                // 		this.filterData.medium.push(element)
                // 	}
                // 	if (element.priority == 'low') {
                // 		this.filterData.low.push(element)
                // 	}
                // });
            }
            else {
                this.priority = false;
            }
            if (this.taskdata.sortBy == 'category') {
                debugger;
                this.category = true;
                this.filterData = [];
                var catNames = [];
                // this.allCats[0].forEach(element => {
                // 	catNames.push(element.category_name);
                // 	this.filterData[element.category_name] = [];
                // });
                if (this.allCats[0])
                    for (var i = 0; i < this.allCats[0].length; i++) {
                        catNames.push(this.allCats[0][i].category_name);
                        this.filterData[this.allCats[0][i].category_name] = [];
                    }
                for (var i = 0; i < catNames.length; i++) {
                    if (this.allTasks[0].daily)
                        for (var j = 0; j < this.allTasks[0].daily.length; j++) {
                            if (this.allTasks[0].daily[j].category == catNames[i]) {
                                var temp = catNames[i];
                                this.filterData[temp].push(this.allTasks[0].daily[j]);
                            }
                        }
                    if (this.allTasks[0].weekly)
                        for (var j = 0; j < this.allTasks[0].weekly.length; j++) {
                            if (this.allTasks[0].weekly[j].category == catNames[i]) {
                                var temp = catNames[i];
                                this.filterData[temp].push(this.allTasks[0].weekly[j]);
                            }
                        }
                    if (this.allTasks[0].monthly)
                        for (var j = 0; j < this.allTasks[0].monthly.length; j++) {
                            if (this.allTasks[0].monthly[j].category == catNames[i]) {
                                var temp = catNames[i];
                                this.filterData[temp].push(this.allTasks[0].monthly[j]);
                            }
                        }
                }
                // catNames.forEach(catSingle => {
                // 	this.allTasks[0].daily.forEach(element => {
                // 		if (element.category == catSingle) {
                // 			this.filterData[catSingle].push(element);
                // 		}
                // 	});
                // 	this.allTasks[0].weekly.forEach(element => {
                // 		if (element.category == catSingle) {
                // 			this.filterData[catSingle].push(element);
                // 		}
                // 	});
                // 	this.allTasks[0].monthly.forEach(element => {
                // 		if (element.category == catSingle) {
                // 			this.filterData[catSingle].push(element);
                // 		}
                // 	});
                // });
                debugger;
                console.log(this.filterData);
                console.log(this.allCats);
            }
            else {
                this.category = false;
            }
            if (this.taskdata.sortBy == 'color') {
                this.color = true;
                this.filterData = { "green": [], "black": [], "blue": [], "red": [] };
                if (this.allTasks[0].daily)
                    for (var i = 0; i < this.allTasks[0].daily.length; i++) {
                        if (this.allTasks[0].daily[i].color == 'green') {
                            this.filterData.green.push(this.allTasks[0].daily[i]);
                        }
                        if (this.allTasks[0].daily[i].color == 'black') {
                            this.filterData.black.push(this.allTasks[0].daily[i]);
                        }
                        if (this.allTasks[0].daily[i].color == 'blue') {
                            this.filterData.blue.push(this.allTasks[0].daily[i]);
                        }
                        if (this.allTasks[0].daily[i].color == 'red') {
                            this.filterData.red.push(this.allTasks[0].daily[i]);
                        }
                    }
                if (this.allTasks[0].weekly)
                    for (var i = 0; i < this.allTasks[0].weekly.length; i++) {
                        if (this.allTasks[0].weekly[i].color == 'green') {
                            this.filterData.green.push(this.allTasks[0].weekly[i]);
                        }
                        if (this.allTasks[0].weekly[i].color == 'black') {
                            this.filterData.black.push(this.allTasks[0].weekly[i]);
                        }
                        if (this.allTasks[0].weekly[i].color == 'blue') {
                            this.filterData.blue.push(this.allTasks[0].weekly[i]);
                        }
                        if (this.allTasks[0].weekly[i].color == 'red') {
                            this.filterData.red.push(this.allTasks[0].weekly[i]);
                        }
                    }
                if (this.allTasks[0].monthly)
                    for (var i = 0; i < this.allTasks[0].monthly.length; i++) {
                        if (this.allTasks[0].monthly[i].color == 'green') {
                            this.filterData.green.push(this.allTasks[0].monthly[i]);
                        }
                        if (this.allTasks[0].monthly[i].color == 'black') {
                            this.filterData.black.push(this.allTasks[0].monthly[i]);
                        }
                        if (this.allTasks[0].monthly[i].color == 'blue') {
                            this.filterData.blue.push(this.allTasks[0].monthly[i]);
                        }
                        if (this.allTasks[0].monthly[i].color == 'red') {
                            this.filterData.red.push(this.allTasks[0].monthly[i]);
                        }
                    }
                // this.allTasks[0].daily.forEach(element => {
                // 	if (element.color == 'green') {
                // 		this.filterData.green.push(element)
                // 	}
                // 	if (element.color == 'black') {
                // 		this.filterData.black.push(element)
                // 	}
                // 	if (element.color == 'blue') {
                // 		this.filterData.blue.push(element)
                // 	}
                // 	if (element.color == 'red') {
                // 		this.filterData.red.push(element)
                // 	}
                // });
                // this.allTasks[0].weekly.forEach(element => {
                // 	if (element.color == 'green') {
                // 		this.filterData.green.push(element)
                // 	}
                // 	if (element.color == 'black') {
                // 		this.filterData.black.push(element)
                // 	}
                // 	if (element.color == 'blue') {
                // 		this.filterData.blue.push(element)
                // 	}
                // 	if (element.color == 'red') {
                // 		this.filterData.red.push(element)
                // 	}
                // });
                // this.allTasks[0].monthly.forEach(element => {
                // 	if (element.color == 'green') {
                // 		this.filterData.green.push(element)
                // 	}
                // 	if (element.color == 'black') {
                // 		this.filterData.black.push(element)
                // 	}
                // 	if (element.color == 'blue') {
                // 		this.filterData.blue.push(element)
                // 	}
                // 	if (element.color == 'red') {
                // 		this.filterData.red.push(element)
                // 	}
                // });
            }
            else {
                this.color = false;
            }
        }
        console.log(this.filterData);
    };
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tasks',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\tasks\tasks.html"*/'<ion-header>\n\n	<ion-navbar class="header_font" color="primary">\n\n		<ion-title>Tasks</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col col-6>\n\n				<button ion-button secondary class="header_btn" (click)="gocategories()">\n\n					<ion-icon style="margin-right: 5px;" ios="ios-add" md="md-add" class="plus_icon"></ion-icon>\n\n					Categories\n\n				</button>\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<button ion-button secondary class="header_btn" (click)="gonewtask()">\n\n					<ion-icon style="margin-right: 5px;" ios="ios-add" md="md-add" class="plus_icon"></ion-icon>New Task\n\n				</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n\n\n	<form novalidate [formGroup]="newTaskform">\n\n		<ion-list style="width: 100%;">\n\n			<ion-item>\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Sort By:</ion-label>\n\n				<ion-select class="task_slct_optn" [(ngModel)]="taskdata.sortBy" formControlName="sortBy">\n\n					<ion-option value="frequency" selected>Frequency</ion-option>\n\n					<ion-option value="priority">Priority</ion-option>\n\n					<ion-option value="category">Category</ion-option>\n\n					<ion-option value="color">Color</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n		</ion-list>\n\n		<button ion-button block class="save_btn" (click)="sortByFunction()">Apply</button>\n\n	</form>\n\n	<div *ngIf="frequency == true">\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">Daily</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.daily">\n\n				<div class="tab" *ngFor="let item of filterData.daily; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckd{{i}}">\n\n						<label class="tab-label" for="chckd{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content">\n\n										<ul class="sub_task_list" style="list-style: none;">\n\n											<li *ngFor="let subTask of item.sub_tasks;let subCount = index;">\n\n												<input type="checkbox" id="subtask{{subCount}}" checked="checked" />\n\n												<label for="subtask{{subCount}}">{{subTask}}</label>\n\n											</li>\n\n										</ul>\n\n									</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="dailyMore" (click)="moreTaskDaily()" style="margin: auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n		</ion-grid>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">Weekly</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.weekly">\n\n				<div class="tab" *ngFor="let item of filterData.weekly; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckw{{i}}">\n\n						<label class="tab-label" for="chckw{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="weeklyMore" (click)="moreTaskWeekly()" style="margin:auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n		</ion-grid>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">Monthly</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.monthly">\n\n\n\n				<div class="tab" *ngFor="let item of filterData.monthly; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckm{{i}}">\n\n						<label class="tab-label" for="chckm{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="monthlyMore" (click)="moreTaskMonthly()" style="margin:auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n\n\n\n\n		</ion-grid>\n\n	</div>\n\n\n\n\n\n	<div *ngIf="priority == true">\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">High</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.high">\n\n				<div class="tab" *ngFor="let item of filterData.high; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckd{{i}}">\n\n						<label class="tab-label" for="chckd{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content">\n\n										<ul class="sub_task_list" style="list-style: none;">\n\n											<li *ngFor="let subTask of item.sub_tasks;let subCount = index;">\n\n												<input type="checkbox" id="subtask{{subCount}}" checked="checked" />\n\n												<label for="subtask{{subCount}}">{{subTask}}</label>\n\n											</li>\n\n										</ul>\n\n									</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="dailyMore" (click)="moreTaskDaily()" style="margin: auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n		</ion-grid>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">Medium</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.medium">\n\n				<div class="tab" *ngFor="let item of filterData.medium; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckw{{i}}">\n\n						<label class="tab-label" for="chckw{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="weeklyMore" (click)="moreTaskWeekly()" style="margin:auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n		</ion-grid>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">Low</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.low">\n\n\n\n				<div class="tab" *ngFor="let item of filterData.low; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckm{{i}}">\n\n						<label class="tab-label" for="chckm{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="monthlyMore" (click)="moreTaskMonthly()" style="margin:auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n\n\n\n\n		</ion-grid>\n\n	</div>\n\n\n\n	<div *ngIf="color == true">\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry" style="background: red;">\n\n					<p class="tsk_ctgry_hedng">Red</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.red">\n\n				<div class="tab" *ngFor="let item of filterData.red; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckd{{i}}">\n\n						<label class="tab-label" for="chckd{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content">\n\n										<ul class="sub_task_list" style="list-style: none;">\n\n											<li *ngFor="let subTask of item.sub_tasks;let subCount = index;">\n\n												<input type="checkbox" id="subtask{{subCount}}" checked="checked" />\n\n												<label for="subtask{{subCount}}">{{subTask}}</label>\n\n											</li>\n\n										</ul>\n\n									</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="dailyMore" (click)="moreTaskDaily()" style="margin: auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n		</ion-grid>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry" style="background:green;">\n\n					<p class="tsk_ctgry_hedng">Green</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.green">\n\n				<div class="tab" *ngFor="let item of filterData.green; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckw{{i}}">\n\n						<label class="tab-label" for="chckw{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="weeklyMore" (click)="moreTaskWeekly()" style="margin:auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n		</ion-grid>\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry" style="background: blue;">\n\n					<p class="tsk_ctgry_hedng">Blue</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.blue">\n\n\n\n				<div class="tab" *ngFor="let item of filterData.blue; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckm{{i}}">\n\n						<label class="tab-label" for="chckm{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="monthlyMore" (click)="moreTaskMonthly()" style="margin:auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n\n\n\n\n		</ion-grid>\n\n\n\n		<ion-grid class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry" style="background: black;">\n\n					<p class="tsk_ctgry_hedng">Black</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData.black">\n\n\n\n				<div class="tab" *ngFor="let item of filterData.black; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckblack{{i}}">\n\n						<label class="tab-label" for="chckblack{{i}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.sub_tasks}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="monthlyMore" (click)="moreTaskMonthly()" style="margin:auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n\n\n\n\n		</ion-grid>\n\n	</div>\n\n\n\n	<div *ngIf="category == true">\n\n		<ion-grid *ngFor="let cat of allCats[0]" class="task_list">\n\n			<ion-row>\n\n				<div class="tsk_ctgry">\n\n					<p class="tsk_ctgry_hedng">{{cat.category_name}}</p>\n\n				</div>\n\n			</ion-row>\n\n			<div *ngIf="filterData[cat.category_name]">\n\n				<div class="tab" *ngFor="let item of filterData[cat.category_name]; let i = index">\n\n					<div class="tab">\n\n						<input type="checkbox" id="chckCategory{{item.id}}">\n\n						<label class="tab-label" for="chckCategory{{item.id}}">{{item.name}}</label>\n\n						<div class="tab-content">\n\n							<ion-list style="width: 100%;">\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Task Name:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.name}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Due date:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.due_date}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Duration:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.duration}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Bring with You:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.bring_with_you}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Frequency:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.frequency}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Priority:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.priority}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Category:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.category}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Color:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.color}}</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">Sub Tasks:</ion-col>\n\n									<ion-col size="6" class="content">\n\n										<ul class="sub_task_list" style="list-style: none;">\n\n											<li *ngFor="let subTask of item.sub_tasks;let subCount = index;">\n\n												<input type="checkbox" id="subtask{{subCount}}" checked="checked" />\n\n												<label for="subtask{{subCount}}">{{subTask}}</label>\n\n											</li>\n\n										</ul>\n\n									</ion-col>\n\n								</ion-row>\n\n								<ion-row>\n\n									<ion-col size="6" class="title">If not Completed:</ion-col>\n\n									<ion-col size="6" class="content"> {{item.if_not_completed}}</ion-col>\n\n								</ion-row>\n\n\n\n\n\n								<button ion-button block (click)="completetask(item.id)"\n\n									class="save_btn save_btn_complete">Complete</button>\n\n								<button ion-button block (click)="edittask(item.id)"\n\n									class="save_btn save_btn_edit">Edit</button>\n\n								<button ion-button block (click)="deletetask(item.id)"\n\n									class="save_btn save_btn_delete">Delete</button>\n\n							</ion-list>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<button *ngIf="dailyMore" (click)="moreTaskDaily()" style="margin: auto;display:block;" ion-button\n\n					class="save_btn save_btn_edit">More Tasks</button>\n\n			</div>\n\n		</ion-grid>\n\n	</div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\tasks\tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(517);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_admob_free__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_loginhome_loginhome__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tasks_tasks__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_todaystasks_todaystasks__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_newtask_newtask__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_editnewtask_editnewtask__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_addcategory_addcategory__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_appsettings_appsettings__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_calendar_calendar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_addevent_addevent__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_dashboard_dashboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_quicknotes_quicknotes__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_writenotes_writenotes__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_editnotes_editnotes__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng_circle_progress__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_privacypolicies_privacypolicies__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_termandconditions_termandconditions__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_forgotpassword_forgotpassword__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_setpassword_setpassword__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_rateus_rateus__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_changepassword_changepassword__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_categories_categories__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_weeklycalender_weeklycalender__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_monthlycalender_monthlycalender__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_global_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_term_term__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_privacypolicy_privacypolicy__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_termsandcondition_termsandcondition__ = __webpack_require__(847);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































//import { FcmProvider } from '../providers/fcm/fcm';
//import { Push } from '@ionic-native/push';
//import { PdfViewerModule } from 'ng2-pdf-viewer';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_loginhome_loginhome__["a" /* LoginhomePage */],
                __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_todaystasks_todaystasks__["a" /* TodaystasksPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newtask_newtask__["a" /* NewtaskPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_editnewtask_editnewtask__["a" /* EditnewtaskPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_addcategory_addcategory__["a" /* AddcategoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_appsettings_appsettings__["a" /* AppsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_addevent_addevent__["a" /* AddeventPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_quicknotes_quicknotes__["a" /* QuicknotesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_writenotes_writenotes__["a" /* WritenotesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editnotes_editnotes__["a" /* EditnotesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_privacypolicies_privacypolicies__["a" /* PrivacypoliciesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_termandconditions_termandconditions__["a" /* TermandconditionsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_termsandcondition_termsandcondition__["a" /* TermsandconditionPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_term_term__["a" /* TermPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_setpassword_setpassword__["a" /* SetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_rateus_rateus__["a" /* RateusPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_weeklycalender_weeklycalender__["a" /* WeeklycalenderPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_monthlycalender_monthlycalender__["a" /* MonthlycalenderPage */]
            ],
            imports: [
                //  PdfViewerModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                // Specify ng-circle-progress as an import
                __WEBPACK_IMPORTED_MODULE_30_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300,
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_loginhome_loginhome__["a" /* LoginhomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_todaystasks_todaystasks__["a" /* TodaystasksPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newtask_newtask__["a" /* NewtaskPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_editnewtask_editnewtask__["a" /* EditnewtaskPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_addcategory_addcategory__["a" /* AddcategoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_appsettings_appsettings__["a" /* AppsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_addevent_addevent__["a" /* AddeventPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_quicknotes_quicknotes__["a" /* QuicknotesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_writenotes_writenotes__["a" /* WritenotesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editnotes_editnotes__["a" /* EditnotesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_privacypolicies_privacypolicies__["a" /* PrivacypoliciesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_termandconditions_termandconditions__["a" /* TermandconditionsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_termsandcondition_termsandcondition__["a" /* TermsandconditionPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_term_term__["a" /* TermPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_setpassword_setpassword__["a" /* SetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_rateus_rateus__["a" /* RateusPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_weeklycalender_weeklycalender__["a" /* WeeklycalenderPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_monthlycalender_monthlycalender__["a" /* MonthlycalenderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_admob_free__["a" /* AdMobFree */],
                //Push,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_42__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tasks_tasks__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_todaystasks_todaystasks__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_newtask_newtask__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_addevent_addevent__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_loginhome_loginhome__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_weeklycalender_weeklycalender__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_monthlycalender_monthlycalender__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = /** @class */ (function () {
    function MyApp(network, platform, statusBar, splashScreen, storage, 
        // private fcm: FCM,
        alertCtrl) {
        this.network = network;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.UserDetails = Array();
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'To-Do List', component: __WEBPACK_IMPORTED_MODULE_6__pages_tasks_tasks__["a" /* TasksPage */], icon: 'list' },
            { title: "Today's Tasks", component: __WEBPACK_IMPORTED_MODULE_7__pages_todaystasks_todaystasks__["a" /* TodaystasksPage */], icon: 'list' },
            { title: 'Add Task', component: __WEBPACK_IMPORTED_MODULE_8__pages_newtask_newtask__["a" /* NewtaskPage */], icon: 'clipboard' },
            { title: 'Calendar', component: __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__["a" /* CalendarPage */], icon: 'calendar' },
            { title: 'Add Event', component: __WEBPACK_IMPORTED_MODULE_10__pages_addevent_addevent__["a" /* AddeventPage */], icon: 'clock' },
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: 'color-palette' },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */], icon: 'person' },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */], icon: 'settings' },
            { title: 'Weekly Calender', component: __WEBPACK_IMPORTED_MODULE_15__pages_weeklycalender_weeklycalender__["a" /* WeeklycalenderPage */], icon: 'calendar' },
            { title: 'Monthly Calender', component: __WEBPACK_IMPORTED_MODULE_16__pages_monthlycalender_monthlycalender__["a" /* MonthlycalenderPage */], icon: 'calendar' }
        ];
        this.network.onDisconnect().subscribe(function () {
            alert('Network was disconnected');
            console.log('Network was disconnected');
        });
    }
    MyApp.prototype.initializeFirebase = function () {
        // console.log("cordova platforms",this.platform.is("cordova"))
        if (this.platform.is("cordova")) {
            // alert('platform cordova chala') 
            FirebasePlugin.subscribe("all");
            // alert('Fireabse Plugin chala');
            this.platform.is('android') ? this.initializeFirebaseAndroid() : this.initializeFirebaseIOS();
        }
    };
    MyApp.prototype.initializeFirebaseAndroid = function () {
        FirebasePlugin.getToken((function (token) {
            // MyApp.fireAuthToken = token;
            console.log('fcm token from firebase', token);
            // this.storage.set('fcm_token', token)
        }));
        FirebasePlugin.onTokenRefresh((function (token) {
            // MyApp.fireAuthToken = token;
            console.log('fcm token from firebase', token);
            // this.storage.set('fcm_token', token)
        }));
        this.subscribeToPushNotifications();
    };
    MyApp.prototype.initializeFirebaseIOS = function () {
        // alert('init firebase ios');
        // alert('init firebase permision');
        var _this = this;
        FirebasePlugin.hasPermission(function (hasPermission) {
            // alert('asking for permission');
            // alert('Permison'+JSON.stringify(hasPermission))
            if (hasPermission) {
                // alert('hass permerion chala');
                FirebasePlugin.getToken((function (token) {
                    // alert('token milla'); 
                    console.log('fcm token from firebase', token);
                }));
                FirebasePlugin.onTokenRefresh((function (token) {
                }));
                _this.subscribeToPushNotifications();
            }
            else {
                FirebasePlugin.grantPermission()
                    .then(function () {
                    // alert('permission granted chala');
                    _this.initializeFirebaseIOS();
                }, function (e) {
                    // alert('permision error nhn mili');
                })
                    .catch(function (error) {
                    // alert('firbase init error'+JSON.stringify(error));
                    FirebasePlugin.logError(error);
                });
            }
            //  console.log("Permission is " + (hasPermission ? "granted" : "denied")); 
        });
    };
    MyApp.prototype.subscribeToPushNotifications = function () {
        // alert('push notifications subscribe');
        FirebasePlugin.onMessageReceived(function (response) {
            console.log('root', response);
            if (response.tap) {
                // alert('works');
                // alert(JSON.stringify(response));
            }
            else {
                console.log(response.body, 'bottom');
            }
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.storage.get("userdetails").then(function (val) {
                console.log('User details is', val);
                _this.UserDetails = val;
                _this.splashScreen.hide();
                // this.initializeFirebase();
            });
            // if ( (this.platform.is('ios') || this.platform.is('android')) && this.platform.is('cordova'))
            // {
            // 	this.fcm.subscribeToTopic('all');
            // 	this.fcm.getToken().then(token=>{
            // 		console.log(token);
            // 	})
            // 	this.fcm.onNotification().subscribe(data=>{
            // 	  if(data.wasTapped){
            // 		console.log("Received in background");
            // 	  } else {
            // 		console.log("Received in foreground");
            // 	  };
            // 	})
            // 	this.fcm.onTokenRefresh().subscribe(token=>{
            // 	  console.log(token);
            // 	});
            // }
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        this.storage.get("userdetails").then(function (val) {
            //console.log('User details is', val);
            _this.UserDetails = val;
            console.log(_this.UserDetails);
            if (page.component.name == "HomePage") {
                _this.nav.setRoot(page.component);
            }
            else {
                // Reset the content nav to have just this page
                // we wouldn't want the back button to show in this scenario
                if (_this.UserDetails == null) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Please Login!',
                        subTitle: 'You need to login to your account to view your To-Dos.',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_loginhome_loginhome__["a" /* LoginhomePage */]);
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                else {
                    _this.nav.push(page.component);
                }
            }
        });
        console.log(this.UserDetails);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="primary" align-title="center">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="side-menu-font">\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name="{{p.icon}}" color="buttoncolor"></ion-icon>&nbsp;&nbsp;{{p.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_17__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 285,
	"./af.js": 285,
	"./ar": 286,
	"./ar-dz": 287,
	"./ar-dz.js": 287,
	"./ar-kw": 288,
	"./ar-kw.js": 288,
	"./ar-ly": 289,
	"./ar-ly.js": 289,
	"./ar-ma": 290,
	"./ar-ma.js": 290,
	"./ar-sa": 291,
	"./ar-sa.js": 291,
	"./ar-tn": 292,
	"./ar-tn.js": 292,
	"./ar.js": 286,
	"./az": 293,
	"./az.js": 293,
	"./be": 294,
	"./be.js": 294,
	"./bg": 295,
	"./bg.js": 295,
	"./bm": 296,
	"./bm.js": 296,
	"./bn": 297,
	"./bn.js": 297,
	"./bo": 298,
	"./bo.js": 298,
	"./br": 299,
	"./br.js": 299,
	"./bs": 300,
	"./bs.js": 300,
	"./ca": 301,
	"./ca.js": 301,
	"./cs": 302,
	"./cs.js": 302,
	"./cv": 303,
	"./cv.js": 303,
	"./cy": 304,
	"./cy.js": 304,
	"./da": 305,
	"./da.js": 305,
	"./de": 306,
	"./de-at": 307,
	"./de-at.js": 307,
	"./de-ch": 308,
	"./de-ch.js": 308,
	"./de.js": 306,
	"./dv": 309,
	"./dv.js": 309,
	"./el": 310,
	"./el.js": 310,
	"./en-au": 311,
	"./en-au.js": 311,
	"./en-ca": 312,
	"./en-ca.js": 312,
	"./en-gb": 313,
	"./en-gb.js": 313,
	"./en-ie": 314,
	"./en-ie.js": 314,
	"./en-il": 315,
	"./en-il.js": 315,
	"./en-in": 316,
	"./en-in.js": 316,
	"./en-nz": 317,
	"./en-nz.js": 317,
	"./en-sg": 318,
	"./en-sg.js": 318,
	"./eo": 319,
	"./eo.js": 319,
	"./es": 320,
	"./es-do": 321,
	"./es-do.js": 321,
	"./es-us": 322,
	"./es-us.js": 322,
	"./es.js": 320,
	"./et": 323,
	"./et.js": 323,
	"./eu": 324,
	"./eu.js": 324,
	"./fa": 325,
	"./fa.js": 325,
	"./fi": 326,
	"./fi.js": 326,
	"./fil": 327,
	"./fil.js": 327,
	"./fo": 328,
	"./fo.js": 328,
	"./fr": 329,
	"./fr-ca": 330,
	"./fr-ca.js": 330,
	"./fr-ch": 331,
	"./fr-ch.js": 331,
	"./fr.js": 329,
	"./fy": 332,
	"./fy.js": 332,
	"./ga": 333,
	"./ga.js": 333,
	"./gd": 334,
	"./gd.js": 334,
	"./gl": 335,
	"./gl.js": 335,
	"./gom-deva": 336,
	"./gom-deva.js": 336,
	"./gom-latn": 337,
	"./gom-latn.js": 337,
	"./gu": 338,
	"./gu.js": 338,
	"./he": 339,
	"./he.js": 339,
	"./hi": 340,
	"./hi.js": 340,
	"./hr": 341,
	"./hr.js": 341,
	"./hu": 342,
	"./hu.js": 342,
	"./hy-am": 343,
	"./hy-am.js": 343,
	"./id": 344,
	"./id.js": 344,
	"./is": 345,
	"./is.js": 345,
	"./it": 346,
	"./it-ch": 347,
	"./it-ch.js": 347,
	"./it.js": 346,
	"./ja": 348,
	"./ja.js": 348,
	"./jv": 349,
	"./jv.js": 349,
	"./ka": 350,
	"./ka.js": 350,
	"./kk": 351,
	"./kk.js": 351,
	"./km": 352,
	"./km.js": 352,
	"./kn": 353,
	"./kn.js": 353,
	"./ko": 354,
	"./ko.js": 354,
	"./ku": 355,
	"./ku.js": 355,
	"./ky": 356,
	"./ky.js": 356,
	"./lb": 357,
	"./lb.js": 357,
	"./lo": 358,
	"./lo.js": 358,
	"./lt": 359,
	"./lt.js": 359,
	"./lv": 360,
	"./lv.js": 360,
	"./me": 361,
	"./me.js": 361,
	"./mi": 362,
	"./mi.js": 362,
	"./mk": 363,
	"./mk.js": 363,
	"./ml": 364,
	"./ml.js": 364,
	"./mn": 365,
	"./mn.js": 365,
	"./mr": 366,
	"./mr.js": 366,
	"./ms": 367,
	"./ms-my": 368,
	"./ms-my.js": 368,
	"./ms.js": 367,
	"./mt": 369,
	"./mt.js": 369,
	"./my": 370,
	"./my.js": 370,
	"./nb": 371,
	"./nb.js": 371,
	"./ne": 372,
	"./ne.js": 372,
	"./nl": 373,
	"./nl-be": 374,
	"./nl-be.js": 374,
	"./nl.js": 373,
	"./nn": 375,
	"./nn.js": 375,
	"./oc-lnc": 376,
	"./oc-lnc.js": 376,
	"./pa-in": 377,
	"./pa-in.js": 377,
	"./pl": 378,
	"./pl.js": 378,
	"./pt": 379,
	"./pt-br": 380,
	"./pt-br.js": 380,
	"./pt.js": 379,
	"./ro": 381,
	"./ro.js": 381,
	"./ru": 382,
	"./ru.js": 382,
	"./sd": 383,
	"./sd.js": 383,
	"./se": 384,
	"./se.js": 384,
	"./si": 385,
	"./si.js": 385,
	"./sk": 386,
	"./sk.js": 386,
	"./sl": 387,
	"./sl.js": 387,
	"./sq": 388,
	"./sq.js": 388,
	"./sr": 389,
	"./sr-cyrl": 390,
	"./sr-cyrl.js": 390,
	"./sr.js": 389,
	"./ss": 391,
	"./ss.js": 391,
	"./sv": 392,
	"./sv.js": 392,
	"./sw": 393,
	"./sw.js": 393,
	"./ta": 394,
	"./ta.js": 394,
	"./te": 395,
	"./te.js": 395,
	"./tet": 396,
	"./tet.js": 396,
	"./tg": 397,
	"./tg.js": 397,
	"./th": 398,
	"./th.js": 398,
	"./tl-ph": 399,
	"./tl-ph.js": 399,
	"./tlh": 400,
	"./tlh.js": 400,
	"./tr": 401,
	"./tr.js": 401,
	"./tzl": 402,
	"./tzl.js": 402,
	"./tzm": 403,
	"./tzm-latn": 404,
	"./tzm-latn.js": 404,
	"./tzm.js": 403,
	"./ug-cn": 405,
	"./ug-cn.js": 405,
	"./uk": 406,
	"./uk.js": 406,
	"./ur": 407,
	"./ur.js": 407,
	"./uz": 408,
	"./uz-latn": 409,
	"./uz-latn.js": 409,
	"./uz.js": 408,
	"./vi": 410,
	"./vi.js": 410,
	"./x-pseudo": 411,
	"./x-pseudo.js": 411,
	"./yo": 412,
	"./yo.js": 412,
	"./zh-cn": 413,
	"./zh-cn.js": 413,
	"./zh-hk": 414,
	"./zh-hk.js": 414,
	"./zh-mo": 415,
	"./zh-mo.js": 415,
	"./zh-tw": 416,
	"./zh-tw.js": 416
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 562;

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(toastCtrl, loadingCtrl, navCtrl, navParams, popoverCtrl, storage, http) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.http = http;
        this.C_date = new Date().toISOString();
        this.UserDetails = Array();
        this.userdetails = Array();
        this.userDetails = "userdetails";
        this.userData = { "name": "", "email": "", "country": "", "dob": "" };
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ProfilePage.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('mobiletoken'));
        this.mobileToken = localStorage.getItem('mobiletoken');
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signupformupdate = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(EMAILPATTERN)]),
            country: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)]),
            dob: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            //console.log(this.UserDetails);
            //console.log(this.UserDetails['userdetails'].id);
            _this.user_details();
        });
        //console.log(this.UserDetails[0]);
        /* this.storage.ready().then(() => {
                          this.storage.get('userdetails').then((value) => {
                                 console.log(this.userdetails);
                                      
                                    });
                        }); */
    };
    ProfilePage.prototype.signupupdate = function () {
        var _this = this;
        if (this.signupformupdate.valid) {
            var data = this.signupformupdate.value;
            //console.log(data);
            var regdata = {
                "name": data.name,
                "email": data.email,
                "country": data.country,
                "dob": data.dob
            };
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            //let _url: string = "http://52.29.115.88/api/v1/user/register";
            var _url = "http://52.29.115.88/api/v1/user/profileupdate";
            this.http.post(_url, regdata, { headers: this.headers })
                .subscribe(function (data) {
                var result = JSON.parse(data["_body"]);
                //console.log(result); 
                loading_1.dismiss();
                loading_1.onDidDismiss(function () {
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 1000,
                        position: 'top',
                        cssClass: "customtoast",
                    });
                    toast.onDidDismiss(function () {
                        //console.log('Dismissed toast');
                        if (result.message == "Updated successfully.") {
                            //console.log(result);
                            _this.storage.ready().then(function () {
                                _this.storage.set(_this.userDetails, result).then(function () {
                                    _this.storage.get('userdetails').then(function (value) {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                                    });
                                });
                            });
                        }
                    });
                    toast.present();
                });
            });
        }
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        // this.user_details();
    };
    ProfilePage.prototype.user_details = function () {
        this.userdetails = this.UserDetails['userdetails'];
        console.log('after details', this.userdetails);
    };
    ProfilePage.prototype.changepassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    //popover cntrl
    ProfilePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n		<ion-title>Profile</ion-title>\n\n		<!-- <ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<!-- <object style="width: 78 px; height: 78px; border-radius: 50%; margin: 20px auto 10px auto; left: 0; right: 0; display: block;" type="image/svg+xml" data="../../assets/imgs/kousik.jpg">\n\n			Your browser does not support SVG\n\n		</object> -->\n\n	<img\n\n		style="width: 90px; height: 90px; border-radius: 50%; margin: 20px auto 10px auto; left: 0; right: 0; display: block;"\n\n		src="../../assets/imgs/user.svg" />\n\n	<!--<ion-list style="width: 100%;">\n\n		<ion-item class="input_item">\n\n			<ion-label class="input_label" color="inputcolor" floating><img\n\n					style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputuser.svg" />Name</ion-label>\n\n			<ion-input class="input_form" value="{{userdetails.name}}" disabled></ion-input>\n\n		</ion-item>\n\n		<ion-item class="input_item">\n\n			<ion-label class="input_label" color="inputcolor" floating><img\n\n					style="max-width: 16px; position: absolute; left: 0;" src="../../assets/imgs/inputemail.svg" />Email Address\n\n			</ion-label>\n\n			<ion-input class="input_form" value="{{userdetails.email}}" disabled></ion-input>\n\n		</ion-item>\n\n		<ion-item class="input_item">\n\n			<ion-label class="input_label" color="inputcolor" floating><img\n\n					style="max-width: 16px; position: absolute; left: 0;" src="../../assets/imgs/inputcntry.svg" />Country\n\n			</ion-label>\n\n			<ion-input class="input_form" value="{{userdetails.country}}" disabled></ion-input>\n\n		</ion-item>\n\n		<ion-item class="input_item">\n\n			<ion-label class="input_label" color="inputcolor" floating><img\n\n					style="max-width: 15px; position: absolute; left: 0;" src="../../assets/imgs/inputclndr.svg" />Date of Birth\n\n			</ion-label>\n\n			<ion-input class="input_form" value="{{userdetails.dob}}" disabled></ion-input>\n\n		</ion-item>\n\n	</ion-list>-->\n\n	<form novalidate (ngSubmit)="signupupdate()" [formGroup]="signupformupdate">\n\n		<ion-list style="width: 100%;">\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputuser.svg"/>Name</ion-label>\n\n				<ion-input type="text" formControlName="name" value="{{userdetails.name}}" disabled ></ion-input>\n\n			</ion-item>\n\n			\n\n\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 15px; position: absolute; left: 0; top: 3px;" src="../../assets/imgs/inputemail.svg"/>Email Address</ion-label>\n\n				<ion-input type="mail" class="input_form"  formControlName="email" value="{{userdetails.email}}" disabled></ion-input>\n\n			</ion-item>\n\n\n\n			\n\n\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 16px; position: absolute; left: 0;" src="../../assets/imgs/inputcntry.svg"/>Country</ion-label>\n\n				<ion-input class="input_form"  formControlName="country" value="{{userdetails.country}}"\n\n          [class.error1]="!signupformupdate.controls.country.valid && signupformupdate.controls.country.dirty"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item no-lines\n\n				*ngIf="( signupformupdate.get(\'country\').hasError(\'minlength\') || signupformupdate.get(\'country\').hasError(\'maxlength\') ||signupformupdate.get(\'country\').hasError(\'pattern\') ||signupformupdate.get(\'country\').hasError(\'required\') ) && signupformupdate.get(\'country\').touched">\n\n				<div class="error" *ngIf="signupformupdate.get(\'country\').hasError(\'required\') && signupformupdate.get(\'country\').touched">\n\n					Please Enter your country!\n\n				</div>\n\n				<div class="error" *ngIf="signupformupdate.get(\'country\').hasError(\'minlength\') && signupformupdate.get(\'country\').touched">\n\n					Must be minimum 4 characters!\n\n				</div>\n\n				<div class="error" *ngIf="signupformupdate.get(\'country\').hasError(\'maxlength\') && signupformupdate.get(\'country\').touched">\n\n					Maximum 10 characters allowed!\n\n				</div>\n\n				<div class="error" *ngIf="signupformupdate.get(\'country\').hasError(\'pattern\') && signupformupdate.get(\'country\').touched">\n\n					Just use alphabet character!\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 14px; position: absolute; left: 0; top: 4px;" src="../../assets/imgs/inputclndr.svg"/>Date of Birth</ion-label>\n\n				<ion-datetime class="input_form" displayFormat="D MMM YYYY" [(ngModel)]="userdetails.dob" formControlName="dob" >\n\n				</ion-datetime>\n\n			</ion-item>\n\n\n\n			<ion-item class="input_item">			\n\n				<ion-label class="input_label" color="inputcolor" floating><img style="max-width: 18px; position: absolute; left: 0;" src="../../assets/imgs/inputuser.svg"/>Mobile Token</ion-label>\n\n				<ion-input type="text" value="{{mobileToken}}" ></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item no-lines *ngIf="(signupformupdate.get(\'dob\').hasError(\'required\') && signupformupdate.get(\'dob\').touched)">\n\n				<div class="error" *ngIf="signupformupdate.get(\'dob\').hasError(\'required\') && signupformupdate.get(\'dob\').touched">\n\n					please Enter your date of birth!.\n\n				</div>\n\n			</ion-item>\n\n\n\n			\n\n			\n\n			\n\n			\n\n			\n\n\n\n		</ion-list>\n\n		<button ion-button block class="login_page_btn" [disabled]="signupformupdate.invalid">Save</button>\n\n	</form>\n\n	<!-- <button ion-button secondary class="pass_change_btn">Change Password</button> -->\n\n	<!--<button ion-button secondary class="prfle_sve_btn" (click)="changepassword()">Change Password</button>-->\n\n</ion-content>\n\n<!-- <ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewtaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewtaskPage = /** @class */ (function () {
    function NewtaskPage(loadingCtrl, nav, navCtrl, http, navParams, popoverCtrl, storage, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.UserDetails = Array();
        this.allCats = Array();
        this.subtaskArray = [];
        this.subtasksCount = 1;
        this.due_date = new Date().toISOString();
        this.taskdata = { 'task_name': '', 'duration': '', 'bring_with_you': '', 'frequency': '', 'not_completed': '', 'priority': '', 'category': '', 'color': '', 'due_date': '', 'type': '' };
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    NewtaskPage.prototype.ngOnInit = function () {
        this.taskdata.due_date = __WEBPACK_IMPORTED_MODULE_7_moment__(this.due_date).local().format("YYYY-MM-DD[T]HH:mm:ss.000") + 'Z';
        this.newTaskform = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            task_name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(50)]),
            duration: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            //bring_with_you: new FormControl('', [Validators.required]),
            bring_with_you: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            frequency: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            not_completed: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            priority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            category: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            color: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            //due_date: new FormControl('', [Validators.required]),
            due_date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            sub_task1: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
        });
        // this.taskdata.duration = "00:00";
    };
    NewtaskPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            //console.log(this.UserDetails['userdetails'].id);
        });
        console.log(this.UserDetails);
    };
    NewtaskPage.prototype.ionViewDidEnter = function () {
        this.get_user_categories();
    };
    //get user category
    NewtaskPage.prototype.get_user_categories = function () {
        var _this = this;
        var _url = "http://52.29.115.88/api/v1/user/user_category";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var catList = JSON.parse(data["_body"]);
            console.log(catList);
            _this.allCats.push(catList.all_category);
        });
        console.log(this.allCats);
    };
    NewtaskPage.prototype.gotasks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* TasksPage */]);
    };
    //popover cntrl
    NewtaskPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    //add sub task
    NewtaskPage.prototype.AddsubTask = function () {
        this.subtasksCount++;
        this.newTaskform.addControl('sub_task' + this.subtasksCount, new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]());
        this.subtaskArray.push({ 'sub_task': this.subtasksCount, 'value': '' });
        console.log(this.subtaskArray);
        this.data = true;
    };
    NewtaskPage.prototype.remaovesubTask = function (id) {
        this.subtaskArray = this.subtaskArray.filter(function (element) { return element.sub_task != id; });
        this.newTaskform.removeControl('sub_task' + id);
        console.log(this.subtaskArray);
    };
    NewtaskPage.prototype.addTask = function () {
        var _this = this;
        if (this.newTaskform.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var data = this.newTaskform.value;
            console.log(data);
            if (this.subtaskArray != null) {
                var taskdata = {
                    'user_id': this.UserDetails['userdetails'].id,
                    'task_name': data.task_name,
                    'duration': data.duration,
                    'bring_with_you': data.bring_with_you,
                    'frequency': data.frequency,
                    'if_not_completed': data.not_completed,
                    'priority': data.priority,
                    'category': data.category,
                    'color': data.color,
                    'due_date': data.due_date,
                    'sub_tasks': this.subtaskArray,
                    'type': 'task'
                };
                console.log(taskdata);
                var _url = "http://52.29.115.88/api/v1/user/create_task";
                this.http.post(_url, taskdata, { headers: this.headers })
                    .subscribe(function (data) {
                    loading_1.dismiss();
                    var result = JSON.parse(data["_body"]);
                    console.log(result);
                    console.log('Dismissed toast');
                    _this.newTaskform.reset();
                    //this.navCtrl.push(TasksPage);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* TasksPage */]).then(function () {
                        var startIndex = _this.navCtrl.getActive().index - 1;
                        _this.navCtrl.remove(startIndex, 1);
                        // changes zain
                        // const startIndex2 = this.navCtrl.getActive().index - 2;
                        // this.navCtrl.remove(startIndex2, 1);
                    });
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.onDidDismiss(function () {
                    });
                    toast.present();
                });
            }
            else {
                var taskdata = {
                    'user_id': this.UserDetails['userdetails'].id,
                    'task_name': data.task_name,
                    'duration': data.duration,
                    'bring_with_you': data.bring_with_you,
                    'frequency': data.frequency,
                    'if_not_completed': data.not_completed,
                    'priority': data.priority,
                    'category': data.category,
                    'color': data.color,
                    'due_date': data.due_date,
                    'type': 'task'
                };
                var _url = "http://52.29.115.88/api/v1/user/create_task";
                this.http.post(_url, taskdata, { headers: this.headers })
                    .subscribe(function (data) {
                    var result = JSON.parse(data["_body"]);
                    console.log(result);
                    var toast = _this.toastCtrl.create({
                        message: result.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                        _this.newTaskform.reset();
                        //this.navCtrl.push(TasksPage);
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* TasksPage */]).then(function () {
                            var startIndex = _this.navCtrl.getActive().index - 1;
                            _this.navCtrl.remove(startIndex, 1);
                            // Changes Zain
                            // const startIndex2 = this.navCtrl.getActive().index - 2;
                            // this.navCtrl.remove(startIndex2, 1);
                        });
                    });
                    toast.present();
                });
            }
        }
    };
    NewtaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newtask',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\newtask\newtask.html"*/'<ion-header>\n\n	<ion-navbar class="header_font" color="primary">\n\n		<ion-title>New Task</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<form novalidate (ngSubmit)="addTask()" [formGroup]="newTaskform">\n\n		<ion-list style="width: 100%;">\n\n			<ion-item class="input_item">\n\n				<ion-label class="input_label" color="inputcolor" floating><img\n\n						style="max-width: 19px; position: absolute; left: 0;"\n\n						src="../../assets/imgs/inputtask.svg" />Task Name</ion-label>\n\n				<ion-input type="text" [(ngModel)]="taskdata.task_name" formControlName="task_name"\n\n					[class.error1]="!newTaskform.controls.task_name.valid && newTaskform.controls.task_name.dirty">\n\n				</ion-input>\n\n			</ion-item>\n\n			<ion-item no-lines\n\n				*ngIf="( newTaskform.get(\'task_name\').hasError(\'minlength\') || newTaskform.get(\'task_name\').hasError(\'maxlength\')  ||newTaskform.get(\'task_name\').hasError(\'required\') ) && newTaskform.get(\'task_name\').touched">\n\n				<div class="error"\n\n					*ngIf="newTaskform.get(\'task_name\').hasError(\'required\') && newTaskform.get(\'task_name\').touched">\n\n					Please enter your task name!\n\n				</div>\n\n				<div class="error"\n\n					*ngIf="newTaskform.get(\'task_name\').hasError(\'minlength\') && newTaskform.get(\'task_name\').touched">\n\n					Minimum 3 characters\n\n				</div>\n\n				<div class="error"\n\n					*ngIf="newTaskform.get(\'task_name\').hasError(\'maxlength\') && newTaskform.get(\'task_name\').touched">\n\n					Maximum 50 characters\n\n				</div>\n\n			</ion-item>\n\n			<ion-item class="input_item">\n\n				<ion-label class="input_label" color="inputcolor" floating><img\n\n						style="max-width: 18px; position: absolute; left: 0;"\n\n						src="../../assets/imgs/inputclock.svg" />Duration</ion-label>\n\n				<ion-datetime class="input_form" displayFormat="H:mm" [(ngModel)]="taskdata.duration"\n\n					formControlName="duration"\n\n					[class.error1]="!newTaskform.controls.duration.valid && newTaskform.controls.duration.dirty">\n\n				</ion-datetime>\n\n\n\n			</ion-item>\n\n			<ion-item no-lines\n\n				*ngIf="( newTaskform.get(\'task_name\').hasError(\'required\') ) && newTaskform.get(\'task_name\').touched">\n\n				<div class="error"\n\n					*ngIf="newTaskform.get(\'duration\').hasError(\'required\') && newTaskform.get(\'duration\').touched">\n\n					Please enter your task duration!\n\n				</div>\n\n			</ion-item>\n\n			<ion-item class="input_item">\n\n				<ion-label class="input_label" color="inputcolor" floating><img\n\n						style="max-width: 20px; position: absolute; left: 0;"\n\n						src="../../assets/imgs/inputuser.svg" />Bring with You</ion-label>\n\n				<ion-input class="input_form" type="text" [(ngModel)]="taskdata.bring_with_you"\n\n					formControlName="bring_with_you"\n\n					[class.error1]="!newTaskform.controls.bring_with_you.valid && newTaskform.controls.bring_with_you.dirty">\n\n				</ion-input>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Frequency</ion-label>\n\n				<ion-select class="task_slct_optn" [(ngModel)]="taskdata.frequency" formControlName="frequency">\n\n					<ion-option value="daily">Daily</ion-option>\n\n					<ion-option value="weekly">Weekly</ion-option>\n\n					<ion-option value="monthly">Monthly</ion-option>\n\n					<ion-option value="unassigned">Once</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">if not Completed</ion-label>\n\n				<ion-select class="task_slct_optn" [(ngModel)]="taskdata.not_completed" formControlName="not_completed">\n\n					<ion-option value="nxt_day">Move to Next day</ion-option>\n\n					<ion-option value="nxt_week">Move to Next Week</ion-option>\n\n					<ion-option value="nxt_month">Move to Next Month</ion-option>\n\n					<ion-option value="delete">Delete</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Priority</ion-label>\n\n				<ion-select class="task_slct_optn" [(ngModel)]="taskdata.priority" formControlName="priority">\n\n					<ion-option value="high">High</ion-option>\n\n					<ion-option value="medium">Medium</ion-option>\n\n					<ion-option value="low">Low</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Category</ion-label>\n\n				<ion-select class="task_slct_optn" [(ngModel)]="taskdata.category" formControlName="category">\n\n\n\n					<div *ngFor="let cat of allCats[0]">\n\n						<ion-option value="{{cat.category_name}}">{{cat.category_name}}</ion-option>\n\n					</div>\n\n				</ion-select>\n\n			</ion-item>\n\n			<ion-item class="input_item task_select_opt">\n\n				<ion-label style="font-family: quicksandsR!important; color: #636363;">Color</ion-label>\n\n				<ion-select class="task_slct_optn" [(ngModel)]="taskdata.color" formControlName="color">\n\n					<ion-option value="green">Green</ion-option>\n\n					<ion-option value="black">Black</ion-option>\n\n					<ion-option value="blue">Blue</ion-option>\n\n					<ion-option value="red">Red</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n\n\n			<ion-item style="margin: 7px 0 7px;" class="input_item">\n\n				<ion-label class="input_label" color="inputcolor" style="font-family: quicksandsR!important;"><img\n\n						style="max-width: 17px; position: absolute; left: 0;" src="../../assets/imgs/inputclndr.svg" />\n\n					Due Date</ion-label>\n\n				<ion-datetime class="input_form" displayFormat="DD MM YYYY H:mm" [(ngModel)]="taskdata.due_date"\n\n					formControlName="due_date" min="{{taskdata.due_date}}"></ion-datetime>\n\n			</ion-item>\n\n\n\n\n\n			<p class="add_sub_task">Need to add some related sub task?</p>\n\n			<ion-item class="input_item" *ngFor="let att of subtaskArray; let idx = index">\n\n\n\n				<ion-label color="primary" item-start>{{att.label}}{{idx+1}}</ion-label>\n\n				<ion-input type="text" text-left [(ngModel)]="subtaskArray[idx].value"\n\n					formControlName="sub_task{{idx+1}}" placeholder="Enter sub task"></ion-input>\n\n				<div ion-button item-end style="margin: 14px 0 0; background: #db2d04; color: #ffffff;" clear\n\n					(click)="remaovesubTask(att.sub_task)">\n\n					<ion-icon name="remove"></ion-icon>\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-grid>\n\n				<ion-row>\n\n					<ion-col col-6>\n\n						<div ion-button style="margin: 14px 0 0; background: #73a82f; color: #ffffff;" clear\n\n							(click)="AddsubTask()">\n\n							<ion-icon name="add"></ion-icon>\n\n						</div>\n\n					</ion-col>\n\n				</ion-row>\n\n			</ion-grid>\n\n		</ion-list>\n\n		<button ion-button block class="save_btn" [disabled]="newTaskform.invalid">Save</button>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\newtask\newtask.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], NewtaskPage);
    return NewtaskPage;
}());

//# sourceMappingURL=newtask.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermPage = /** @class */ (function () {
    function TermPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermPage');
    };
    TermPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-term',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\term\term.html"*/'<!--\n\n  Generated template for the TermPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Terms and Conditions</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <iframe src="https://docs.google.com/viewerng/viewer?url=http://orga-nice-app.com/Mobile-App-Terms.pdf&embedded=true" frameborder="0" height="100%" width="100%">\n\n  </iframe>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\term\term.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TermPage);
    return TermPage;
}());

//# sourceMappingURL=term.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrivacypolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacypolicyPage = /** @class */ (function () {
    function PrivacypolicyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivacypolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacypolicyPage1');
    };
    PrivacypolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacypolicy',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\privacypolicy\privacypolicy.html"*/'<!--\n\n  Generated template for the PrivacypolicyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n    <ion-title>Privacy & policy</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pp_background" padding>\n\n  <div style="background: #ffffff; padding: 20px 10px 20px 10px; margin: 20px 0 0;     -webkit-box-shadow: 0px 4px 6px 2px #f1f1f1;\n\n  box-shadow: 0px 4px 6px 2px #f1f1f1;">\n\n    <h3 class="pp_heading"><img style="max-width: 20px; margin: 2px 8px 0;" src="../../assets/imgs/p&p.svg"/>Privacy & Policy</h3>\n\n    <p class="pp_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p> \n\n</div>\n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer>-->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\privacypolicy\privacypolicy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PrivacypolicyPage);
    return PrivacypolicyPage;
}());

//# sourceMappingURL=privacypolicy.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsandconditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsandconditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsandconditionPage = /** @class */ (function () {
    function TermsandconditionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsandconditionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsandconditionPage');
    };
    TermsandconditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termsandcondition',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\termsandcondition\termsandcondition.html"*/'<!--\n\n  Generated template for the TermsandconditionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n    <ion-title>Terms & condition</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="tc_background" padding>\n\n  <div style="background: #ffffff; padding: 20px 10px 20px 10px; margin: 20px 0 0;     -webkit-box-shadow: 0px 4px 6px 2px #f1f1f1;\n\n    box-shadow: 0px 4px 6px 2px #f1f1f1;">\n\n      <h3 class="tc_heading"><img style="max-width: 20px; margin: 2px 8px 0;" src="../../assets/imgs/p&p.svg"/>Terms & Condition</h3>\n\n      <p class="tc_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p> \n\n  </div> \n\n</ion-content>\n\n<!-- <ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-nice 2019 all Rights Reserve</p>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\termsandcondition\termsandcondition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TermsandconditionPage);
    return TermsandconditionPage;
}());

//# sourceMappingURL=termsandcondition.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginhome_loginhome__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tasks_tasks__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todaystasks_todaystasks__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar_calendar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quicknotes_quicknotes__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__newtask_newtask__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob_free__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, admob, popoverCtrl, network, storage, toastCtrl, alertCtrl, nav, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.admob = admob;
        this.popoverCtrl = popoverCtrl;
        this.network = network;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.UserDetails = Array();
    }
    // network
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            //console.log('User details is', userval);
            _this.UserDetails = userval;
            console.log(_this.UserDetails);
        });
        // watch network for a disconnection
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            console.log('i am in home.ts file');
            console.log('network was disconnected :-(');
        });
        // stop disconnect watch
        disconnectSubscription.unsubscribe();
        // watch network for a connection
        var connectSubscription = this.network.onConnect().subscribe(function () {
            console.log('network connected!');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 1000);
        });
        // stop connect watch
        connectSubscription.unsubscribe();
    };
    HomePage.prototype.showBanner = function () {
        var bannerConfig = {
            isTesting: true,
            autoShow: true
            //id: Your Ad Unit ID goes here
        };
        this.admob.banner.config(bannerConfig);
        this.admob.banner.prepare().then(function () {
            // success
        }).catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.launchInterstitial = function () {
        var interstitialConfig = {
            isTesting: true,
            autoShow: true
            //id: Your Ad Unit ID goes here
        };
        this.admob.interstitial.config(interstitialConfig);
        this.admob.interstitial.prepare().then(function () {
            // success
        });
    };
    // logout
    HomePage.prototype.logout = function () {
        var _this = this;
        this.storage.clear();
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 1000
        });
        loading.present();
        loading.onDidDismiss(function () {
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            var toast = _this.toastCtrl.create({
                message: "You are successfully logged out.",
                duration: 1000,
                position: 'top',
                cssClass: "customtoast",
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
                //window.location.reload();
            });
            toast.present();
        });
    };
    //end log out.
    HomePage.prototype.goTologinhome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__loginhome_loginhome__["a" /* LoginhomePage */]);
    };
    HomePage.prototype.goTotasks = function () {
        var _this = this;
        if (this.UserDetails == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Please Login!',
                subTitle: 'You need to login to your account to view your To-Dos.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__loginhome_loginhome__["a" /* LoginhomePage */]);
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tasks_tasks__["a" /* TasksPage */]);
        }
    };
    HomePage.prototype.gosettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.todaystask = function () {
        var _this = this;
        if (this.UserDetails == null) {
            var alert_2 = this.alertCtrl.create({
                title: 'Please Login!',
                subTitle: 'You need to login to your account to view your To-Dos.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__loginhome_loginhome__["a" /* LoginhomePage */]);
                        }
                    }
                ]
            });
            alert_2.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__todaystasks_todaystasks__["a" /* TodaystasksPage */]);
        }
    };
    HomePage.prototype.gocalendar = function () {
        var _this = this;
        if (this.UserDetails == null) {
            var alert_3 = this.alertCtrl.create({
                title: 'Please Login!',
                subTitle: 'You need to login to your account to view your To-Dos.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__loginhome_loginhome__["a" /* LoginhomePage */]);
                        }
                    }
                ]
            });
            alert_3.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__calendar_calendar__["a" /* CalendarPage */]);
        }
        //this.navCtrl.push(CalendarPage);
    };
    HomePage.prototype.godashboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage.prototype.goquicknotes = function () {
        var _this = this;
        if (this.UserDetails == null) {
            var alert_4 = this.alertCtrl.create({
                title: 'Please Login!',
                subTitle: 'You need to login to your account to view your To-Dos.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__loginhome_loginhome__["a" /* LoginhomePage */]);
                        }
                    }
                ]
            });
            alert_4.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__quicknotes_quicknotes__["a" /* QuicknotesPage */]);
        }
    };
    HomePage.prototype.goAddtask = function () {
        var _this = this;
        if (this.UserDetails == null) {
            var alert_5 = this.alertCtrl.create({
                title: 'Please Login!',
                subTitle: 'You need to login to your account to view your To-Dos.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__loginhome_loginhome__["a" /* LoginhomePage */]);
                        }
                    }
                ]
            });
            alert_5.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__newtask_newtask__["a" /* NewtaskPage */]);
        }
    };
    //popover cntrl
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\home\home.html"*/'<ion-header>\n\n	<ion-navbar class="header_font" color="primary">\n\n		<button class="menu_btn" ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n			<ion-title >Orga-Nice</ion-title>\n\n			<ion-buttons end>\n\n				<button ion-button icon-only (click)="presentPopover($event)">\n\n					<ion-icon name="more"></ion-icon>\n\n				</button>\n\n			</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-grid class="no_padding">\n\n		<ion-row  *ngIf="UserDetails == null">\n\n			<ion-col col-12>\n\n				<button ion-button secondary class="login_btn" (click)="goTologinhome()"><ion-icon style="margin-right: 5px; font-size: 15px;" name="log-in"></ion-icon>Login</button>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row  *ngIf="UserDetails != null">\n\n			<ion-col col-12>\n\n				<button ion-button secondary class="login_btn" (click)="logout()">\n\n					<ion-icon style="margin-right: 5px; font-size: 15px;" name="power"></ion-icon>Log Out\n\n				</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<ion-card class="to_do_back">\n\n		<!-- <ion-card-header>\n\n			 \n\n		</ion-card-header> -->\n\n		<ion-card-content>\n\n			<button ion-button block class="to_do_btn" (click)="todaystask()" style="font-family: quicksandsR!important; font-size: 15px; color:#444444; text-align: center;">Today\'s tasks</button>\n\n			<button ion-button class="add_btn" (click)="goAddtask()"><ion-icon ios="ios-add" md="md-add" class="plus_icon"></ion-icon></button>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col col-6>\n\n			  <!--<button ion-button secondary class="bottom_btn" (click)="todaystask()">More To-dos</button>-->\n\n			  <button ion-button secondary class="bottom_btn" (click)="goTotasks()">More To-dos</button>\n\n			</ion-col>\n\n			<ion-col col-6>\n\n			  <button ion-button secondary class="bottom_btn" (click)="gocalendar()">Open Calendar</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col col-12>\n\n				<button ion-button block class="sticky_notes_btn" (click)="goquicknotes()">Sticky Notes</button>\n\n			</ion-col>\n\n\n\n			<ion-col col-12>\n\n				<button ion-button block class="sticky_notes_btn" (click)="showBanner()">Show Banner</button>\n\n			</ion-col>\n\n\n\n			<ion-col col-12>\n\n				<button ion-button block class="sticky_notes_btn" (click)="launchInterstitial()">Show Interstitial</button>\n\n			</ion-col>\n\n\n\n		</ion-row>\n\n	</ion-grid>\n\n</ion-content>\n\n<!--<ion-footer class="footer_section">\n\n    <p class="footer_content">Orga-Nice 2019 All Rights Reserve</p>\n\n</ion-footer>-->\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcategory_addcategory__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, navParams, storage, http, toastCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.UserDetails = Array();
        this.allCats = Array();
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
    };
    CategoriesPage.prototype.ionViewDidEnter = function () {
    };
    CategoriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            _this.UserDetails = userval;
            _this.get_user_categories();
        });
    };
    //get user category
    CategoriesPage.prototype.get_user_categories = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var _url = "http://52.29.115.88/api/v1/user/user_category";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var catList = JSON.parse(data["_body"]);
            _this.allCats.push(catList.all_category);
            if (catList.status == 'failed') {
                _this.empty = true;
            }
            if (_this.allCats[0]) {
                if (_this.allCats[0].length < 1) {
                    _this.empty = true;
                }
                else {
                    _this.empty = false;
                }
            }
            else {
                _this.empty = true;
            }
            loading.dismiss();
        });
    };
    //delete category
    CategoriesPage.prototype.deleteCat = function (cat_id, index) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Do you want to delete this category? It will be permanently deleted!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        var postdata = {
                            'cat_id': cat_id
                        };
                        var _url = "http://52.29.115.88/api/v1/user/delete_category";
                        _this.http.post(_url, postdata, { headers: _this.headers })
                            .subscribe(function (data) {
                            var result = JSON.parse(data["_body"]);
                            if (result.status == "failed") {
                                loading.dismiss();
                                loading.onDidDismiss(function () {
                                    var toast = _this.toastCtrl.create({
                                        message: result.message,
                                        duration: 1000,
                                        position: 'top',
                                        cssClass: "customtoast",
                                    });
                                    toast.onDidDismiss(function () {
                                    });
                                    toast.present();
                                });
                            }
                            else {
                                /* let loading = this.loadingCtrl.create({
                                  content: 'Please wait...',
                                  duration: 1000
                                });
            
                                loading.present(); */
                                loading.dismiss();
                                _this.allCats[0].splice(index, 1);
                                if (_this.allCats[0]) {
                                    if (_this.allCats[0].length < 1) {
                                        _this.empty = true;
                                    }
                                    else {
                                        _this.empty = false;
                                    }
                                }
                                else {
                                    _this.empty = true;
                                }
                                loading.onDidDismiss(function () {
                                    var toast = _this.toastCtrl.create({
                                        message: result.message,
                                        duration: 1000,
                                        position: 'top',
                                        cssClass: "customtoast",
                                    });
                                    toast.onDidDismiss(function () {
                                    });
                                    toast.present();
                                });
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    //go to add category view
    CategoriesPage.prototype.goAddcategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addcategory_addcategory__["a" /* AddcategoryPage */]);
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\categories\categories.html"*/'<!--\n\n  Generated template for the AddcategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n    <ion-title>Categories</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid class="task_list">\n\n    <div *ngIf="empty == false">\n\n      <ion-row>\n\n        <div class="tsk_ctgry">\n\n          <p class="tsk_ctgry_hedng">Categories</p>\n\n        </div>\n\n      </ion-row>\n\n      <div *ngFor="let cat of allCats[0]; let i = index">\n\n      <ion-row >\n\n        <ion-col class="tsk_chkbx_area" col-12>\n\n          <div>\n\n            <div float-left class="my-checkbox">\n\n              <!--<ion-checkbox checked class="task_chkbx" name="receive_calls">\n\n              </ion-checkbox>-->\n\n              <ion-label chkbx_lbl text-uppercase>{{cat.category_name}}</ion-label>\n\n              <button class="trsh_btn" (click)="deleteCat(cat.id, i)">\n\n                <ion-icon name="trash"></ion-icon>\n\n              </button>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      </div>\n\n    </div>\n\n    <div style="text-align: center;" *ngIf="empty == true">\n\n      <object style="max-width: 52px; width: 100%; margin: 20px auto 10px auto; left: 0; right: 0; display: block;"\n\n        type="image/svg+xml" data="../../assets/imgs/category.svg">\n\n        Your browser does not support SVG\n\n      </object>\n\n      <h5 style="font-size: 16px; font-family: quicksandsR!important; color: #626262; line-height: 22px;">No category to show..! Please add category..!</h5>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>\n\n<div class="add_btn_sec">\n\n  <button ion-button class="add_btn" (click)="goAddcategory()">\n\n    <ion-icon ios="ios-add" md="md-add" class="plus_icon"></ion-icon>\n\n  </button>\n\n</div>'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addevent_addevent__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weeklycalender_weeklycalender__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__monthlycalender_monthlycalender__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    CalendarPage.prototype.ngOnInit = function () {
        //scheduler.locale = {
        /* date:{
           month_full:["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"],
           month_short:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
               "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
           day_full:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
               "Friday", "Saturday"],
           day_short:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
       },  */
        //labels:{
        // dhx_cal_today_button:"Current",
        /* day_tab:"Day",
        week_tab:"Week",
        month_tab:"Month",
        new_event:"New event",
        icon_save:"Save",
        icon_cancel:"Cancel",
        icon_details:"Details",
        icon_edit:"Edit",
        icon_delete:"Delete",
        confirm_closing:"",// Your changes will be lost, are your sure?
        confirm_deleting:"Event will be deleted permanently, are you sure?",
        section_description:"Description", */
        // section_time:"Time period",
        //full_day:"Full day",
        /*recurring events*/
        //confirm_recurring:"Do you want to edit the whole set of repeated events?",
        //section_recurring:"Repeat event",
        /* button_recurring:"Disabled",
        button_recurring_open:"Enabled",
        button_edit_series:"Edit series",
        button_edit_occurrence:"Edit occurrence", */
        /*agenda view extension*/
        /* agenda_tab:"Agenda",
        date:"Date",
        description:"Description",
  */
        /*year view extension*/
        //year_tab:"Year",
        /* week agenda extension */
        //week_agenda_tab:"Agenda",
        /*grid view extension*/
        //grid_tab:"Grid",
        /* touch tooltip*/
        //drag_to_create:"Drag to create",
        //drag_to_move:"Drag to move",
        /* dhtmlx message default buttons */
        //message_ok:"OK",
        //message_cancel:"Cancel",
        /* wai aria labels for non-text controls */
        /* next:"Next",
        prev:"Previous",
        year:"Year",
        month:"Month",
        day:"Day",
        hour:"Hour",
        minute:"Minute" */
        //}
        //};
    };
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage.prototype.goaddevent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addevent_addevent__["a" /* AddeventPage */]);
    };
    CalendarPage.prototype.goweeklycalender = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__weeklycalender_weeklycalender__["a" /* WeeklycalenderPage */]);
    };
    CalendarPage.prototype.gomonthlycalender = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__monthlycalender_monthlycalender__["a" /* MonthlycalenderPage */]);
    };
    //popover cntrl
    CalendarPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\calendar\calendar.html"*/'<ion-header>\n\n	<ion-navbar class="header_font" color="primary">\n\n		<ion-title>Calendar</ion-title>\n\n\n\n	</ion-navbar>\n\n</ion-header>\n\nWelcome to Calendar\n\n<ion-content padding>\n\n	<object style="max-width: 156px; width: 100%; margin: 30px auto 30px auto; left: 0; right: 0; display: block;"\n\n		type="image/svg+xml" data="../../assets/imgs/logo.svg">\n\n		Your browser does not support SVG\n\n	</object>\n\n	<div class="btn_group">\n\n		<button ion-button block class="opt_btn" (click)="goweeklycalender()"><img\n\n				style="max-width: 15px; margin-right: 5px;" src="../../assets/imgs/inputclndr.svg" />Weekly</button>\n\n		<button ion-button block class="opt_btn" (click)="gomonthlycalender()"><img\n\n				style="max-width: 15px; margin-right: 5px;" src="../../assets/imgs/inputclndr.svg" />Monthly</button>\n\n		<button ion-button block class="opt_btn" (click)="goaddevent()"><img style="max-width: 15px; margin-right: 5px;"\n\n				src="../../assets/imgs/inputclndr.svg" />Add Event</button>\n\n		<button ion-button block class="opt_btn"><img style="max-width: 15px; margin-right: 5px;"\n\n				src="../../assets/imgs/inputclndr.svg" />Import Events from Other Calendars</button>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuicknotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__writenotes_writenotes__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editnotes_editnotes__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the QuicknotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuicknotesPage = /** @class */ (function () {
    function QuicknotesPage(nav, global, navCtrl, navParams, popoverCtrl, storage, http, toastCtrl, loadingCtrl) {
        this.nav = nav;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.UserDetails = Array();
        this.allNotes = Array();
        this.urlGet = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.urlGet = global.url;
    }
    QuicknotesPage.prototype.ionViewWillEnter = function () {
    };
    QuicknotesPage.prototype.ionViewDidLoad = function () {
        /* this.storage.get("userdetails").then((userval) => {
          console.log('User details is', userval);
          this.UserDetails = userval;
          //console.log(this.UserDetails['userdetails'].id);
        });
        console.log(this.UserDetails); */
    };
    QuicknotesPage.prototype.ionViewDidEnter = function () {
    };
    QuicknotesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("userdetails").then(function (userval) {
            console.log('User details is', userval);
            _this.UserDetails = userval;
            //console.log(this.UserDetails['userdetails'].id);
            console.log(_this.UserDetails);
            _this.get_user_notes();
        });
    };
    QuicknotesPage.prototype.get_user_notes = function () {
        var _this = this;
        console.log(this.urlGet);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var _url = this.urlGet + "api/v1/user/getnotes";
        var postdata = {
            'user_id': this.UserDetails['userdetails'].id
        };
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var noteList = JSON.parse(data["_body"]);
            console.log(noteList);
            _this.allNotes.push(noteList.all_notes);
            loading.dismiss();
        });
        console.log(this.allNotes);
    };
    //delete note
    QuicknotesPage.prototype.deleteNote = function (note_id) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var postdata = {
            'id': note_id
        };
        console.log(postdata);
        var _url = this.urlGet + "api/v1/user/delete_note";
        this.http.post(_url, postdata, { headers: this.headers })
            .subscribe(function (data) {
            var result = JSON.parse(data["_body"]);
            console.log(note_id);
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Your note has been deleted successfully.',
                duration: 2000,
                position: 'top',
                cssClass: "customtoast",
            });
            toast.onDidDismiss(function () {
                console.log('note delete toast');
            });
            toast.present();
            _this.allNotes[0] = _this.allNotes[0].filter(function (element) { return element.id != note_id; });
            console.log(_this.allNotes);
            // this.navCtrl.push(QuicknotesPage)
            // this.nav.push(QuicknotesPage).then(() => {
            //   //const index = this.nav.getActive().index;
            //   //this.nav.remove(0, index);
            //   const startIndex = this.navCtrl.getActive().index - 1;
            //   this.navCtrl.remove(startIndex, 1);
            // });
        });
    };
    QuicknotesPage.prototype.gowritenotes = function () {
        //  this.noteData.id=4;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__writenotes_writenotes__["a" /* WritenotesPage */]);
    };
    QuicknotesPage.prototype.editNote = function (note_id, notes) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__editnotes_editnotes__["a" /* EditnotesPage */], { note_id: note_id });
    };
    //popover cntrl
    QuicknotesPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    QuicknotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quicknotes',template:/*ion-inline-start:"D:\Basit\projects\orgaFrontEnd\src\pages\quicknotes\quicknotes.html"*/'<!--\n\n  Generated template for the QuicknotesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="header_font" color="primary">\n\n		<ion-title>Sticky Notes</ion-title>\n\n		<!-- <ion-buttons end>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon name="more"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="quicknotes_body">\n\n		<ion-grid class="notes_list">\n\n			<ion-row>\n\n				<div class="notes_ctgry">\n\n					<p class="notes_hedng">Notes</p>\n\n				</div>\n\n			</ion-row>\n\n			<!-- <ion-list>\n\n				<ion-item-sliding *ngFor="let note of allNotes[0]">\n\n					<ion-item><p class="notes_text">{{note.notes}}</p></ion-item>\n\n					<ion-item-options side="right">\n\n						<button color="danger" value="let id={{note.id}}" ion-button (click)="deleteNote(id)">\n\n							<ion-icon name="trash"></ion-icon>\n\n						</button>\n\n					</ion-item-options>\n\n				</ion-item-sliding>\n\n			</ion-list>\n\n		</ion-grid>\n\n	</div> -->\n\n			\n\n			<div *ngIf="allNotes[0] && allNotes[0].length >0">\n\n			\n\n			  <ion-row *ngFor="let note of allNotes[0]">\n\n				<ion-col class="quicknotes_area" col-12>\n\n				  \n\n					<div *ngIf="allNotes[0].length > 0">\n\n						<p class="notes_text">{{note.notes}}</p>\n\n						<button class="trsh_btn" (click)="editNote(note.id,\'note.notes\')"><ion-icon name="create"></ion-icon></button>\n\n						<button class="trsh_btn" (click)="deleteNote(note.id)"><ion-icon name="trash"></ion-icon></button>\n\n					</div>\n\n				</ion-col>\n\n			</ion-row>\n\n			\n\n			</div>\n\n\n\n			<!--<div *ngIf="allNotes[0] == undefined || allNotes[0].length == 0"><p class="notes_text">\n\n			<ion-row>\n\n				<ion-col class="quicknotes_area" col-12><p>No result found.</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			</div>-->\n\n			<!-- <ion-row>\n\n				<ion-col class="quicknotes_area" col-12>\n\n					<div>\n\n						<p class="notes_text">Lorem Ipsum is simply dummy text</p>\n\n					</div>\n\n				</ion-col>\n\n			</ion-row>\n\n			<ion-row>\n\n				<ion-col class="quicknotes_area" col-12>\n\n					<div>\n\n						<p class="notes_text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>\n\n					</div>\n\n				</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n				<ion-col class="quicknotes_area" col-12>\n\n					<div>\n\n						<p class="notes_text">Lorem Ipsum is simply dummy text</p>\n\n					</div>\n\n				</ion-col>\n\n			</ion-row>  -->\n\n    </ion-grid> \n\n  </div>\n\n  </ion-content>\n\n  <div class="add_btn_sec">\n\n      <button ion-button class="add_btn" (click)="gowritenotes()"><ion-icon ios="ios-add" md="md-add" class="plus_icon"></ion-icon></button>\n\n  </div>\n\n'/*ion-inline-end:"D:\Basit\projects\orgaFrontEnd\src\pages\quicknotes\quicknotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], QuicknotesPage);
    return QuicknotesPage;
}());

//# sourceMappingURL=quicknotes.js.map

/***/ })

},[512]);
//# sourceMappingURL=main.js.map