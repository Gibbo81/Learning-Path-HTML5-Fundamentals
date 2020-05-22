const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required : true,
        trim: true
    },
    email :{
        type : String,
        required: true,
        unique: true,
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
    },
    token :[{       //it's ana array of items
        token : {   //how each items of the array is made
            type : String,
            required : true
        }
    }]
})

//NEW add a method to the instance created when reading from db
userSchema.methods.generateToken = async function(){ //it's a non static method so 'this' mapping is important and we can not use lambda => 
    const user = this    
    const token = jwt.sign({_id: user._id.toString()}, 'thisismynewtoken')
    user.token= user.token.concat({token})
    await user.save()

    return token
}

//NEW add a method (static equivalent) to the User class
userSchema.statics.findByCredential = async (email, password) =>{
    const user = await User.findOne({email : email })

    if(!user)
        throw new Error('Unable to log in')
    
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch)
        throw new Error('Unable to log in')
    
    return user;
}

//NEW
//function to be executed before schema validation
userSchema.pre('save', async function(next){      //here 'this' binding is important so wedo not use lambda
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