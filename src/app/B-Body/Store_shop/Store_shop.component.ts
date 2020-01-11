import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'
import * as checkoutActions from 'src/app/NGRX_STORE/actions/checkout__actions.actions'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-Store_shop',
  templateUrl: './Store_shop.component.html',
  styleUrls: ['./Store_shop.component.scss']
})
export class Store_shopComponent implements OnInit {

  constructor(private router:Router,private store: Store<AppReducers.State>, private http:HttpClient) {

   }



  ngOnInit() {


    scroll(0,0)



  }


 


}
