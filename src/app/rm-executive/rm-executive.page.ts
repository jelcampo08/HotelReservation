import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
import { ContactServiceService } from '../services/contact-service.service';

@Injectable({
	providedIn: 'root'
	})

@Component({
  selector: 'app-rm-executive',
  templateUrl: './rm-executive.page.html',
  styleUrls: ['./rm-executive.page.scss'],
})
export class RmExecutivePage{

  DATA_STORAGE = 'data';
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
	constructor(public contactService: ContactServiceService){ }

	insertDataToReserve(names, address, numbers, email, preference, days, occup, bed, dates, pnight){
		this.contactService.insertDataToReserve(this.g_name,this.g_address,this.g_number,this.g_email,this.r_preference,this.n_days,this.n_occu,this.e_bed,this.ci_date,this.p_night)
		this.clearField();
	}

	clearField(){
		this.g_name="";
		this.g_address="";
		this.g_number="";
		this.g_email="";
		this.r_preference="";
		this.n_days="";
		this.n_occu="";
		this.e_bed="";
		this.ci_date="";
		this.p_night="";

	} 

}

