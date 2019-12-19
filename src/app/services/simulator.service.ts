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

  processControl(){
    this.simulatorApiService.processControlAPI()
    .subscribe((response: any) => {
      this.simulatorApiService.ProcessStatus1 = response.Data[0].Active;
      this.simulatorApiService.ProcessStatus2 = response.Data[1].Active;
      this.simulatorApiService.ProcessStatus3 = response.Data[2].Active;
      this.simulatorApiService.ProcessStatus4 = response.Data[3].Active;
    })
  }
}
