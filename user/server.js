exp=require("express")
bp=require("body-parser")
app=exp()
app.use(bp.json())


catfile=require("./myfiles/cat_server")



app.use("/catser",catfile)


app.listen(2244)
console.log("2244")
