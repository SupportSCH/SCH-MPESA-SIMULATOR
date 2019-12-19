import { Component, OnInit } from '@angular/core';
import { SimulatorService } from '../services/simulator.service';
import { SimulatorApiService } from '../services/simulator-api.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

  constructor(private simulatorService: SimulatorService, private simulatorApiService: SimulatorApiService) { }

  ngOnInit() {
    this.simulatorService.processControl();
  }

  onSimulate(){
    this.simulatorService.login();
  }

  onClick(clickedID, statusCode){
    this.simulatorApiService.ID = clickedID;
    this.simulatorApiService.statusCode = statusCode;
    this.simulatorService.processControl();
  }

}
