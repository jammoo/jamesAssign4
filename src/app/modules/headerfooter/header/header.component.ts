/* James Bhagoutie 991554085 */
import { Component, OnInit, Input } from '@angular/core';
import { MyBio } from 'src/app/MyBio';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() bio: MyBio;
  ngOnInit(): void {
  }

}
