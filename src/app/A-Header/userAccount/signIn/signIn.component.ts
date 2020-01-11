import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import {loggedIn} from 'src/app/NGRX_STORE/actions/checkout__actions.actions'
import { from } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'


@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss']
})
export class SignInComponent implements OnInit {

  signinFrom = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('',),
  })
  constructor(private router:Router,private store: Store<AppReducers.State>) { }

  ngOnInit() {
  }

  SignIn(){
    auth().signInWithEmailAndPassword(this.signinFrom.value.email,this.signinFrom.value.password).then(
      success=>{
        console.log(success);
        this.router.navigate([''])
        this.store.dispatch(loggedIn({Authenicated:{auth:true}}))
      }
      
    ).catch(
      err=>console.log(err)
      
    )
  }

}
