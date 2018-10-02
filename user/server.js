exp=require("express")
bp=require("body-parser")

jst=require("jsonwebtoken")
bc=require("bcrypt")

//app.use()
app=exp()
app.use(bp.json())
sec=require("./myfiles/encript")

catfile=require("./myfiles/cat_server")
subcatfile=require("./myfiles/sub_cat")
sscat=require("./myfiles/sub_subcat")
pro=require("./myfiles/product")
userd=require("./myfiles/userlog")
orde=require("./myfiles/orders")
pay=require("./myfiles/payment")

app.use(exp.static('src/assets/images'))



app.use(exp.static("dist"))

app.use("/catser",catfile)
app.use("/subcatser",subcatfile)
app.use("/subsubcatser",sscat)
app.use("/productser",pro)
app.use("/userser",userd)
app.use("/userorders",orde)
app.use("/payment",pay)
app.listen(2244)
console.log("2244")


