const express = require("express");
const app = express();

const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const User = require("./models/usermsg");
const port = process.env.PORT || 3000;

//setting path
app.use(express.urlencoded({extended:false}))
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");


//middleware
app.use(express.static(staticpath));
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.set("view engine" ,"hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);
//routing
app.get("/",(req,res)=>{
    res.render("index");
})

// app.get("/contact",(req,res)=>{
//     res.render("contact");
// })

app.post("/",async (req,res)=>{
    try{
        //res.send(req.body);
        const userData =new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }catch(error){
        res.status(500).send(error);        
    }
})
//server create
app.listen(port,()=>{
    console.log(`Connecting to port no. ${port}`);
})