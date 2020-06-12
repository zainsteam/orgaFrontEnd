import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

	// public url = "http://52.29.115.88/";
	public url = "http://52.29.115.88/";
	constructor(public http: HttpClient) {
		console.log('Hello GlobalProvider Provider');
	}

}
