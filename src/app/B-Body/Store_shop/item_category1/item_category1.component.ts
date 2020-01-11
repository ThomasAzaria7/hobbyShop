import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
// import {CategoryNum} from 'src/app/NGRX_STORE/actions/checkout__actions.actions'
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'

@Component({
  selector: 'app-item_category1',
  templateUrl: './item_category1.component.html',
  styleUrls: ['./item_category1.component.scss']
})
export class Item_category1Component implements OnInit,DoCheck {

  constructor(private store: Store<{ checkout: any }>,private router:Router,){
 
  }

ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
  
}
 
  // CarsitemsModel
  CarsitemsModel

  ngOnInit() {

    this.store.pipe(select('checkout')).subscribe(
      val =>{
        // console.log(val);
        this.CarsitemsModel=val.products[0]

        
      }
    )
      
  
  

    
  }

PreviewProduct(i){
  
    this.router.navigate(['store/' + i]);



  }





}
