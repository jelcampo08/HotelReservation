import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
import { Router, ActivatedRoute } from '@angular/router';
import { ContactServiceService } from '../services/contact-service.service';

@Injectable({
	providedIn: 'root'
	})

@Component({
  selector: 'app-book-aroom',
  templateUrl: './book-aroom.page.html',
  styleUrls: ['./book-aroom.page.scss'],
})

export class BookAroomPage implements OnInit{
	DATA_STORAGE = 'data';
	reserves: any = [];
	id="";
	g_name="";
	g_address="";
	g_number="";
	g_email="";
	r_preference="";
	n_days="";
	n_occu="";
	e_bed="";
	ci_date="";
	p_night="";

  constructor(
  	public contactService: ContactServiceService,
  	private activatedRoute: ActivatedRoute

  	) { 
  	this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
  	this.getAllData();
  }

getAllData(){
	this.contactService.getDataFromLumen().then(data => {
		this.reserves = data;
		console.log(data);
		});
}

update(id){
	this.contactService.updateDataFromLumen(this.id,this.g_name,this.g_address,this.g_number,this.g_email,this.r_preference,this.n_days,this.n_occu,this.e_bed,this.ci_date,this.p_night);
	console.log('update')
}

}
