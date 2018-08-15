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
 
   sess = req.session;
       conn.tbl_user.find(udata).count(function(err,ress){
      if(ress==1){
        var tk=jst.sign({id:udata.email},sec.secret)
        sess.email=tk;
        res.send({token:tk})
      }else{
        console.log("User and password are not match")
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


module.exports=rt;