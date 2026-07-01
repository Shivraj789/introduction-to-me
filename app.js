const express = require("express");
const app = express();
const ejs=require('ejs')

const port = 3000;

// Set EJS
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index-2");
});



app.get('/roadmap',(req, res)=>{
    res.render( "roadmap")
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

}); 


