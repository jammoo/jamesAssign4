/* James Bhagoutie 991554085 */
import { Component, OnInit, Input } from '@angular/core';
import { MYCLASSES } from '../../assets/data/myCourses';
import { MyBio } from '../MyBio';
import { car } from '../carInterface';

@Component({
  selector: 'app-bhagoutie',
  templateUrl: './bhagoutie.component.html',
  styleUrls: ['./bhagoutie.component.css']
})
export class BhagoutieComponent implements OnInit {
  i: number;
  j: number;
  constructor() { }
  @Input() bio: MyBio;
  @Input() new: car[];
  @Input() used: car[];
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

  showHideTable(i) {
    if (this.j == i) {
      return "block";
    }
    return "none";
  }

  displayJSON(i) {
    this.j = i;
  }

}
