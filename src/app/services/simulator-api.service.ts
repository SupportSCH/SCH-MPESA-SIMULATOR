import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimulatorApiService {

  access_token: any;
  responseArray: any = [];

  constructor(private http: HttpClient) { }

  loginAPI() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa("rg1idgddcMD97tAAzHY0EYCVzA9ZIhkx:vILPPURHZFBuc6cA")
      })
    };

    return this.http.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', httpOptions);
  }



  simulateAPI() {

    let data = {
      "ShortCode": "600247",
      "CommandID": "CustomerPayBillOnline",
      "Amount": "131",
      "Msisdn": "254708374141",
      "BillRefNumber": "0007000184"
  }

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer a0TzMQyfuzv8A7krwMoN1yzwxKAq",
        // 'Authorization': 'Bearer ' + this.access_token
      })
    };
    console.log("simulators",this.access_token);
    
    return this.http.post('https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate', data, httpOptions);
  }
}

