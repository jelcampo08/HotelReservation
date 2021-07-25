import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactServiceService } from '../services/contact-service.service';

@Injectable({
	providedIn: 'root'
	})

@Component({
  selector: 'app-rm-classic',
  templateUrl: './rm-classic.page.html',
  styleUrls: ['./rm-classic.page.scss'],
})
export class RmClassicPage {
	private myToast: any;
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
	constructor(
		public contactService: ContactServiceService,
		public toast: ToastController,
		private activatedRoute: ActivatedRoute,
		private router: Router

		) { }

	insertDataToReserve(names, address, numbers, email, preference, days, occup, bed, dates, pnight){
		this.contactService.insertDataToReserve(this.g_name,this.g_address,this.g_number,this.g_email,this.r_preference,this.n_days,this.n_occu,this.e_bed,this.ci_date,this.p_night)
		this.alerts();
		this.clearField();
		/*this.router.navigate(['/user']);*/
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

	alerts() {
    this.myToast = this.toast.create({
      header: 'Message',
      message: 'You have Successfully Book a Reservation!',
      position: 'top',
      duration: 2500,
      animated: true,
      buttons: [{
        side: 'end',
        text: 'Okay',
        role: 'cancel',
        handler: () => {
        	console.log('Cancel clicked');
        }
        }]
      }).then((toastData) => {
      	console.log(toastData);
      	toastData.present();
      	});
  }



}
