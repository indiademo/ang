exp = require("express")
router = exp.Router()
fup=require("express-fileupload")
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")
app.use(fup())

///////////////////////////////////////// GET SUB SUB CATEGORY /////////////////////////////////////////////////////////////////////

router.post("/get_sscat",function(req,res){
    ob=req.body
    console.log(ob)
    conn.tbl_subsubcat.find({scatid:ob.scatid}, function(err,result){
        
        res.send(result)
      
       
    })
  
})
/////////////////////////////////////////// END ///////////////////////////////////////////////////////////////////

///////////////////////////////////////// ENSERT PRODUCT /////////////////////////////////////////////////////////////////////

router.post("/ins_product",function(req,res){
    
    ob=req.body
    
    var id=conn.tbl_product.find().sort({_id:-1}).limit(1,function(err,result){
    
            if (result.length==0)
            iid=1
            else{
                iid=(result[0]._id)
                iid++
    
            }
       
        console.log(iid)
        conn.tbl_product.insert({_id:iid,catid:ob.catid,subcatid:ob.subcatid,subsubcatname:ob.subsubcat,brand:ob.brand,product:ob.product,quantity:ob.quanity,image:ob.iname,productcolor:ob.procolor,productdescription:ob.prodesc})
        res.send("Inserted")
    })
    
    
    
})
///////////////////////////////////////// END  /////////////////////////////////////////////////////////////////////    

//////////////////////////////////////  UPLOAD PRODUCT IMAGE ////////////////////////////////////////////////////////////////////////////////

router.post('/upload', function (req, res, next) {
     var path = '';
     upload(req, res, function (err) {
        if (err) {
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
        path = req.file.path;
        conn.upload.insert({path})

        return res.send("Upload Completed for "+path); 
  });     
})

/////////////////////////////////////////////////////  END  /////////////////////////////////////////////////////////
router.post("/addimage",function(req,res){
	var data=req.body
	console.log(data)
	conn.tbl_product.find({},{_id:1}).sort({_id:-1}).limit(1,function(err,result){
if(result==0)
imgid=1
else
 imgid=result[0]._id
console.log(imgid)
conn.tbl_product.update({_id:imgid},{$set:{image:data.image}})

	})
})










module.exports=router;