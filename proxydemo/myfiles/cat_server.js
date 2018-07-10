exp = require("express")

rt = exp.Router()
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")
//conn=mj("mongodb://pathakabhishek:1.jaanabhi@ds021741.mlab.com:21741/demo")


rt.post("/ins_cat",function(req,res){
    
ob=req.body

var id=conn.tbl_cat.find().sort({_id:-1}).limit(1,function(err,result){

        if (result.length==0)
        iid=1
        else{
            iid=(result[0]._id)
            iid++

        }
   
    console.log(iid)
    conn.tbl_cat.insert({_id:iid,catname:ob.uname})
    res.send("Inserted")
})



})

rt.get("/getcat",function(req,res){
    conn.tbl_cat.find(function(err,result){
        res.send(result)
    })
})

// rt.delete("/deletecat",function(req,res){
//     conn.tbl_cat.find(function(err,result){
//         res.send(result)
//     })


    
// })



// rt.delete("/deletecat",function (req, res) {  
//     //conn.tbl_cat.remove(function(err,result){
//             //_id: req._id
//          //   _id: req.uname
        
//          reqdata=req.body
//          console.log(reqdata)
//          conn.tbl_cat.remove(reqdata)
//          res.send("Deleted")
//         // res.send('Deleted All');
//        // });
//     });

    // rt.post("/delrec",function(req,res){
    //     reqdata=req.body
    //     //console.log(reqdata)
    //     conn.tbl_cat.remove(reqdata)
    //         res.send("Deleted")
    // })   
    
    
// rt.delete("/delrec",function(req,res){
    
// 	reqdata=req.body
// 	console.log(reqdata)
// 	conn.tbl_cat.remove(reqdata)
//     res.send("Deleted")
// }) 





module.exports=rt;