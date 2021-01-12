const mongoose=require('mongoose')
const  notificationschema= new mongoose.Schema({
    indexnumber:{
          type:String,
          required:false,
          default:"0"
    },







    name:{
        type:String,
        required:true
    },
    category:
    {
         type:String,
         required:true
    },
    date: { type: Date, default: Date.now,required:false},
     description:
     {
         type:String,
         required:false
     },
    
    
    
    
    
    })
mongoose.model("Notification",notificationschema)