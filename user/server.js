exp=require("express")
bp=require("body-parser")
app=exp()
app.use(bp.json())


catfile=require("./myfiles/cat_server")
subcatfile=require("./myfiles/sub_cat")
sscat=require("./myfiles/sub_subcat")
pro=require("./myfiles/product")

app.use("/catser",catfile)
app.use("/subcatser",subcatfile)
app.use("/subsubcatser",sscat)
app.use("/productser",pro)
app.listen(2244)
console.log("2244")
