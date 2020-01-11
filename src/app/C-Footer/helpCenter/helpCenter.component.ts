import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpCenter',
  templateUrl: './helpCenter.component.html',
  styleUrls: ['./helpCenter.component.scss']
})
export class HelpCenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scroll(0,0)
  }

}
