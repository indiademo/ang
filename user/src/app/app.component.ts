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


  ngOnInit() {
    
    this.fungetcat()
  }

   /////////////////////////////////////////////////////////////////////////////////////////////////
   fungetcat(){
    alert("hii")
    this.obj.get("catser/getcat").subscribe(this.cback2)
  }

  cback2=(obj)=>{
    //alert("hii")
    this.catdata=JSON.parse(obj._body)
    console.log(this.catdata)
    alert(this.catdata)
  }  

}