import { Component, OnInit ,Inject} from '@angular/core';
// import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as $ from 'jquery';
import { Http } from '@angular/http'

const URL = 'products/upload';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(@Inject(Http) public obj) { }
  subcatdata;
  categorydata;
  dropcatid;
  dropupdatecatid;
  subcatdat;
  dropscatid;
  subcatdataa;
  dropscatidd;
  branddata;
  proname="";
  dropbrandid;
  proquantity="";
  proimage="";
  procolor="";
  prodesc="";
  proprice="";
  tmp=0;
  img="";
  prodata;
  droppro;
  product;
  show=1;
  pno=1;
  
  

  /////////////////////////////////////////// INSERT PRODUCT ////////////////////////////////////////////////////////

  funproductinsert(){
    var obj={catid:this.dropcatid,subcatid:this.dropscatid,subsubcatid:this.dropscatidd,brandid:this.dropbrandid,product:this.proname,quanity:this.proquantity,price:this.proprice,procolor:this.procolor,prodesc:this.prodesc}
    this.obj.post("products/ins_product",obj).subscribe(obj=>{
     //alert(obj._body)
     var imgins=<HTMLFormElement>document.getElementById("fm1")
     imgins.submit()
     
    })
   
   
  }           
  ////////////////////////////////////////////////////////////////////////////////////////////////
     ////////////////////////////// SUB CAT UPDATE ///////////////////////////////////////////////////
     duspimg;dropscatidsave; dropsavecatid;upcatid;dupscatid;dropscatids;dropbrandids;pro="";procolors="";quantit="";pric="";desc="";dropsscatidd;dupactive;
     funproupdate(ob){
      //this.gloobj={subcat:ob,catid:cid}
      this.tmp=ob._id;
      //this.dupig=ob.pimg;
      this.dropsavecatid=ob.catid;
      this.dropscatidsave=ob.subcatid;
      this.dropscatids=ob.subsubcatid;
      this.dropbrandids=ob.brandid;
      this.pro=ob.product;
      this.procolors=ob.productcolor;
      this.quantit=ob.quantity;
      this.pric=ob.price;
      this.desc=ob.productdescription;
      this.dupactive=ob.active;
      this.duspimg=ob.pimg;
      alert(this.tmp)
      alert(this.duspimg)
      //alert(this.dupprice)
    }
    funprosave(){
      var udata={_id:this.tmp,catid:this.dropsavecatid,subcatid:this.dropscatidsave,
        subsubcatid:this.dropscatids,brandid:this.dropbrandids,product:this.pro,quantity:this.quantit,price:this.pric,productcolor:this.procolors,productdescription:this.desc,active:this.dupactive,pimg:this.duspimg}

      //var udata={_id:this.tmp,catname:this.dupdesc,active:this.dupdesc}
      var arr=[udata]
      this.obj.post("products/save_product",arr).subscribe(this.caback11)
            
      this.tmp=0;
      
    }
    caback11=(obj)=>{
      this.fungetpro();
      //alert(obj._body)
      
      
    }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  funccancel(){
    this.tmp=0;
  }


  ////////////////////////////////////////////////////// PRODUCT POPUP /////////////////////////////////////////////////////////
  funaadd(){
    this.show=0
   
  }
  funcan(){
    this.show=1
  }
   
  //////////////////////////////////////////////////////////// END  //////////////////////////////////////////////////////////////
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////  

  /////////////////////////////////////////// GET SUB CATEGORY /////////////////////////////////////////////////  
  
  funsubcatget(){
   
    var dcat={catid:this.dropcatid}
   
    this.obj.post("subcats/get_scat",dcat).subscribe(this.cback2)
    
  }
  cback2=(obj)=>{
      
    this.subcatdata=JSON.parse(obj._body)
    //alert(obj._body)
  }
  ////////////////////////////
  funsubcatgetsave(){
   
    var dcat={catid:this.dropsavecatid}
   
    this.obj.post("subcats/get_scat",dcat).subscribe(this.c22)
    
  }
  c22=(obj)=>{
      
    this.subcatdata=JSON.parse(obj._body)
    //alert(obj._body)
  }
  ////////////////////////////
  ///////////////////////////////////////////   END     /////////////////////////////////////////////////

  /////////////////////////////////////////// GET SUB CATEGORY FOR UPDATE AND SAVE/////////////////////////////////////////////////  
  
  funsubcatgetid(){
   
    var dcatt={catid:this.dropupdatecatid}
   
    this.obj.post("subcats/get_scat",dcatt).subscribe(this.cb2)
    
  }
  cb2=(obj)=>{
      
    this.subcatdat=JSON.parse(obj._body)
    //alert(obj._body)
  }
  ///////////////////////////////////////////   END     /////////////////////////////////////////////////

  /////////////////////////////////////////// GET SUB CATEGORY /////////////////////////////////////////////////  
  
  funsubsubcatget(){
   
    var dsscat={scatid:this.dropscatid}
   //alert(this.dropscatid)
    this.obj.post("products/get_sscat",dsscat).subscribe(this.cbac2)
    
  }
  cbac2=(obj)=>{
      
    this.subcatdataa=JSON.parse(obj._body)
    //alert(this.subcatdataa)
  }
  //////////////////////////////
  funsubsubcatgetsave(){
   
    var dsscat={scatid:this.dropscatidsave}
   //alert(this.dropscatid)
    this.obj.post("products/get_sscat",dsscat).subscribe(this.cba2)
    
  }
  cba2=(obj)=>{
      
    this.subcatdataa=JSON.parse(obj._body)
    alert(obj._body)
  }
  //////////////////////////////
  ///////////////////////////////////////////   END ////////////////////////////////////////////////////////

  /////////////////////////////////////////// GET BRAND  /////////////////////////////////////////////////  
  
  funsbrandget(){
   
    this.obj.get("brandser/getbrand").subscribe(this.c2)
    
  }
  c2=(obj)=>{
      
    this.branddata=JSON.parse(obj._body)
    //alert(this.branddata)
  }
  ///////////////////////////////////////////   END  /////////////////////////////////////////////////////////
///////////////////////////////////////////  ////////////////////////////////////////////////////
fungetpro(){
this.obj.get("products/getproduct").subscribe(
  pr=>{
    this.prodata=JSON.parse(pr._body)
    //alert(pr._body)
    
  })

}
              
  ///////////////////////////////////////////   END  ////////////////////////////////////////////////////

   /////////////////////////////////////////// ACTIVE ///////////////////////////////////////////
   funactive(bb1,act){
    bb1.active=0;
    var old={_id:bb1._id,active:act}
    // alert(act)
    // act=this.tmpv;
    
    this.obj.post("products/active",old).subscribe(this.cbac2)
  
  }
  funinactive(bb2,act){
    bb2.active=1;
    var old={_id:bb2._id,active:act}
    // alert(act)
    // act=this.tmpv;
    
    this.obj.post("products/inactive",old).subscribe(this.cbbac2)
    
  }
  cbbac2=(obj)=>{
      
  // this.subsubdata=JSON.parse(obj._body)
    //alert(obj._body)
  }
  fundelpro(un){
    var ob={_id:un}
    this.obj.post("products/delpro",ob).subscribe(cb22=>{
      alert(cb22._body)
      this.fungetpro();
    })
    
    }
   

//////////////////////////////////////////////END////////////////////////////////////////
  ngOnInit() {
    //alert(this.pno)
    this.fungetpro();
    this.funsbrandget()

    var arr=document.URL.split("?")
   
    if(arr.length>1){
     // alert("hiii")
      var iname=arr[1].split("=")
      if(iname[0]=="res"){
         this.img=iname[1]
        // alert("hiii")
        var ob={image:this.img}
        this.obj.post("products/addimage",ob).subscribe(
          pi=>{
            alert(pi._body)
            this.fungetpro();
            
          })
      }
    } 

    this.obj.get("catser/getcat").subscribe( pi2=>{
     
      this.categorydata=JSON.parse(pi2._body)
    })
   }

  
  

}
