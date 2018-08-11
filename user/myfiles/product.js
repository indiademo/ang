exp = require("express")
router = exp.Router()
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")



router.get("/get_product",function(req,res){
    conn.tbl_product.find(function(err,result){
        res.send(result)
    })
})

router.post("/getproducts",function(req,res){
    ob=req.body
    console.log(ob)
    conn.tbl_product.find({subsubcatid:ob.id}, function(err,result){
        
        res.send(result)
      
       
    })
  
})

///////////////
router.post("/prodetails",function(req,res){
    ob=req.body
    console.log(ob)
    conn.tbl_product.find({_id:ob.id}, function(err,result){
        
        res.send(result)
    })
})
///////////////

    
module.exports=router;