import { Component, OnInit } from '@angular/core';
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'
import {select, Store} from '@ngrx/store';
import { auth } from 'firebase';
import {mobileNav} from 'src/app/NGRX_STORE/actions/checkout__actions.actions'



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  mycart
  itemNumber
  authenticated=true;

  mobileNavState=false


  constructor(private store: Store<{ checkout: any }>) {   }




  ngOnInit() {

    this.store. pipe(select('checkout')).subscribe(
      val =>{
        // console.log(val);
        this.mobileNavState=val.navState
        this.itemNumber= val.cartTotal
        
        // this.authenticated=val.loggedIn.auth
        setTimeout(() => {
          
          // console.log(auth().currentUser);
          if(auth().currentUser){
            this.authenticated=val.loggedIn
            this.authenticated=false;
            
      
          }
        }, 1000);
      }
    )
    
    
    
  

    const cartItems= localStorage.getItem('cartItems')

    this.mycart= JSON.parse(cartItems)
    this.itemNumber = this.mycart.length
  }


  shownNav(){
    
    console.log(this.mobileNavState);
    

    this.mobileNavState == false? this.mobileNavState = true: this.mobileNavState = false;
    this.store.dispatch(mobileNav({state: this.mobileNavState}))
  }

}
