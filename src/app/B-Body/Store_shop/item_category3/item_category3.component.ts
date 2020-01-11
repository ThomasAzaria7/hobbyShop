import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'

@Component({
  selector: 'app-item_category3',
  templateUrl: './item_category3.component.html',
  styleUrls: ['./item_category3.component.css']
})
export class Item_category3Component implements OnInit {

  constructor(private store: Store<{ checkout: any }>,private router:Router,){
 
  }

  ngOnInit() {
    this.store.pipe(select('checkout')).subscribe(
      val =>{
        console.log(val.products[2]);
        // this.CarsitemsModel=val.products[0]

        
      }
    )
  }

}
