import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import {mobileNav} from 'src/app/NGRX_STORE/actions/checkout__actions.actions'


@Component({
  selector: 'app-Mobile-nav',
  templateUrl: './Mobile-nav.component.html',
  styleUrls: ['./Mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  on
  cartTotal

  mobileNavState=false


  constructor(private store: Store<{ checkout: any }>) {   }

  ngOnInit() {
    this.store. pipe(select('checkout')).subscribe(
      val =>{
        // console.log(val);
        this.on = val.navState;
        this.cartTotal=val.cartTotal;
      }
    )
  }

  shownNav(){

    this.on == false? this.on = true: this.on = false;
    this.store.dispatch(mobileNav({state: this.on}))
  }

}
