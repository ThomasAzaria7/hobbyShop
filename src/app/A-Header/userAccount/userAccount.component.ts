import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { auth } from 'firebase';
import { Store } from '@ngrx/store';
import {loggedIn} from 'src/app/NGRX_STORE/actions/checkout__actions.actions'
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'


@Component({
  selector: 'app-userAccount',
  templateUrl: './userAccount.component.html',
  styleUrls: ['./userAccount.component.scss']
})
export class UserAccountComponent implements OnInit {

  register
  displayPhoto

  constructor(private route:ActivatedRoute, private router:Router,private store: Store<AppReducers.State>) { }

  ngOnInit() {

setTimeout(() => {
  this.displayPhoto= auth().currentUser.photoURL
  }, 1000);
  //  console.log(this.route.snapshot.firstChild.routeConfig.path,'url');

  //  if(this.route.snapshot.firstChild.routeConfig.path == 'register'){
  //    this.register=this.route.snapshot.firstChild.routeConfig.path
  //  }
    
  }

  logOut(){
    auth().signOut()
    this.router.navigate([''])
    this.store.dispatch(loggedIn({Authenicated:{auth:false}}))


  }

}
