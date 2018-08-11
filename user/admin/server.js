exp=require("express")
bp=require("body-parser")
app=exp()
app.use(bp.json())


catfile=require("./myfiles/cat_server")
// catget=require("./myfiles/cat_server")
// delcat=require("./myfiles/cat_server")
scat=require("./myfiles/sub_cat")
sscat=require("./myfiles/sub_subcat")
brandd=require("./myfiles/brand")
productt=require("./myfiles/product")

//  app.use("/catgett",catfile)
//app.use("/dceto",delcat)
app.use("/catser",catfile)

app.use("/subcats",scat)
app.use("/subsubcats",sscat)
app.use("/brandser",brandd)
app.use("/products",productt)

app.listen(2222)
console.log("2222")

// app.post("/upload",function(req,res){
//   //  console.log("hiii")
//     console.log(req.files.imgnm.name)
    
//     iname=req.files.imgnm.name;
//     iref=req.files.imgnm
//     d= new Date()
//     d=d/1000
//     iname="img"+parseInt(d)+"-"+iname
//     console.log(iname)
//     iref.mv("src/assets/images/"+iname)
//     res.redirect("localhost:2222/product?res"+iname)



// })

app.post("/uploads",function(req,res){
    iname=req.files.f1.name
    iref=req.files.f1
    var dt = new Date()
    dt=dt/1000
    iname=("img"+parseInt(dt)+"_"+iname)
    //iref.mv("images/"+iname)
    iref.mv("../src/assets/images/"+iname)
    res.redirect("http://localhost:4200/product?res="+iname)
    

})    