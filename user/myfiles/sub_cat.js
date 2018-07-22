exp = require("express")
router = exp.Router()
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")

router.get("/met1",function(re,rs){
    rs.send("hi this is coming from server")
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

router.post("/get_scat",function(req,res){
    ob=req.body
    conn.tbl_subcat.find({catid: ob.catid}, function(err,result){
        
        res.send(result)
      
       //console.log(ob.catid)
    })
  
})


    
module.exports=router;