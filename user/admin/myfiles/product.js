exp = require("express")
router = exp.Router()
fup=require("express-fileupload")
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/demo")
app.use(fup())

///////////////////////////////////////// GET SUB SUB CATEGORY /////////////////////////////////////////////////////////////////////

router.post("/get_sscat",function(req,res){
    ob=req.body
    //console.log(ob)
    conn.tbl_subsubcat.find({scatid:ob.scatid}, function(err,result){
        
        res.send(result)
      
       
    })
  
})
/////////////////////////////////////////// END ///////////////////////////////////////////////////////////////////

///////////////////////////////////////// ENSERT PRODUCT /////////////////////////////////////////////////////////////////////

router.post("/ins_product",function(req,res){
    
    ob=req.body
    console.log(ob)
     conn.tbl_product.find().sort({_id:-1}).limit(1,function(err,result){
    
            if (result.length==0)
            iid=1
            else{
                iid=(result[0]._id)
                iid++
    
            }
       
        console.log(iid)
        conn.tbl_product.insert({_id:iid,catid:ob.catid,subcatid:ob.subcatid,subsubcatid:ob.subsubcatid,brandid:ob.brandid,product:ob.product,quantity:ob.quanity,price:ob.price,productcolor:ob.procolor,productdescription:ob.prodesc,active:1})
        res.send("Product added")
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
// router.post("/addimage",function(req,res){
//     var data=req.body
//     console.log("im here")
// 	console.log(data)
// 	conn.tbl_product.find({},{_id:1}).sort({_id:-1}).limit(1,function(err,result){
// if(result==0)
// imgid=1
// else
//  imgid=result[0]._id
// console.log(imgid)
// conn.tbl_product.update({_id:imgid},{$set:{image:data.image}})

// 	})
// })

router.post("/addimage",function(req,res){
    ob=req.body
    console.log(ob)
    conn.tbl_product.find().sort({_id:-1}).limit(1,function(err,result){
        id=result[0]._id
        conn.tbl_product.update({_id:id},{$set:{pimg:ob.image}})
        res.send("inserted")
       
    })
   
    
})

//////////////////////////////////// GET PRODUCT /////////////////////////////

router.get("/getproduct",function(req,res){
    
    conn.tbl_product.find(function(req,proresult){       
        conn.tbl_brand.find(function(req,brandresult){    
            conn.tbl_subsubcat.find(function(req,ssresult){
                conn.tbl_subcat.find(function(err,sresult){
                    conn.tbl_cat.find(function(err,cresult){
                        arr=[]
                        
                        for(i=0;i<proresult.length;i++){
                            ob={}
                           // console.log(proresult[i])
                            ob=proresult[i]
                            //console.log(ob)
                            for(j=0;j<brandresult.length;j++){
                                if(proresult[i].brandid==brandresult[j]._id){
                                    ob.brand=brandresult[j].brand
                                   // console.log(ob.brand)
                                }
                            }
                            for(k=0;k<ssresult.length;k++){
                                if(proresult[i].subsubcatid==ssresult[k]._id){
                                    ob.subsubcat=ssresult[k].subsubcat
                                 //console.log(ob.subsubcat)

                                }
                            }
                            for(l=0;l<sresult.length;l++){
                                if(proresult[i].subcatid==sresult[l]._id){
                                    ob.subcat=sresult[l].subcat
                                 //console.log(ob.subcat)
                                }
                            }
                            for(m=0;m<cresult.length;m++){
                                if(proresult[i].catid==cresult[m]._id){
                                    ob.catname=cresult[m].catname
                                 //console.log(ob.catname)
                                }
                            }
                            arr.push(ob)
                        }
                        //console.log(arr)
                        res.send(arr)
                        
                    })
                })
            })
        })    
    })    
     
     
 })

 ////////////////////////////////// END //////////////////////////////////////////////////////

////////////////////////////////// IMAGE  //////////////////////////////////////////////////////
router.get('/getimage', function(req, res) {
    console.log("Get cake function");
    tbl_product.find(function (err, doc) {
        if (err) return next(err);
    var base64 = (doc[0].img.data.toString('base64'));
    res.send(base64);        
    });
});
////////////////////////////////// UPDATE PRODUCT //////////////////////////////////////////////////////

router.post("/save_product",function(req,res){
    x=req.body
    console.log(x)
    conn.tbl_product.save(x[0],x[1])
    res.send("Updated...")
})

////////////////////////////////// END //////////////////////////////////////////////////////
//,subcatid:ob.subcatid,subsubcatid:ob.subsubcatid,brandid:ob.brandid,product:ob.product,quantity:ob.quanity,price:ob.price,productcolor:ob.procolor,productdescription:ob.prodesc,active:1

////////////////////////////////// ACTIVE INACTIVE //////////////////////////////////////////////////////

router.post("/active",function(req,res){
    act=req.body
   // console.log(act)
    conn.tbl_product.update({_id:act._id},{$set:{active:act.active}})
    res.send("Updated...")
})

router.post("/inactive",function(req,res){
    act=req.body
    //console.log(act)
    conn.tbl_product.update({_id:act._id},{$set:{active:act.active}})
    res.send("Updated...")
})

router.post("/delpro",function(req,res){
	reqdata=req.body
	console.log(reqdata)
	conn.tbl_product.remove(reqdata)
	res.send("Deleted")
})


module.exports=router;