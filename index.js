const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req, res)=>{
    // const filePath = "/users/shubham/docs/report.pdf"

    // console.log("Basename:" + path.basename(filePath));
    // console.log("Dirname:" + path.dirname(filePath));
    // console.log("Extname:" + path.extname(filePath));

    // const parsed = path.parse(filePath)
    const fullPath = path.join("public","images","avtar.jpg")
    console.log(fullPath);
    // const absolutePath = path.resolve("public","image.jpg")
    // console.log(absolutePath);
    res.send("Path Module")
});

app.listen(3000,()=>{
    console.log("Server is run on port 3000");
})