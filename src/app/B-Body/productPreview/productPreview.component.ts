import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'
import {select, Store} from '@ngrx/store';
import { cartCount } from 'src/app/NGRX_STORE/actions/checkout__actions.actions';

@Component({
  selector: 'app-productPreview',
  templateUrl: './productPreview.component.html',
  styleUrls: ['./productPreview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  mycart=[{}]
  item
  similarProducts

  itemCategoryArrnumber
  constructor(private store: Store<{ checkout: any }>,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    scroll(0,0)


    const itemCode=this.activatedRoute.snapshot.params['itemCode']
    this.itemCategoryArrnumber = itemCode.match(/\d+/g)[0];
     
    this.store.pipe(select('checkout')).subscribe(
      val =>{
        // this.itemCategoryArrnumber=val.itemCategoryNum
        this.similarProducts=val.products[this.itemCategoryArrnumber+1]
        val.products[this.itemCategoryArrnumber].forEach((x,i) => {
          if(x.id == itemCode){
            // console.log(val);
            this.item=val.products[this.itemCategoryArrnumber][i]
          }  
        });
      }
    )
    
  }

  addToCart(){

   const cartItems= localStorage.getItem('cartItems')
    this.mycart= JSON.parse(cartItems)
      //
      if(!this.mycart){
        this.mycart=[this.item]
      }else{
        this.mycart.push(this.item)
      }
      //
    localStorage.setItem('cartItems',JSON.stringify(this.mycart))
    const amount =this.mycart.length
    this.store.dispatch(cartCount({itemsNumber:{count:amount} }));
 
  }

}
 