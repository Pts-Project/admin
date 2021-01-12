const express=require('express')
const app=express()
var bodyParser=require("body-parser"); 
const mongoose = require('mongoose')
const { MONGOURI } = require('./keys')
const { JWTSECRET } = require('./keys')
require('./models/user')
require('./models/events')
require('./models/admin')
require('./models/notification')






const methodOverride = require('method-override');
app.use(methodOverride('_method'));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
})); 

app.use(require('./routes/auth'))
mongoose.connect('mongodb://localhost:27017/file'
    ,{
      useNewUrlParser:true, 
      useUnifiedTopology:true
} )
  





mongoose.connection.on('connected',()=>{
    console.log("connected")
})
mongoose.connection.on('error',(err)=>{
       console.log("error connecting")
})
app.listen(process.env.PORT||3000,()=>{
     console.log("server is running succesfully")
})