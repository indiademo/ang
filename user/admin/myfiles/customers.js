exp = require("express")

rt = exp.Router()
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")


rt.get("/getusers",function(req,res){
    conn.tbl_customers.find(function(err,result){
        res.send(result)
    })
})