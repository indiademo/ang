exp = require("express")

rt = exp.Router()
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")
//conn=mj("mongodb://pathakabhishek:1.jaanabhi@ds021741.mlab.com:21741/demo")

rt.post("/ins_brand",function(req,res){
    
    ob=req.body
    console.log(ob)
    var id=conn.tbl_brand.find().sort({_id:-1}).limit(1,function(err,result){
    
            if (result.length==0)
            iid=1
            else{
                iid=(result[0]._id)
                iid++
    
            }
    
        console.log(iid)
        conn.tbl_brand.insert({_id:iid,brand:ob.brand,active:1})
        res.send("Inserted")
    })
     
    
})
///////////////////////////////// SAVE BRAND /////////////////////////////////

rt.post("/save_brand",function(req,res){
    x=req.body
    console.log(x)
    conn.tbl_brand.save(x[0],x[1])
    res.send("save...")
})
////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// GET BRAND ///////////////////////////////////

rt.get("/getbrand",function(req,res){
    conn.tbl_brand.find(function(err,result){
        // console.log(result)
        res.send(result)
    })
})

////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// ACTIVE INACTIVE  ///////////////////////////////////////////////
rt.post("/active",function(req,res){
    act=req.body
    console.log(act)
    conn.tbl_brand.update({_id:act._id},{$set:{active:act.active}})
    //res.send("Updated...")
})

rt.post("/inactive",function(req,res){
    act=req.body
    console.log(act)
    conn.tbl_brand.update({_id:act._id},{$set:{active:act.active}})
    //res.send("Updated...")
})
    ////////////////////////////////////////////////////////////////////////////////
    module.exports=rt;