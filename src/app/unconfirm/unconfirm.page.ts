import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
import { ContactServiceService } from '../services/contact-service.service';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
	providedIn: 'root'
	})

@Component({
  selector: 'app-unconfirm',
  templateUrl: './unconfirm.page.html',
  styleUrls: ['./unconfirm.page.scss'],
})
export class UnconfirmPage implements OnInit{
	DATA_STORAGE = 'data';
	reserves: any = [];

  constructor(public contactService: ContactServiceService) { }

  async ngOnInit() {
  	this.getAllData();
  }

getAllData(){
	this.contactService.getDataFromLumen().then(data => {
		this.reserves = data;
		console.log(data);
		});
}

/*deleteOneData(){
	this.contactService.deleteDataFromLumen().then(data => {
		this.reserves = data;
		console.log(data);
		});
}*/

}
