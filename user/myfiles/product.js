exp = require("express")
router = exp.Router()
mj=require("mongojs")

ses=require("express-session")
app.use(ses({secret:"gfg",saveUninitialized:true,resave:true}))
conn=mj("mongodb://localhost:27017/demo")



router.get("/get_product",function(req,res){
    conn.tbl_product.find(function(err,result){
        res.send(result)
    })
})

router.post("/getproducts",function(req,res){
    ob=req.body
    //console.log(ob)
    conn.tbl_product.find({subsubcatid:ob.id}, function(err,result){
        
        res.send(result)
      
       
    })
  
})

///////////////
router.post("/prodetails",function(req,res){
    ob=req.body
   // console.log(ob)
    conn.tbl_product.find({_id:ob.id}, function(err,result){
        
        res.send(result)
    })
})
///////////////


///////////////
router.post("/proamount",function(req,res){
    ob=req.body
    // console.log(ob.subsub)
    // conn.tbl_product.find({subsubcatid:ob.subsub,price:{$gte:ob.maxamo}}, function(err,result){

 conn.tbl_product.find( { $and: [ { subsubcatid:ob.subsub }, { price: { $gte:ob.min } },{ price: { $lte:ob.maxamo } } ] } , function(err,result){

//  })
         console.log(result)
        res.send(result)
        //console.log(result),price:{$gte:ob.maxamo}//{subsubcatid:ob.subsub,price:{$gte:ob.maxamo}}
    })
})
///////////////wishlist

router.post("/wishlist",function(req,res){
    
    ob=req.body
    proo=ob.wishpr
   // console.log(ob)
    var id=conn.tbl_wishlist.find().sort({_id:-1}).limit(1,function(err,result){
    
         
        conn.tbl_wishlist.insert({_id:proo[0]._id,userid:ob.userid,catid:proo[0].catid,subcatid:proo[0].subcatid,subsubcatid:proo[0].subsubcatid,brandid:proo[0].brandid,product:proo[0].product,quantity:proo[0].quanity,price:proo[0].price,productcolor:proo[0].procolor,pimg:proo[0].pimg,active:1})
        res.send("Inserted")
    })
    
    
    
    })
    //////////////////////////////////////////  END ////////////////////////////////


    //////////////////////GET WISH PRODUCT ID WISE////////////////////////////////////////
    router.post("/wishpro",function(req,res){
        wishob=req.body
       
        conn.tbl_product.find({_id:wishob.id}, function(err,result){
            
            res.send(result)
          
           
        })
      
    })

        //////////////////////GET WISH PRODUCT USER ID WISE////////////////////////////////////////

        router.post("/getwishpro",function(req,res){
           
            ob=req.body
                console.log(ob)
                conn.tbl_wishlist.find({userid:ob.userid}, function(err,result){
                    
                    res.send(result)
                
                
                })
          
        })

        //////////////////////////////////////////  END ////////////////////////////////

/////////////////////////



router.post("/product",function(req,res){
           
    ob=req.body
      
        conn.tbl_purchaseorder.find({userid:ob.uid}, function(err,result){
            console.log(result)
            res.send(result)
        
        
        })
  
})

    
module.exports=router;