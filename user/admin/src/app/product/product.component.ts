import { Component, OnInit ,Inject} from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as $ from 'jquery';
import { Http } from '@angular/http'

const URL = 'products/upload';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

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
  


  /////////////////////////////////////////// INSERT PRODUCT ////////////////////////////////////////////////////////

  funproductinsert(){
    var obj={catid:this.dropcatid,subcatid:this.dropscatid,subsubcat:this.dropscatidd,brand:this.dropbrandid,product:this.proname,quanity:this.proquantity,price:this.proprice,procolor:this.procolor,prodesc:this.prodesc}
    this.obj.post("products/ins_product",obj).subscribe(obj=>{
     //alert(obj._body)
     var imgins=<HTMLFormElement>document.getElementById("fm1")
     imgins.submit()
     
    })
   
   
  }           
  ////////////////////////////////////////////////////////////////////////////////////////////////
     ////////////////////////////// SUB CAT UPDATE ///////////////////////////////////////////////////
     funproupdate(ob){
      //this.gloobj={subcat:ob,catid:cid}
       this.tmp=ob._id;
       this.product=ob.subcat;
       this.droppro=ob.catid;
      
       
       
       alert(this.tmp)
      

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
  ngOnInit() {
    
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
   

    // this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
    //   console.log("ImageUpload:uploaded:", item, status, response);
    // };
    this.obj.get("catgett/getcat").subscribe( pi2=>{
     
      this.categorydata=JSON.parse(pi2._body)
    })
   }

  
  

}
