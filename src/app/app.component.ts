import { Component } from '@angular/core';
import { MyBio } from './MyBio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jamesAssign4';
  MYBIO:MyBio = {sname: "James Bhagoutie", sid: "991554085", img: "../../assets/images/sunset.JPG", status: "Sophomore"};
}
