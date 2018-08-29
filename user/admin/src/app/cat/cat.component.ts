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
  tmp=0;
  t1;
  act;
  pno=1;

  ///////////////////////////////////

 ///////////////////////////////////////////////////////////////////////////////////////////////////

  funcat_insert(){
    var obj={uname:this.txt1}
    this.obj.post("catser/ins_cat",obj).subscribe(this.caback1)
   
    }
    caback1=(obj)=>{
      alert(obj._body)
      this.fun2()
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    funucatupdate(ob){
      //this.gloobj={subcat:ob,catid:cid}
       this.tmp=ob._id;
       this.t1=ob.catname;
      this.act=ob.active;
       //alert(this.t1)
    
    }

    funcatsave(){
      
      var udata={_id:this.tmp,catname:this.t1,active:this.act}
      var arr=[udata]
      this.obj.post("catser/save_cat",arr).subscribe(this.caback11)
            
      this.tmp=0;
      
    }
    caback11=(obj)=>{
      
      alert(obj._body)
      this.fun2()
      
    }

    funccancel(){
      this.tmp=0;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    fun2(){
     
      this.obj.get("catser/getcat").subscribe(this.cback2)
    }

    cback2=(obj)=>{
      //alert("hii")
      this.data=JSON.parse(obj._body)
      console.log(this.data)
    }   

    // fundelete(){
    //   var obj={uname:this.txt1}
    //   this.obj.delete("catgett/deletecat").subscribe(this.cbackd)
    // }

    // cbackd=(obj)=>{
    //   //alert("hii")
    //   alert(obj._body)
    //   this.fun2()
    // }
    
    fundelcat(un){
      var ob={_id:un}
      this.obj.post("catser/delcat",ob).subscribe(this.cb2)
      this.fun2()
      }
     cb2=(x)=>{
      alert(x._body)
      //this.funget()
    }

    /////////////////////////////////////////// ACTIVE ///////////////////////////////////////////
  funactive(bb1,act){
    bb1.active=0;
    var old={_id:bb1._id,active:act}
    // alert(act)
    // act=this.tmpv;
    
    this.obj.post("catser/active",old).subscribe(this.cbac2)
  
  }
  funinactive(bb2,act){
    bb2.active=1;
    var old={_id:bb2._id,active:act}
    // alert(act)
    // act=this.tmpv;
    
    this.obj.post("catser/inactive",old).subscribe(this.cbac3)
    
  }
  cbac2=(obj)=>{
      
  // this.subsubdata=JSON.parse(obj._body)
    alert(obj._body)
  }
  cbac3=(obj)=>{
      
    // this.subsubdata=JSON.parse(obj._body)
      alert(obj._body)
    }
//////////////////////////////////////////////END////////////////////////////////////////

  ngOnInit() {
    this.fun2()
   

  }

}
