/* James Bhagoutie 991554085 */
import { Component, OnInit, Input } from '@angular/core';
import { MYCLASSES } from '../../assets/data/myCourses';
import { MyBio } from '../MyBio';

@Component({
  selector: 'app-bhagoutie',
  templateUrl: './bhagoutie.component.html',
  styleUrls: ['./bhagoutie.component.css']
})
export class BhagoutieComponent implements OnInit {
  i: number;
  constructor() { }
  @Input() bio: MyBio;

  myclasses = MYCLASSES;

  ngOnInit(): void {
  }

  onClickMe(i) {
    this.i = i;
  }

  showHideText(index) {
    if (index == this.i) {
      return "block";
    } 
    else {
      return "none";
    }
  }

}
