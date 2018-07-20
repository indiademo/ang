import { Component, OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(@Inject(Http) public obj) { }
  brandname="";
  branddata;
  tmp=0;
  t1;
  act;

  ////////////////////////////////////////////// INSERT BRAND /////////////////////////////////////////////////////

  funbrand_insert(){
    var objbn={brand:this.brandname}
    this.obj.post("brandser/ins_brand",objbn).subscribe(this.caback1)
    this.fungetbrand2()
    }
    caback1=(obj)=>{
      
      alert(obj._body)
     // this.fun2()
    }
  /////////////////////////////////////////////  END  /////////////////////////////////////////////////
   
  ////////////////////////////////////////////// GET BRAND //////////////////////////////////////////////

  fungetbrand2(){
      
    this.obj.get("brandser/getbrand").subscribe(this.cback2)

  }

  cback2=(obj)=>{
    this.branddata=JSON.parse(obj._body)
    console.log(this.branddata)
  }

  /////////////////////////////////////////////// END ////////////////////////////////////////////////
 
  /////////////////////////////////////////// ACTIVE ///////////////////////////////////////////
   funactive(bb1,act){
    bb1.active=0;
    var old={_id:bb1._id,active:act}
    // alert(act)
    // act=this.tmpv;
    
    this.obj.post("brandser/active",old).subscribe(this.cbac2)
  
  }
  funinactive(bb2,act){
    bb2.active=1;
    var old={_id:bb2._id,active:act}
    // alert(act)
    // act=this.tmpv;
    
    this.obj.post("brandser/inactive",old).subscribe(this.cbac3)
    
  }
  cbac2=(obj)=>{
      
  // this.subsubdata=JSON.parse(obj._body)
    alert(obj._body)
  }
  cbac3=(obj)=>{
      
    // this.subsubdata=JSON.parse(obj._body)
      alert(obj._body)
    }
  //////////////////////////////////////////////END////////////////////////////////////////
  
  ////////////////////////////////////////////////////////////////////////////////////////////////
  funbrandupdate(ob){
    this.tmp=ob._id;
    this.t1=ob.brand;
    this.act=ob.active;
    
  }

  funbrandsave(){
    
    var udata={_id:this.tmp,brand:this.t1,active:this.act}
    var arr=[udata]
    this.obj.post("brandser/save_brand",arr).subscribe(this.caback11)
          
    this.tmp=0;
    
  }
  caback11=(obj)=>{
    alert(obj._body)
    this.fungetbrand2()
    
  }

  funccancel(){
    this.tmp=0;
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////
  
  ngOnInit() {
    this.fungetbrand2()
    
  }

}
