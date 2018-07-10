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

  funscat_insert(){
    var obj={subcat:this.subc,catid:this.dropcat}
    this.obj.post("subcats/ins_scat",obj).subscribe(this.caback1)
  
    }
    caback1=(obj)=>{
      
      alert(obj._body)
      //this.fun2()
    }

    funsubcatget(){
     
      this.obj.get("subcats/getscat").subscribe(this.cback2)
     // alert("hii")
    }

    cback2=(obj)=>{
      
      this.subcatdata=JSON.parse(obj._body)
      //alert(obj._body)
    }   

    funupdate(ob){
       this.tmp=ob._id;
       this.t1=ob.subcat;
       
       alert(this.tmp)
       alert(this.t1)

    }


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
