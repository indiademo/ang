import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(@Inject(Http) private obj) { }

  userid;orderspro;
//////////////////// GET ORDERS  ///////////



fungetorders(){
  alert("hiii")

  var obbj={uid:parseInt(this.userid)}
  //alert(this.subsubid)
  this.obj.post("/productser/product",obbj).subscribe(x=>{
    this.orderspro=JSON.parse(x._body)
  
   
  })
}

  ngOnInit() {
    
    
    this.userid=localStorage.getItem("uid");
    this.fungetorders();
  }

}
