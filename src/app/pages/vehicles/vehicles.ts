import { Component } from '@angular/core';
import { CarModel } from '../../model/car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicles',
  imports: [FormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles {
  newCarObj:CarModel;

  constructor(){
    this.newCarObj = new CarModel();
  }


}
