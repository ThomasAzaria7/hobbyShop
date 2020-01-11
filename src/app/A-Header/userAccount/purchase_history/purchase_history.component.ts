import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'

@Component({
  selector: 'app-purchase_history',
  templateUrl: './purchase_history.component.html',
  styleUrls: ['./purchase_history.component.css']
})
export class Purchase_historyComponent implements OnInit {

  purchaseHistory
  id
  
  constructor(private store: Store<{ checkout: any }>){}
  ngOnInit() {

  
 

    this.store.pipe(select('checkout')).subscribe(
      val=>{
          console.log(val.recipt);
          this.id= val.recipt.id
          this.purchaseHistory=val.recipt.purchase_units
      }
    )
  

    
  }
 
}