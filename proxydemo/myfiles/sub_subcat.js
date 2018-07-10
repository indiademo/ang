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

router.get("/getscat",function(req,res){
   
    conn.tbl_subcat.find(function(err,result){
        
        conn.tbl_cat.find(function(err,catresult){
            var arr=[]
            
            for(i=0;i<result.length;i++){
                for(j=0;j<catresult.length;j++){
                    if(result[i].catid==catresult[j]._id){
                        obj=result[i]
                        obj.catname=catresult[j].catname
                       // console.log(obj)
                        arr.push(obj)

                    }

                }
            }
            res.send(arr)
            
        })
       
    })
    
})

module.exports=router;