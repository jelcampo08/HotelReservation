import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
import { ContactServiceService } from '../services/contact-service.service';

@Injectable({
	providedIn: 'root'
	})

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})

export class AdminPage {
	DATA_STORAGE = 'data';
	a_username="";
	a_password="";
	constructor(public contactService: ContactServiceService){ }
	/*getDataFromLumen(): Promise<any>{
	return new Promise((resolve, reject) => {
	this.http.get('http://localhost:8100/api/admin').subscribe(data) => {
	console.log(data);
	resolve(data);

	}, (err) => {
		reject(err);

		});

	});
}
		}   */ 
	insertDataToLumen(username, password){
		this.contactService.insertDataToLumen(this.a_username,this.a_password)
	} 


}
