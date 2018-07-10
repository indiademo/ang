exp=require("express")
bp=require("body-parser")
app=exp()
app.use(bp.json())


catfile=require("./myfiles/cat_server")
catget=require("./myfiles/cat_server")
delcat=require("./myfiles/cat_server")
scat=require("./myfiles/sub_cat")
sscat=require("./myfiles/sub_subcat")

 app.use("/catgett",catfile)

app.use("/catser",catfile)
app.use("/dceto",delcat)
app.use("/subcats",scat)
app.use("/subsubcats",sscat)

app.listen(2222)
console.log("2222")