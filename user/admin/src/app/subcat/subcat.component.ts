import { Component, OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {

  constructor(@Inject(Http) public obj) { }
  subc="" ;
  t1;
  categorydata;
  dropcat;
  subcatdata;
  tmp=0;
  dropcatt;
  gloobj;
  id;
  act;
 
  ////////////////////////////// INSERT SUB CAT  ///////////////////////////////////////////////////
  funscat_insert(){
    var obj={subcat:this.subc,catid:this.dropcat}
    this.obj.post("subcats/ins_scat",obj).subscribe(this.caback1)
  
    }
    caback1=(obj)=>{
      this.funsubcatget();
      alert(obj._body)
      //this.fun2()
    }
    ////////////////////////////// DISPLAY SUB CAT /////////////////////////////////////////////////
    funsubcatget(){
     
      this.obj.get("subcats/getscat").subscribe(this.cback2)
     // alert("hii")
    }

    cback2=(obj)=>{
      
      this.subcatdata=JSON.parse(obj._body)
      //alert(obj._body)
    }   
    
    //////////////////////////////////////// END ////////////////////////////////////////////////////


    ////////////////////////////// SUB CAT UPDATE ///////////////////////////////////////////////////
    funupdate(ob){
      //this.gloobj={subcat:ob,catid:cid}
       this.tmp=ob._id;
       this.t1=ob.subcat;
       this.dropcatt=ob.catid;
       this.act=ob.active;
      
       
       
       alert(this.t1)
       alert(this.act)

    }

    funsave(){
      
      var udata={_id:this.tmp,subcat:this.t1,catid:this.dropcatt,active:this.act}
      var arr=[udata]
      this.obj.post("subcats/save_scat",arr).subscribe(this.caback11)
      
      this.funsubcatget();
      this.tmp=0;
    }
    caback11=(obj)=>{
      
      alert(obj._body)
      //this.fun2()
      
    }
    //////////////////////////////////////// END ////////////////////////////////////////////

    /////////////////////////////////////////// ACTIVE ///////////////////////////////////////////
  funactive(bb1,act){
    bb1.active=0;
    var old={_id:bb1._id,active:act}
    // alert(act)
    // act=this.tmpv;
    
    this.obj.post("subcats/active",old).subscribe(this.cbac2)
  
  }
  funinactive(bb2,act){
    bb2.active=1;
    var old={_id:bb2._id,active:act}
    // alert(act)
    // act=this.tmpv;
    
    this.obj.post("subcats/inactive",old).subscribe(this.cbac3)
    
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

    ////////////////////////////////////////////////////////////////////////////////////////


    fundeletesubcat(un){
      var ob={_id:un}
      this.obj.post("subcats/del_scat",ob).subscribe(this.cb22)
      }
     cb22=(x)=>{
      alert(x._body)
      this.funsubcatget();
    }
    ///////////////////////////////////////////////////////////////////////////////////////
      
    

  ngOnInit() {
    this.funsubcatget();
    this.obj.get("catser/getcat").subscribe(this.cb2)

  }

  cb2=(obj)=>{
    //alert("hii")
    this.categorydata=JSON.parse(obj._body)
    //alert(obj._body)
  }  

}
