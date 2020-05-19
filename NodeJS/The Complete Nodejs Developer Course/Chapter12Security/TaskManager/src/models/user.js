const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required : true,
        trim: true
    },
    email :{
        type : String,
        required: true,
        lovercase: true,
        validate(value){
            if (!validator.isEmail(value))
                throw new Error('invalid mail', value)
        }
    },
    password :{
        type : String,
        required : true,
        trim : true,
        validate(value){
            if (value.toLowerCase().includes('password') || (value.length < 7))
                throw new Error('invalid password')
        }
    },
    age: { 
        type: Number ,
        default: 18,
        validate(value){
            if(value <18)
                throw new Error('Need grater age')
        }
    }
})

//function to be executed before schema validation
userSchema.pre('save', async function(next){      //here this binding is iportatn so wedo not use lambda
    //this is user we are gonna to save
    const user = this
    console.log ('Just before saving')
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }   

    next() //to call when the pre-elaboration is done
})

const User = mongoose.model('User', userSchema)

module.exports = User