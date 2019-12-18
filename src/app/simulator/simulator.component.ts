import { Component, OnInit } from '@angular/core';
import { SimulatorService } from '../services/simulator.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

  constructor(private simulatorService: SimulatorService) { }

  ngOnInit() {
  }

  onSimulate(){
    this.simulatorService.login();
  }

}
