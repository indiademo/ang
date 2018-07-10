import { Component, OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(@Inject(Http) public obj) { }
  txt1="" 
  data;

 /* fun1(){
    this.obj.get("filepath/met1").subscribe( function (dt){
      
      alert(dt._body)
    })
  }

  fun2(){
    this.obj.get("cat/met2").subscribe( function (dtt){
      
      alert(dtt._body)
    })
  }*/

  funcat_insert(){
    var obj={uname:this.txt1}
    this.obj.post("catser/ins_cat",obj).subscribe(this.caback1)
   
    }
    caback1=(obj)=>{
      alert(obj._body)
      this.fun2()
    }

    fun2(){
     
      this.obj.get("catgett/getcat").subscribe(this.cback2)
    }

    cback2=(obj)=>{
      //alert("hii")
      this.data=JSON.parse(obj._body)
      console.log(this.data)
    }   

    fundelete(){
      var obj={uname:this.txt1}
      this.obj.delete("catgett/deletecat").subscribe(this.cbackd)
    }

    cbackd=(obj)=>{
      //alert("hii")
      alert(obj._body)
      this.fun2()
    }
    // delete one
    // fundel(un){
    //   var ob={uname:un}
    //   this.obj.delete("dceto/delrec",ob).subscribe(this.cb2)
    //   }
    //  cb2=(x)=>{
    //   alert(x._body)
    
    // }

  ngOnInit() {
    this.fun2()
   

  }

}
