exp = require("express")

rt = exp.Router()

jst=require("jsonwebtoken")
bc=require("bcrypt")

  ses=require("express-session")
  app.use(ses({secret:"gfg",saveUninitialized:true,resave:true}))
  sec=require("./encript")

//////////////////////// GET USER PROFILE/////////////////
// rt.get("/fun1",function(req,res){
//   sess=req.session
//   sess.x=100
//   console.log(sess.x)
// })



app.get("/funs",function(req,res){
  //console.log("hiiii")
  var tk=jst.sign({id:"123"},sec.secret)
  console.log(tk)
  sess=req.session
  sess.x=100
  console.log(sess.x)
})
////////////////////////////////////////////////////
rt.post("/userprf",function(req,res){
  ob=req.body
  conn.tbl_user.find({email:ob.email}, function(err,result){
      
      res.send(result)
    
     //console.log(ob.catid)
  })

})


//////////////////////// USER LOGIN /////////////////

rt.post("/login",function(req,res){
  udata=req.body
  //console.log(udata)
   sess = req.session;
       conn.tbl_user.find({email:udata.email},function(err,ress){
       
      if(ress.length!=0){
        id=ress[0]._id
         upass=ress[0].password
         uemail=ress[0].email
         uname=ress[0].username
         umobile=ress[0].mobile
        if(upass!=udata.password){
          res.send({count:2})
          console.log("err password")
         }else{
          var tk=jst.sign({id:udata.email},sec.secret)
            sess.email=tk;
            //console.log(id)
            
            res.send({token:tk,userinfo:uname,usermobile:umobile,id:id})
         }

       
      }else{
        res.send({count:0})
      }
    })

})
////////////check pf utoken ///////////////
rt.post("/checkutoken",function(req,res){
  pftoken=req.body
  ss=sess.email
  if(pftoken.utoken==ss){
   
    res.send("success")
  }else{
    res.send("error")
   
  }
 
})

///////////////////////////////////////

rt.post("/userreg",function(req,res){
    
  ob=req.body
  
  var id=conn.tbl_user.find({email:ob.email}).sort({_id:-1}).limit(1,function(err,result){
  
    if (result.length==1){
      res.send("Email id is allready registerd");
    }else{
      var id=conn.tbl_user.find().sort({_id:-1}).limit(1,function(err,re){

        if (re.length==0)
        iid=1
        else{
            iid=(re[0]._id)
            iid++

        }
    
        console.log(iid)
        conn.tbl_user.insert({_id:iid,username:ob.username,mobile:ob.mobile,email:ob.email,password:ob.password,active:1})
        res.send("Regesterd sucessfully plese login")
      })
        
    }
 })
})

////////////////////////////////////////
rt.post("/placeorder",function(req,res){
  pro=req.body
  //console.log(pro)
  var id=conn.tbl_purchaseorder.find().sort({_id:-1}).limit(1,function(err,result){
    if (result.length==0)
    orderid=1
    else{
      orderid=(result[0]._id)
      orderid++

    }
    conn.tbl_purchaseorder.insert({_id:orderid,orderdate:new Date(),userid:pro.userid,product:pro.product})

  })
})


//////////////////////////////////////////////////// GET WISHLIST //////////////////////
rt.post("/wishpro",function(req,res){
  ob=req.body
  console.log(ob)
  conn.tbl_wishlist.find({userid:ob.uid}, function(err,result){
    console.log(result)
      res.send(result)
    
     //console.log(result)
  })

})
///////////////////////////////////////////  UPDATE USER IN  WISHLIST PRODUCT //////////////////////
rt.post("/wishlistup",function(req,res){
  act=req.body
  console.log(act)
  conn.tbl_wishlist.update({userid:null},{$set:{userid:act.userid}},{multi: true});
  //console.log(res)
  res.send("Updated...")
})
/////////////////////////////////////////////////////// SEARCH PRODUCTS //////////////////////////////////


rt.post("/search",function(req,res){
  objsrch=req.body
  console.log(objsrch)
  conn.tbl_product.find({product:{$regex:objsrch.proid}}, function(err,result){
    // console.log(result)
  res.send(result)
    

  })
})

module.exports=rt;