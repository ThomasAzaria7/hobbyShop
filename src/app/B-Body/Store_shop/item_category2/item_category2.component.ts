import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
// import {CategoryNum} from 'src/app/NGRX_STORE/actions/checkout__actions.actions'
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'

@Component({
  selector: 'app-item_category2',
  templateUrl: './item_category2.component.html',
  styleUrls: ['./item_category2.component.scss']
})
export class Item_category2Component implements OnInit {


  data=[
    {
      name:'thomas',
      lastname:'azaria',
      id:'3278603'
    },

    {
      name:'Abel',
      lastname:'oglog',
      id:'55555'
    },


]

  mailOptions = {
    from: 'thomas.azaria7@gmail.com', // sender address
    to: 'yungblackhumbl3@gmail.com',  // list of receivers
    subject: 'Hobby Jocky', // Subject line
    data:this.data,
    html:
     `
      <h2>Hello</h2>

    `
};
  CarsitemsModel

constructor(private store: Store<{ checkout: any }>,private router:Router,){
 
}
  // constructor(private http:HttpClient) { }

  ngOnInit() {
    this.store.pipe(select('checkout')).subscribe(
      val =>{
        console.log(val.products[1]);
        this.CarsitemsModel=val.products[1]

        
      }
    )
  }

  PreviewProduct(i,x){
    this.router.navigate(['store/' + i]);
  }

  // send(){
  //   this.http.post('http://localhost:3000/shop/subscribe',this.mailOptions).subscribe(
  //     (success)=>{
  //       console.log(success);
        
  //     },
  //     (err)=>{
  //       console.log(err);
        
  //     }
  //   )
  // }
}
