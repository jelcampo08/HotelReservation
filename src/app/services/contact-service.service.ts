import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactServiceService {

  constructor(private http: HttpClient) { }

  insertDataToLumen(username, password): Promise<any> {
		return new Promise((resolve, reject) => {
			const data = {
				a_username: username,
				a_password: password
			};
			this.http.put('http://localhost:8000/api/create', data).subscribe(data => {
				resolve(data);
			}, err => {
				reject(data);
				});
			
			});
	} 

	insertDataToReserve(names, address, numbers, email, preference, days, occup, bed, dates, pnight): Promise<any> {
		return new Promise((resolve, reject) => {
			const data = {
				g_name: names,
				g_address: address,
				g_number: numbers,
				g_email: email,
				r_preference: preference,
				n_days: days,
				n_occu: occup,
				e_bed: bed,
				ci_date: dates,
				p_night: pnight,
			};
			this.http.put('http://localhost:8000/api/create', data).subscribe(data => {
				resolve(data);
			}, err => {
				reject(data);
				});
			
			});
	}

	getDataFromLumen(): Promise<any>{
	return new Promise((resolve, reject)=>{
	this.http.get('http://localhost:8000/api/reserve').subscribe(data => {
	console.log(data);
	resolve(data); 

	}, (err) => {
		reject(err);

		});
	  });
	}

	/*deleteDataFromLumen(id):{
	return new Promise((resolve, reject)=>{
	this.http.delete('http://localhost:8000/api/reserve/{id}').subscribe(data => {
	console.log(data);
	resolve(data); 

	}, (err) => {
		reject(err);

		});
	  });
	}*/

	updateDataFromLumen(id, names, address, numbers, email, preference, days, occup, bed, dates, pnight){
		const data = {
				g_name: names,
				g_address: address,
				g_number: numbers,
				g_email: email,
				r_preference: preference,
				n_days: days,
				n_occu: occup,
				e_bed: bed,
				ci_date: dates,
				p_night: pnight,
			};
			this.http.put('http://localhost:8000/api/create/' +id, data).subscribe(data => {
				console.log('true');
			}, err =>
				console.log('failed')
			);
	}

}

