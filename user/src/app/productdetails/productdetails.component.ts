import { Component, OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http'
import { ActivatedRoute }  from '@angular/router'
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  proid;prodetails;qtyy=1;rate;  rat=[];half=false;
  constructor (@Inject (ActivatedRoute) public ar, @Inject(Http) private obj) { }

  funaddcart(prodid){
    //alert(prodid)
    var proarr=[];
    var probj={id:prodid,qty:this.qtyy}
    if(localStorage.getItem("proinfo")!=null){
    var arr=[]
    var localdata=JSON.parse(localStorage.getItem("proinfo"))
    //alert(localdata[0].qty)
    arr.push(localdata)
    //localStorage.JsonData.id = prodid;
   
    //if(localdata.id)
    //arr.splice(0, prodid);
    arr.push({id:prodid,qty:this.qtyy++})
    alert(JSON.stringify(arr))
    localStorage.setItem("proinfo",JSON.stringify(arr))
    }
    else{
    localStorage.setItem("proinfo",JSON.stringify(probj))
    alert(localStorage.getItem("proinfo"))
    }
  }

  

  ///////////////////////
  //------------rating--------

  
  // rating(){
    
  //   alert(this.rate)
  //   for(var i=1;i<=this.rate;i++){
  //     //alert(this.rate)
  //     //alert("hi")
  //     this.rat.push(i)
  //     //alert(this.rat)
  //   }
  //   i--;
  //   //alert(this.rate)
  //   if(i<(this.rate)){
  //     this.half=true;
  //   }
  // }

  /////////////////////
  ngOnInit() {
   
    this.ar.params.subscribe(x=>{
      
      this.proid=parseInt(x["id"])
      var obbj={id:this.proid}
      //alert(this.proid)
      this.obj.post("/productser/prodetails",obbj).subscribe(x=>{
        this.prodetails=JSON.parse(x._body)
         this.rate=this.prodetails[0].rating;
         for(var i=1;i<=this.rate;i++){
          //alert(this.rate)
          //alert("hi")
          this.rat.push(i)
          //alert(this.rat)
        }
        i--;
        //alert(this.rate)
        if(i<(this.rate)){
          this.half=true;
        }
        
      })
    })
  }

}
