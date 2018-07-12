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
  subcatdat;
  dropcatid;
  sscat;
  tmp=0;
  dropupdatecatid;
  dropupdatescatid;
  t1;
  ///////////////////////////////// INSERT SUB SUB CATEGORY ///////////////////////////////////////////////////
  funssscat_insert(){
    var obj={subsubcat:this.ssubc,catid:this.dropcatid,scatid:this.dropscatid}
    this.obj.post("subsubcats/ins_sscat",obj).subscribe(this.caback1)
    
    }
    caback1=(obj)=>{
      this. funsubsubcat();
      alert(obj._body)
      //this.fun2()
    }
  ///////////////////////////////////////////      END   //////////////////////////////////////////////////

  ///////////////////////////////// UPDATE SUB SUB CATEGORY ///////////////////////////////////////////////////

  funsubsubupdate(up){
    
    this.tmp=up._id;
    this.dropupdatecatid=up.catid;
    this.funsubcatgetid();
    this.dropupdatescatid=up.scatid;
    this.t1=up.subsubcat
    
    alert(this.dropupdatescatid)
  }

  funsubsubcatsave(){
    var usubsubdata={_id:this.tmp,subsubcat:this.t1,catid:this.dropupdatecatid,scatid:this.dropupdatescatid}
    var updatesub=[usubsubdata]
    this.obj.post("subsubcats/savesubsubcat",updatesub).subscribe(this.cbb)

  }
  cbb=(obj)=>{
    alert(obj._body)
  }

  ///////////////////////////////////////////// END  //////////// ///////////////////////////////////////////////////

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

  /////////////////////////////////////////// GET SUB CATEGORY FOR UPDATE AND SAVE/////////////////////////////////////////////////  
  
  funsubcatgetid(){
   
    var dcatt={catid:this.dropupdatecatid}
   
    this.obj.post("subcats/get_scat",dcatt).subscribe(this.cb2)
    
  }
  cb2=(obj)=>{
      
    this.subcatdat=JSON.parse(obj._body)
    //alert(obj._body)
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
    this.obj.get("catgett/getcat").subscribe(this.cb22)

  }

  cb22=(obj)=>{
    //alert("hii")
    this.categorydata=JSON.parse(obj._body)
   // alert(obj._body)
  }  
  

}
 ///////////////////////////////////////  END   ////////////////////////////////////////////////////////
                                    
////////////////////////////////////////////////////////////////////////////////////////////////////////