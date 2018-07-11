exp = require("express")
router = exp.Router()
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")

router.get("/met1",function(re,rs){
    rs.send("hi this is coming from server")
})


router.post("/ins_scat",function(req,res){
    
    ob=req.body
    
    var id=conn.tbl_subcat.find().sort({_id:-1}).limit(1,function(err,result){
    
            if (result.length==0)
            iid=1
            else{
                iid=(result[0]._id)
                iid++
    
            }
       
        console.log(iid)
        conn.tbl_subcat.insert({_id:iid,subcat:ob.subcat,catid:ob.catid,active:1})
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

router.post("/get_scat",function(req,res){
    ob=req.body
    conn.tbl_subcat.find({catid: ob.catid}, function(err,result){
        
        res.send(result)
      
       //console.log(ob.catid)
    })
  
})



router.post("/save_scat",function(req,res){
    x=req.body
    console.log(x)
    conn.tbl_subcat.save(x[0],x[1])
    res.send("Updated...")
})

router.post("/del_scat",function(req,res){
	reqdata=req.body
	console.log(reqdata)
	conn.tbl_subcat.remove(reqdata)
	res.send("Deleted")
})
    
module.exports=router;