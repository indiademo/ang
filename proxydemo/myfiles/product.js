exp = require("express")
router = exp.Router()
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")

var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('photo');

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
        conn.tbl_product.insert({_id:iid,catid:ob.catid,subcatid:ob.subcatid,subsubcatname:ob.subsubcat,brand:ob.brand,product:ob.product,quantity:ob.quanity,imagepath:ob.image,productcolor:ob.procolor,productdescription:ob.prodesc})
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
module.exports=router;