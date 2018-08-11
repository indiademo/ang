import { Component,Inject,OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(@Inject(Http) public obj) { }
  pro;

  fungetallpro(){
    this.obj.get("productser/get_product").subscribe(pr=>{
      this.pro=JSON.parse(pr._body)
      alert(pr._body)
    })
  }

  ngOnInit() {
  }

}
