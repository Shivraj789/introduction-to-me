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

const projects1 = [
  { title: "Portfolio Site", description: "Personal portfolio built with React." },
  { title: "Chat App", description: "Real-time chat using Socket.io." },
  { title: "Task Tracker", description: "Kanban-style task manager." },
];

app.get('/projects', (req, res) => {
  res.render("project1", { projects1 });
});

app.get('/404', (req, res) => {
    res.render( "404");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

}); 


