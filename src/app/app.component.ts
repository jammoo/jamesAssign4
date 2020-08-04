import { Component } from '@angular/core';
import { MyBio } from './MyBio';
import { car } from '../app/carInterface';
import cars from '../assets/data/cars.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jamesAssign4';
  MYBIO:MyBio = {sname: "James Bhagoutie", sid: "991554085", img: "../../assets/images/sunset.JPG", status: "Sophomore"};
  newCars: car[] = cars.cars.New;
  usedCars: car[] = cars.cars.Used;
}
