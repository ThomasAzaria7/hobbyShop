import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import {getRecipt, cartCount} from 'src/app/NGRX_STORE/actions/checkout__actions.actions'
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'
import {select, Store} from '@ngrx/store';

import {firestore} from 'firebase'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  onDisplay
  total
  mycart
  itemsCollection=[]

  constructor(private store: Store<{ checkout: any }>, private http:HttpClient) {
  
    }
ngOnInit() {

      this.transactionSetUp()
      this.getTotal()
      this.initConfig();

      scroll(0,0)
   
    
  }

  transactionSetUp(){
    const cartItems= localStorage.getItem('cartItems')
    this.mycart= JSON.parse(cartItems)



    if(this.mycart){
        for(let i=0; i<this.mycart.length;i++){
          this.mycart[i].price=  parseFloat(this.mycart[i].price).toFixed(2)
          if(this.itemsCollection){
            this.itemsCollection.push(
              
            {
              name:this.mycart[i].title,
              quantity:"1" ,
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: "AUD",
                value: this.mycart[i].price
              }
            }
            
            
            )
          }else{
            this.itemsCollection=[
              {
                name:this.mycart[i].title,
                quantity:"1" ,
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: "AUD",
                  value: this.mycart[i].price
                }
              }
            ]
          }
        
        } // end of loop

      }
      //end of if statement
  }

  getTotal(){
    
    this.total=0

    if(this.itemsCollection) {
      for (let index = 0; index < this.itemsCollection.length; index++) {
        
        this.total +=  parseFloat(this.itemsCollection[index].unit_amount.value)
      }
      this.total=this.total.toFixed(2)
    }
  }

  removeItemFromCart(i){
    const cartItems= localStorage.getItem('cartItems')
    this.mycart= JSON.parse(cartItems)
    this.mycart.splice(i,1)
    this.itemsCollection.splice(i,1)

    localStorage.setItem('cartItems',JSON.stringify(this.mycart))
    const amount =this.mycart.length
    this.store.dispatch(cartCount({itemsNumber:{count:amount} }));
    
      // this.transactionSetUp()
      this.getTotal()
      this.initConfig();

      console.log(this.itemsCollection);
      

    // const cartItems1= localStorage.getItem('cartItems')
    // this.mycart= JSON.parse(cartItems1)
  }

  resetCart(){
    const cartItems= localStorage.getItem('cartItems')
    this.mycart= JSON.parse(cartItems)
    this.mycart=[]
    localStorage.setItem('cartItems',JSON.stringify(this.mycart))
      this.itemsCollection=[]
      this.total=0
      this.getTotal()
      this.initConfig()
  }

  showDetail(i){
   this.onDisplay= this.mycart[i]
  }

  send(data){
    this.http.post('http://localhost:3000/shop/sendrecipt',data).subscribe(
      (success)=>{
        console.log(success);
        
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }


  public payPalConfig?: IPayPalConfig;

    private initConfig(): void {
      this.payPalConfig = {
      currency: 'AUD',
      clientId: 'AXuPtpHxHC5om42ZSfcurv2t5MoUcL0T1KFlntX9qcMrjN_LVs2gRkfmRe6_9CH3AEz4v7Ma_B8ltSd6',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
          { 
            amount: {
              currency_code: "AUD",
              value:this.total,
              breakdown: {
                item_total: {
                  currency_code: "AUD",
                  value: this.total
                }
              }
            },
            items: 
            this.itemsCollection
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout:'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
           this.store.dispatch(getRecipt(details));
            this.resetCart()
           console.log('sold');
           firestore().collection('recipts').doc('data').set(details);

           //
         const   mailOptions = {
            from: 'thomas.azaria7@gmail.com', // sender address
            to: 'yungblackhumbl3@gmail.com',  // list of receivers
            subject: 'Hobby Jocky', // Subject line
            data:details,
            html:
             `
              <h2>Hello</h2>
        
            `
          };

           this.send(mailOptions)
           

        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        // this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
    }
  }


