import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

var rout=[{
  path: '', component: ProductComponent 
 
},{
  path:'product',component:ProductComponent
}]

var routr=RouterModule.forRoot(rout) 

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,HttpModule,routr,RouterModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
