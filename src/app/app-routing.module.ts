import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './A-Header/checkout/checkout.component';
import { HomeComponent } from './B-Body/home/home.component';
import { ProductPreviewComponent } from './B-Body/productPreview/productPreview.component';
import { Store_shopComponent } from './B-Body/Store_shop/Store_shop.component';
import { Item_category1Component } from './B-Body/Store_shop/item_category1/item_category1.component';
import { About_usComponent } from './B-Body/about_us/about_us.component';
import { UserAccountComponent } from './A-Header/userAccount/userAccount.component';
import { Purchase_historyComponent } from './A-Header/userAccount/purchase_history/purchase_history.component';
import { RegisterUserComponent } from './A-Header/userAccount/RegisterUser/RegisterUser.component';
import { SignInComponent } from './A-Header/userAccount/signIn/signIn.component';
import { HelpCenterComponent } from './C-Footer/helpCenter/helpCenter.component';
import { Shipping_handlingComponent } from './C-Footer/helpCenter/shipping_handling/shipping_handling.component';
import { Item_category2Component } from './B-Body/Store_shop/item_category2/item_category2.component';
import { Item_category3Component } from './B-Body/Store_shop/item_category3/item_category3.component';
import { Item_category4Component } from './B-Body/Store_shop/item_category4/item_category4.component';

const routes: Routes = [

  {path:'',component:HomeComponent},

  {path:'checkout', component:CheckoutComponent},
  {path:'help', component:HelpCenterComponent,children:[
    {path:'shipping&handling',component:Shipping_handlingComponent}
  ]},
  {path:'myAccount', component:UserAccountComponent, children:[
    {path:'purchase_history', component:Purchase_historyComponent},
    {path:'register', component:RegisterUserComponent},
    {path:'signIn', component:SignInComponent},
  ]},
  {path:'whoWeAre', component:About_usComponent},
  {path:'store', component:Store_shopComponent,children:[
    {path:'RC_Cars', component:Item_category1Component},
    {path:'drones', component:Item_category2Component},
    {path:'Water_sports', component:Item_category3Component},
    {path:'category4', component:Item_category4Component},
    {path:':itemCode', component:ProductPreviewComponent}

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
