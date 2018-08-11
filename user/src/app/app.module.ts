import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LandingComponent } from './landing/landing.component'

var rout=[{
  path: '', component: LandingComponent 
 
},{
  path:'landing',component:LandingComponent
},{
  path:'product',component:ProductComponent
},{
  path:'productdetails',component:ProductdetailsComponent
}]

var routr=RouterModule.forRoot(rout) 



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ProductdetailsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,HttpModule,routr,RouterModule,FormsModule,BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
