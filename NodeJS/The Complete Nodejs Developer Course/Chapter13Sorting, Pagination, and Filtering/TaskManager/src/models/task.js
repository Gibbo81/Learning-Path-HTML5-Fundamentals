const mongoose = require('mongoose') 

const userSchema = new mongoose.Schema({
    description : {
        type : String,
        trim: true,
        required: true
    },
    completed :{
        type : Boolean,
        default : false
    },
    owner :{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    }
},{
  timestamps: true  //this adds two new columns to the db createdAt - updatedAt  
})

const Task = mongoose.model('Task', userSchema)

module.exports = Task