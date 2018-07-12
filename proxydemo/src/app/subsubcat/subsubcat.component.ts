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
  sscat;
  ///////////////////////////////// INSERT SUB SUB CATEGORY ///////////////////////////////////////////////////
  funssscat_insert(){
    var obj={subsubcat:this.ssubc,catid:this.dropcatid,scatid:this.dropscatid}
    this.obj.post("subsubcats/ins_sscat",obj).subscribe(this.caback1)
    this. funsubsubcat();
    }
    caback1=(obj)=>{
      
      alert(obj._body)
      //this.fun2()
    }
  ///////////////////////////////////////////      END   //////////////////////////////////////////////////

  /////////////////////////////////////////// GET SUB CATEGORY /////////////////////////////////////////////////  
  
  funsubcatget(){
   
    var dcat={catid:this.dropcatid}
   
    this.obj.post("subcats/get_scat",dcat).subscribe(this.cback2)
    
  }
  cback2=(obj)=>{
      
    this.subcatdata=JSON.parse(obj._body)
    alert(obj._body)
  }
  ///////////////////////////////////////////   END     /////////////////////////////////////////////////

  ///////////////////////////////// GET SUB SUB CATEGORY  /////////////////////////////////////////////////
  
  funsubsubcat(){
     
    this.obj.get("subsubcats/getsscat").subscribe(this.cbackk2)
  }

  cbackk2=(obj)=>{
    //alert("hii")
    this.sscat=JSON.parse(obj._body)
    console.log(this.sscat)
  }  

  ///////////////////////////////////////////  NG INIT  ///////////////////////////////////////////////
  
  ngOnInit() {
    this.funsubsubcat();
    this.obj.get("catgett/getcat").subscribe(this.cb2)

  }

  cb2=(obj)=>{
    //alert("hii")
    this.categorydata=JSON.parse(obj._body)
   // alert(obj._body)
  }  
  

}
 ///////////////////////////////////////  END   ////////////////////////////////////////////////////////
                                    
////////////////////////////////////////////////////////////////////////////////////////////////////////