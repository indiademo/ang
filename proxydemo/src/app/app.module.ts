import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { SubcatComponent } from './subcat/subcat.component';
import { SubsubcatComponent } from './subsubcat/subsubcat.component';
import { ProductComponent } from './product/product.component';
import { BrandComponent } from './brand/brand.component';


var rout=[{
   path: '', component: CatComponent 
},{
  path: 'cat', component: CatComponent 
},{
  path: 'subcat', component: SubcatComponent 
},{
  path: 'subsubcat', component: SubsubcatComponent 
},{
  path: 'product', component: ProductComponent 
},{
  path: 'brand', component: BrandComponent 
}]

var router= RouterModule.forRoot(rout)

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    SubcatComponent,
    SubsubcatComponent,
    ProductComponent,
    BrandComponent,
    FileSelectDirective
  
  ],
  imports: [
    BrowserModule,RouterModule,router,HttpModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
