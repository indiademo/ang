exp = require("express")
router = exp.Router()
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")

router.get("/met1",function(re,rs){
    rs.send("hi this is coming from server")
})


router.post("/ins_sscat",function(req,res){
    //res.send("hi this is coming from server")
    ob=req.body
    
    var id=conn.tbl_subsubcat.find().sort({_id:-1}).limit(1,function(err,result){
    
            if (result.length==0)
            iid=1
            else{
                iid=(result[0]._id)
                iid++
    
            }
       
        console.log(iid)
        conn.tbl_subsubcat.insert({_id:iid,subsubcat:ob.subsubcat,catid:ob.catid,scatid:ob.scatid})
        res.send("Inserted")
    })
})

router.get("/getsscat",function(req,res){
   conn.tbl_subsubcat.find(function(req,ssresult){
       conn.tbl_subcat.find(function(err,sresult){
           conn.tbl_cat.find(function(err,cresult){
               arr=[]
               for(i=0;i<ssresult.length;i++){
                   ob={}
                   ob=ssresult[i]
                   for(j=0;j<sresult.length;j++){
                       if(ssresult[i].scatid==sresult[j]._id){
                           ob.subcat=sresult[j].subcat
                           break;
                       }
                   }
                   for(k=0;k<cresult.length;k++){
                       if(ssresult[i].catid==cresult[k]._id){
                           ob.catname=cresult[k].catname
                          // console.log(ob.catname)
                           break;
                       }
                   }
                   arr.push(ob)
               }
               res.send(arr)
           })
       })
   })
    
    
})

module.exports=router;