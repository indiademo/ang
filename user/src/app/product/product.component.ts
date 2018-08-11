import { Component, OnInit ,Inject} from '@angular/core';
import { Http } from '@angular/http'
import { ActivatedRoute }  from '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor (@Inject (ActivatedRoute) public ar, @Inject(Http) private obj) { }
  prodata;
  subsubid;

  fungetpro(){
    this.obj.get("products/get_product").subscribe(
      pr=>{
        this.prodata=JSON.parse(pr._body)
       // alert(pr._body)
        
      })
    
    }


  ngOnInit() {
    //this.fungetpro();
    this.ar.params.subscribe(x=>{
      
      this.subsubid=x["_id"]
      var obbj={id:this.subsubid}
      //alert(this.subsubid)
      this.obj.post("/productser/getproducts",obbj).subscribe(x=>{
        this.prodata=JSON.parse(x._body)
       // alert(x._body)
      })
    })
  }

}
