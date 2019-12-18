import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulatorComponent } from './simulator/simulator.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/simulator',
    pathMatch: 'full',
  },
  {
    path: 'simulator',
    component: SimulatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
