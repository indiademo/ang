import { Component,Inject,OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from "@angular/animations"

import { Http } from '@angular/http'
/////////////////////////////////////////  ANIMATION //////////////////////////////////////////////////////////
var myanimations=[
  
  trigger("anm3",[
    state("inv",style({
      top:"-470px"
    })),
    state("vis",style({top:"744px"})),

  transition("*=>*",animate("200ms"))
  ])
]
/////////////////////////////////////////////// END /////////////////////////////////////////////////////////////
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[myanimations]
})

export class AppComponent implements OnInit {

  constructor(@Inject(Http) public obj) { }
  catdata;
  subcatdata;
  sscat;
  tmp3;
  udata;
  userid="";
  password="";
  logvalue=0;
  reg=0;pro;
  rusername="";rmno="";remail="";repassword="";regdata;usermail;
  ////////////////////////////////////////////////  REG & LOGIN SHOW AND HIDE /////////////////////////////////////////////////////////////

  funregval(){
    this.reg=1;
  }
  funregvalhide(){
    this.reg=0;
  }
  //////////////////////////////////////////////// END /////////////////////////////////////////////////////////////

  funlogin(){
   
     var userlogdetaila={email:this.userid,password:this.password}
     this.obj.post("userser/login",userlogdetaila).subscribe(cbudata=>{
        this.udata=JSON.parse(cbudata._body)
        localStorage.setItem("usertoken",this.udata.tk)
        alert(localStorage.getItem("usertoken"))
        this.tmp3="inv"
        localStorage.setItem("loginvl","1")
         this.logvalue=1;
      // if(this.udata.un==1){
      //   //alert("Login sucessfully")
      //   this.fungetuser()
      //   localStorage.setItem("loginvl","1")
      //   this.tmp3="inv"
      //   this.logvalue=1;
      // }else{
      //   alert("Invalid login and password")
      // }
    })
  }

  //////////////////////////////////////////////// GET USER PROFILE /////////////////////////////////////////////////////////////
  fungetuser(){
    var userm={email:this.userid}
    this.obj.post("userser/userprf",userm).subscribe(reg=>{
       this.regdata=JSON.parse(reg._body)
       //localStorage.setItem("userem", JSON.stringify(this.regdata[0].email));
       //localStorage.setItem("user",this.userid)
      //alert(localStorage.getItem("user"))
     
    })
  }


//////////////////////////////////////////////// END /////////////////////////////////////////////////////////////
  funses(){
   
    this.obj.get("/funs").subscribe(reg=>{
      // this.regdata=JSON.parse(reg._body)
      alert(reg._body)
     
    })
  }
////////////////////
// checkloguserid(){
//   if(localStorage.getItem("user")){
//     this.logvalue=1;
//     alert(this.logvalue)
//   }else{
//    this.logvalue=0;
//    alert(this.logvalue)
//   }
// }

/////////////////////
//////////////////////////////////////////////// LOGOUT /////////////////////////////////////////////////////////////
 funlreg(){
  var regobj={username:this.rusername,mobile:this.rmno,email:this.remail,password:this.repassword}
  this.obj.post("userser/userreg",regobj).subscribe(reg=>{
    // this.regdata=JSON.parse(reg._body)
    alert(reg._body)
    this.reg=0;
  })
}
//////////////////////////////////////////////// END /////////////////////////////////////////////////////////////


  //////////////////////////////////////////////// LOGOUT /////////////////////////////////////////////////////////////
  funlogout(){
      localStorage.removeItem("loginvl");
      this.logvalue=0;
      
    }
  //////////////////////////////////////////////// END /////////////////////////////////////////////////////////////

  //////////////////////////////////////////////// CHECKING LOGIN OR NOT /////////////////////////////////////////////////////////////

 checklog(){
   if(localStorage.getItem("loginvl")){
     this.logvalue=1;
   }else{
    this.logvalue=0;
   }
 }

 ////////////////////////////////////////////////SHOW & CLOSE LOGIN EVEND WITH ANIMATION  /////////////////////////////////////////////////////////////

  closelogin(event) {
    this.tmp3="inv"
  
  }

  loginshide(){
    this.tmp3="vis"
  }
  //////////////////////////////////////////////// END /////////////////////////////////////////////////////////////


  //////////////////////////////////////////////// GET CAT /////////////////////////////////////////////////////////////

   fungetcat(){
    
    this.obj.get("catser/getcat").subscribe(this.cback2)
  }

  cback2=(obj)=>{
    //alert("hii")
    this.catdata=JSON.parse(obj._body)
    //console.log(this.catdata)
    //alert(this.catdata)
  }  
  //////////////////////////////////////////////// END /////////////////////////////////////////////////////////////


  //////////////////////////////////////////////// GET SUB CAT /////////////////////////////////////////////////////////////

   fungetsubcat(){
    //alert("hii")
    this.obj.get("subcatser/get_scat").subscribe(this.cback3)
  }

  cback3=(obj)=>{
    //alert("hii")
    this.subcatdata=JSON.parse(obj._body)
    //console.log(this.subcatdata)
    
  }
  //////////////////////////////////////////////// END /////////////////////////////////////////////////////////////


  ///////////////////////////////// GET SUB SUB CATEGORY  /////////////////////////////////////////////////
  
  funsubsubcat(){
     
    this.obj.get("subsubcatser/get_sscat").subscribe(this.cbackk2)
  }

  cbackk2=(obj)=>{
    
    this.sscat=JSON.parse(obj._body)
    //alert(obj._body)
    
  }
  //////////////////////////////////////////////// END /////////////////////////////////////////////////////////////
 
  ///////////////////////////////////////////// NG ON INIT ////////////////////////////////////////////////////
  username
  ngOnInit() {
    this.funses();
    this.username=(localStorage.getItem("user"));
    //alert(JSON.parse(localStorage.getItem("userem")));
  this.fungetuser();
  
    this.checklog();
    this.fungetcat();
    this.fungetsubcat();
    this. funsubsubcat();
  }
  ///////////////////////////////////////// END ///////////////////////////////////////////////////////////
}