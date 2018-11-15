const express = require("express");

const userRouter = require("./router");

const app = express();
const port = 3000;

app.get("/", (req,res) => res.send("/n Hello World GET !!!!!"));
app.use("/users/",userRouter);


app.listen(port,()=>
    console.log(`Server running at http://127.0.0.1:${port}/`)
);