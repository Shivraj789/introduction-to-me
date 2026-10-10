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
  {
    title: "Portfolio Website",
    category: "Web",
    description: "Personal site with a 3D project carousel.",
    image: "/image/project1.png",
    link: "https://example.com/portfolio"
  },
  {
    title: "Weather App",
    category: "App",
    description: "Live forecasts with a clean iOS-style UI.",
    image: "/image/project2.png",
    link: "https://example.com/weather"
  },
  {
    title: "Task Manager",
    category: "Productivity",
    description: "Simple to-do list with reminders.",
    image: "/image/project3.png",
    link: "https://example.com/tasks"
  },
  {
    title: "E-commerce Store",
    category: "Web",
    description: "Product catalog with cart and checkout.",
    image: "/image/project4.png",
    link: "https://example.com/store"
  },
  {
    title: "Chat App",
    category: "App",
    description: "Real-time messaging with rooms.",
    image: "/image/project5.png",
    link: "https://example.com/chat"
  },
  {
    title: "Blog Platform",
    category: "Web",
    description: "Write and publish posts with markdown.",
    image: "/image/project6.png",
    link: "https://example.com/blog"
  },
  {
    title: "Fitness Tracker",
    category: "Health",
    description: "Log workouts and track progress.",
    image: "/image/project7.png",
    link: "https://example.com/fitness"
  }
];

app.get("/projects", (req, res) => {
  res.render("projects", { projects1 });
});

app.get('/404', (req, res) => {
    res.render( "404");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

}); 


