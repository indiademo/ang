import { Component,Inject,OnInit } from '@angular/core';
import { Http } from '@angular/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent implements OnInit {

  constructor(@Inject(Http) public obj) { }
  catdata;
  subcatdata;


  ngOnInit() {
    
    this.fungetcat();
    this.fungetsubcat()
  }

   /////////////////////////////////////////////////////////////////////////////////////////////////
   fungetcat(){
    
    this.obj.get("catser/getcat").subscribe(this.cback2)
  }

  cback2=(obj)=>{
    //alert("hii")
    this.catdata=JSON.parse(obj._body)
    console.log(this.catdata)
    //alert(this.catdata)
  }  

   /////////////////////////////////////////////////////////////////////////////////////////////////
   fungetsubcat(){
    //alert("hii")
    this.obj.get("subcatser/getscat").subscribe(this.cback3)
  }

  cback3=(obj)=>{
    //alert("hii")
    this.subcatdata=JSON.parse(obj._body)
    console.log(this.subcatdata)
    alert(this.subcatdata)
  } 

}