import { Component, OnInit } from '@angular/core';
import {sendProduct, getRecipt, cartCount,mobileNav} from 'src/app/NGRX_STORE/actions/checkout__actions.actions'
import * as AppReducers from 'src/app/NGRX_STORE/Store/AppReducers.reducer'
import {select, Store} from '@ngrx/store';
import { firestore,auth } from "firebase";
import { Router } from '@angular/router';
import {item1} from './B-Body/Store_shop/itemsFiles/item1';
import {item2} from './B-Body/Store_shop/itemsFiles/item2';
import {item3} from './B-Body/Store_shop/itemsFiles/item3';
import {item4} from './B-Body/Store_shop/itemsFiles/item4';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myShop';
  data

  constructor(private store: Store<AppReducers.State>,private router:Router){

  //recipt data
    firestore().collection('recipts').doc('data').get()
    .then( success=>{
       this.data = success.data()   // gets items and assigns to variable
      //  console.log(this.data);
     this.store.dispatch(getRecipt(this.data));
 
       
    }).catch(err=>console.log('err')) 
    
  }

  


  ngOnInit(){

    console.log(item2);
    

    setTimeout(() => {
      // console.log(auth().currentUser);
    }, 5000);
    
    const name ='hello'
    this.store.dispatch(sendProduct( {Products:{products:[item1,item2,item3,item4]}} ));
    this.store.dispatch(mobileNav({state: false}))





    const cartItems= localStorage.getItem('cartItems')
      const mycart= JSON.parse(cartItems)
      let amount =mycart.length
      if(!amount){
        amount=0
      }

      this.store.dispatch(cartCount({itemsNumber:{count:amount} }));
  

  }



  CarsitemsModel=[
    //
    {
      title:'car 1s',
      description:'',
      price:"20",
      id:'xx1223',
      quantity:1,
      img:'https://ae01.alicdn.com/kf/HTB1jYz1XmSD3KVjSZFKq6z10VXaq/RC-Car-feiyue-fy-03H-RTR-2-4g-4WD-4-channel-4x4-70km-h-RC-car.jpg',
      otherImgs:[
        '',
        '',
        '',
        '',
      ],
      category:[''],
      keyWords:[''],
      shipping:{
        carrier:'',
        estimate:'',
        shipafter:'one day',
      },

      waranty:{
        refund:'30 days money back ',

      }


      
    },
    //
    {
      title:'Car TWO',
      description:'',
      price:"5",
      id:'yz563',
      quantity:1,
      img:'https://ae01.alicdn.com/kf/H4bb820c7f39c42828f9aa77fe8278b7bX/RC-Car-feiyue-fy-03H-RTR-2-4g-4WD-4-channel-4x4-70km-h-RC-car.jpg_640x640.jpg',
      otherImgs:[
        '',
        '',
        '',
        '',
      ],
      category:[''],
      keyWords:[''],
      shipping:{
        carrier:'',
        estimate:'',
        shipafter:'one day',
      },

      waranty:{
        refund:'30 days money back ',

      }


      
    },

      //
      {
        title:'ULTIMATE RACER PRO 3.0',
        description:'',
        price:"10",
        id:'jjyzs5',
        quantity:1,
        img:'https://ae01.alicdn.com/kf/HTB1txIXbHZnBKNjSZFrq6yRLFXaO/Feiyue-FY03-Eagle-3-1-12-2-4G-4WD-Desert-Off-Road-RC-Car-Best-Gift.jpg',
        otherImgs:[
          '',
          '',
          '',
          '',
        ],
        category:[''],
        keyWords:[''],
        shipping:{
          carrier:'',
          estimate:'',
          shipafter:'one day',
        },
  
        waranty:{
          refund:'30 days money back ',
  
        }
  
  
        
      },

        //
    {
      title:'beast mode',
      description:'',
      price:"20",
      id:'X0101',
      quantity:1,
      img:'https://ae01.alicdn.com/kf/H41dc58b5f2d84f4fb5a6b404e42539ee3/Remote-Control-Car-RC-Cars-Electric-Toys-Car-Radio-Controlled-Car-Drift-Machine-2-4G-Highspeed.jpg',
      otherImgs:[
        '',
        '',
        '',
        '',
      ],
      category:[''],
      keyWords:[''],
      shipping:{
        carrier:'',
        estimate:'',
        shipafter:'one day',
      },

      waranty:{
        refund:'30 days money back ',

      }


      
    },
      //
      {
        title:'',
        description:'',
        price:"1",
        id:'Tz456',
        quantity:1,
        img:'https://ae01.alicdn.com/kf/HTB1h6gQKkCWBuNjy0Faq6xUlXXaB/RC-Cars-Radio-Control-2-4G-4CH-rock-car-Toys-Buggy-Off-Road-Trucks-Toys-For.jpg',
        otherImgs:[
          '',
          '',
          '',
          '',
        ],
        category:[''],
        keyWords:[''],
        shipping:{
          carrier:'',
          estimate:'',
          shipafter:'one day',
        },
  
        waranty:{
          refund:'30 days money back ',
  
        }
  
  
        
      },
        //
    {
      title:'',
      description:'',
      price:"95",
      id:'hll005',
      quantity:1,
      img:'https://ae01.alicdn.com/kf/HTB1Inh.e_dYBeNkSmLyq6xfnVXah/RC-Cars-Radio-Control-2-4G-4CH-rock-car-Toys-Buggy-Off-Road-Trucks-Toys-For.jpg_640x640.jpg',
      otherImgs:[
        '',
        '',
        '',
        '',
      ],
      category:[''],
      keyWords:[''],
      shipping:{
        carrier:'',
        estimate:'',
        shipafter:'one day',
      },

      waranty:{
        refund:'30 days money back ',

      }


      
    },
      //
      {
        title:'',
        description:'',
        price:"9",
        id:'ala456',
        quantity:1,
        img:'https://ae01.alicdn.com/kf/H33310d3dd9ee4ec495e95a8f01543bfbS/1-12-4WD-RC-Car-Updated-Version-2-4G-Radio-Control-RC-Car-Toys-remote-control.jpg_640x640q70.jpg_.webp',
        otherImgs:[
          '',
          '',
          '',
          '',
        ],
        category:[''],
        keyWords:[''],
        shipping:{
          carrier:'',
          estimate:'',
          shipafter:'one day',
        },
  
        waranty:{
          refund:'30 days money back ',
  
        }
  
  
        
      },
        //
    {
      title:'',
      description:'',
      price:"20",
      id:'aml654',
      quantity:1,
      img:'https://ae01.alicdn.com/kf/Hbad9f3fd847341e9952df3b798ab361dH/2019-New-Arrival-1-16-WPL-C14-Scale-2-4G-4CH-Mini-Off-road-RC-Semi.jpg',
      otherImgs:[
        '',
        '',
        '',
        '',
      ],
      category:[''],
      keyWords:[''],
      shipping:{
        carrier:'',
        estimate:'',
        shipafter:'one day',
      },

      waranty:{
        refund:'30 days money back ',

      }


      
    },
     //

  
  ]


/// 


////


  
}
