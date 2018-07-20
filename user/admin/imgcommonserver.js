// ex=require("express")
// app=ex()
// fup=require("express-fileupload")
// bp=require("body-parser")
// app.use(fup())
// app.use(bp.json())
// app.post("/imgupload",function(req,res){
//     console.log("hiii")
//     type=req.files.imgnm.mimetype
//     console.log(type)
// 	if(type== "image/jpeg" || type=="image/bmp")
// 	{
// var imgdata=req.files.imgnm
// imgname=imgdata.name
// tmstmp=parseInt(new Date()/1000)
// imgname=tmstmp+"_"+imgname

// imgdata.mv("F:/cliproject/ang/proxydemo/src/assets/images/"+imgname,function(err,result){
	

// 	res.redirect("mongodb://localhost:27017/product;imgname="+imgname)
	
// })}
// else
// res.send("error")})
// app.listen(2222)
