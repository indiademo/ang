import { Component, OnInit ,Inject} from '@angular/core';
import { Http } from '@angular/http'
@Component({
  selector: 'app-subsubcat',
  templateUrl: './subsubcat.component.html',
  styleUrls: ['./subsubcat.component.css']
})
export class SubsubcatComponent implements OnInit {

  constructor(@Inject(Http) public obj) { }
  ssubc="";
  categorydata;
  subcatdata;
  dropscatid;
  
  dropcatid;

  funssscat_insert(){
    var obj={subsubcat:this.ssubc,catid:this.dropcatid,scatid:this.dropscatid}
    this.obj.post("subsubcats/ins_sscat",obj).subscribe(this.caback1)
  
    }
    caback1=(obj)=>{
      
      alert(obj._body)
      //this.fun2()
    }

    
  
  funsubcatget(){
   
    var dcat={catid:this.dropcatid}
   
    this.obj.post("subcats/get_scat",dcat).subscribe(this.cback2)
    
  }
  cback2=(obj)=>{
      
    this.subcatdata=JSON.parse(obj._body)
    alert(obj._body)
  }
  
  
  ngOnInit() {
    
    this.obj.get("catgett/getcat").subscribe(this.cb2)

  }

  cb2=(obj)=>{
    //alert("hii")
    this.categorydata=JSON.parse(obj._body)
   // alert(obj._body)
  }  
  

}
