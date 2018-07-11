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
 
  ////////////////////////////// INSERT SUB CAT  ///////////////////////////////////////////////////
  funscat_insert(){
    var obj={subcat:this.subc,catid:this.dropcat}
    this.obj.post("subcats/ins_scat",obj).subscribe(this.caback1)
    this.funsubcatget();
    }
    caback1=(obj)=>{
      
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
      
       
       
       alert(this.t1)
       alert(this.dropcatt)

    }

    funsave(){
      
      var udata={_id:this.tmp,subcat:this.t1,catid:this.dropcatt}
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
    this.obj.get("catgett/getcat").subscribe(this.cb2)

  }

  cb2=(obj)=>{
    //alert("hii")
    this.categorydata=JSON.parse(obj._body)
    //alert(obj._body)
  }  

}
