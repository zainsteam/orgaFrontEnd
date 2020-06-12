import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { FCM } from '@ionic-native/fcm';
import { Platform } from 'ionic-angular';

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  mobileToken;

  constructor(public http: HttpClient, 
    // private fcm: FCM,
    public platform: Platform) {
    console.log('Hello FcmProvider Provider');
  }

  getToken()
  {
    
  }



}
