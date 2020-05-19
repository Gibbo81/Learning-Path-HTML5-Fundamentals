const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
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
        // validate : (value) =>{       //same result only different syntax
        //     if(value <18)
        //         throw new Error('Need grater age')
        // }
    }
})

module.exports = User