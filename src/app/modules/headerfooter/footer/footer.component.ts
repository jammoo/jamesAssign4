/* James Bhagoutie 991554085 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  sname = "James Bhagoutie";
  sid = 991554085;
  date = new Date();
  year = this.date.getFullYear();
  months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  month = this.months[this.date.getMonth()];
  day = this.date.getDate();
  
  ngOnInit(): void {
  }

}
