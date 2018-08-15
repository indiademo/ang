import { Component, OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http'
import { ActivatedRoute }  from '@angular/router'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor (@Inject (ActivatedRoute) public ar, @Inject(Http) private obj) { }
lwt;
  funuserprf(){
    this.obj.post("userprofile/uacount").subscribe(ua=>{
      alert(ua._body)
    })
  }

  ngOnInit() {
    this.lwt=localStorage.getItem("usertoken")
   var utk={utoken:this.lwt}
   this.obj.post("userser/checkutoken",utk).subscribe(ut=>{
     //alert(ut._body)
     if(ut._body=="success"){
       this.ar.navigateByUrl("/")
     }else{
      this.ar.navigateByUrl("/userprofile")
     }
   })
  }

}
