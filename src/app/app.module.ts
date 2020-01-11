import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './A-Header/navigation/navigation.component';
import { FooterNavComponent } from './C-Footer/footer-nav/footer-nav.component';
import { HomeComponent } from './B-Body/home/home.component';
import { CheckoutComponent } from './A-Header/checkout/checkout.component';
import { ProductPreviewComponent } from './B-Body/productPreview/productPreview.component';
import { CustomCarouselComponent } from './B-Body/home/CustomCarousel/CustomCarousel.component';
import { Store_shopComponent } from './B-Body/Store_shop/Store_shop.component';
import { Item_category1Component } from './B-Body/Store_shop/item_category1/item_category1.component';
import { About_usComponent } from './B-Body/about_us/about_us.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { UserAccountComponent } from './A-Header/userAccount/userAccount.component';
import { Purchase_historyComponent } from './A-Header/userAccount/purchase_history/purchase_history.component';
import { StoreModule } from '@ngrx/store';
import{HttpClientModule} from '@angular/common/http'

import {reducer} from '../app/NGRX_STORE/Store/AppReducers.reducer'
import { firestore, initializeApp} from 'firebase';
import { RegisterUserComponent } from './A-Header/userAccount/RegisterUser/RegisterUser.component';
import { SignInComponent } from './A-Header/userAccount/signIn/signIn.component';

import {ReactiveFormsModule} from '@angular/forms'
import { HelpCenterComponent } from './C-Footer/helpCenter/helpCenter.component';
import { Shipping_handlingComponent } from './C-Footer/helpCenter/shipping_handling/shipping_handling.component';
import { Item_category2Component } from './B-Body/Store_shop/item_category2/item_category2.component';
import { Item_category3Component } from './B-Body/Store_shop/item_category3/item_category3.component';
import { Item_category4Component } from './B-Body/Store_shop/item_category4/item_category4.component';
import { MobileNavComponent } from './B-Body/Mobile-nav/Mobile-nav.component';






@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterNavComponent,
    HomeComponent,
    About_usComponent,
    CheckoutComponent,
    ProductPreviewComponent,
    CustomCarouselComponent,
    Store_shopComponent,
    Item_category1Component,
    UserAccountComponent,
    Purchase_historyComponent,
    RegisterUserComponent,
    SignInComponent,
    HelpCenterComponent,
    Shipping_handlingComponent,
    Item_category2Component,
    Item_category3Component,
    Item_category4Component,
    MobileNavComponent

    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot( {checkout:reducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
