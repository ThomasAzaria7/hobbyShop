import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { Store,select } from '@ngrx/store';
import {sendProduct, getRecipt, cartCount,loggedIn} from 'src/app/NGRX_STORE/actions/checkout__actions.actions'
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppReducers.State>) { }

  ngOnInit() {
    scroll(0,0)
  
  }

}
