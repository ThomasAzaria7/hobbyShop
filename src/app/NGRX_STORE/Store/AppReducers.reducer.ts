import {sendProduct,getRecipt, cartCount,loggedIn, mobileNav,} from "../actions/checkout__actions.actions"
// import { State } from '@ngrx/store'
import { Action, createReducer, on, } from '@ngrx/store';
import { from } from 'rxjs';
import { initializeApp } from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA9wGh9hSvzq4XDSnGVOPi1oR7KNKHtBuY",
  authDomain: "hobbyshop-c2c8c.firebaseapp.com",
  databaseURL: "https://hobbyshop-c2c8c.firebaseio.com",
  projectId: "hobbyshop-c2c8c",
  storageBucket: "hobbyshop-c2c8c.appspot.com",
  messagingSenderId: "791562596626",
  appId: "1:791562596626:web:786f42c61378040aeac3cb"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export interface State{
    recipt:any;
    products:any;
    cartTotal:number;
    loggedIn:any;
    navState:boolean;
}


export const initialState:State={
    recipt:[],
    products:[],
    cartTotal:0,
    loggedIn:null,
    navState:false,
}


const CheckoutReducer = createReducer(
  initialState,
  on(getRecipt, (state,payload) => ({ 
      ...state, 
      recipt:payload
     })),
  on(sendProduct, (state,  payload ) => ({
     ...state.products,
  
    ...state.products=payload.Products
  })),

  on(cartCount, (state,payload) => ({
    ...state.cartTotal= payload.itemsNumber.count,
    ...state,


    })),
    on(loggedIn,(state,payload)=>({
      ...state,
        ...state.loggedIn = payload.Authenicated.auth
    })),

  on(mobileNav,(state,payload)=>({
    ...state,
    ...state.navState= payload.state
  })),
  // on(CategoryNum,(state,payload)=>({
  //   ...state,
  //   ...state.itemCategoryNum= payload.itemCategoryNum
  // }))
//   on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
//   on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);

export function reducer(state: State | undefined, action: Action) {
  return CheckoutReducer(state, action);
}
