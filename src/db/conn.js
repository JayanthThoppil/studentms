const mongoose = require("mongoose");
//connecting db to mongodb atlas
const DB = 'mongodb+srv://student:qwert@cluster0.otx50.mongodb.net/studentregistration?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})

////connecting db to mondodb
// mongoose.connect("mongodb://localhost:27017/fullproject",{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("connection successful");
// }).catch((error)=>{
//     console.log(error);
// })