import { Injectable } from '@angular/core';
import { SimulatorApiService } from './simulator-api.service';

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  constructor(private simulatorApiService: SimulatorApiService) { }

  login() {
    this.simulatorApiService.loginAPI()
      .subscribe((response: any) => {
        console.log(" res is ",response);
        if (response) {
          this.simulatorApiService.access_token = response.access_token;
          console.log(this.simulatorApiService.access_token)
          if (response.access_token) {
            setTimeout(() => {
              this.simulator();
            }, 2000);
          }

        }
      })
  }

  simulator() {
    // console.log(this.simulatorApiService.access_token)
    console.log("called simulator method");
    this.simulatorApiService.simulateAPI()
      .subscribe((response: any) => {
        if (response) {
          this.simulatorApiService.responseArray = response;
          console.log(response)
        }
      })
  }
}
