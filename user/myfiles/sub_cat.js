exp = require("express")
router = exp.Router()
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")



router.get("/get_scat",function(req,res){
    conn.tbl_subcat.find(function(err,result){
        res.send(result)
    })
})


    
module.exports=router;