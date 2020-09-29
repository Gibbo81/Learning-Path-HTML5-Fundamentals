// object property shorthand
const name = 'Pippus'
const userAge = 19

const user = {
    name,  //if we need a property with the same name of an existing variable we ca use this short syntax
    age : userAge,
    location : 'Bologna'
}
console.log(user)

//destructuring object
 const o ={
    label : 'green book',
    price: 2,
    stock: 100,
    sellPrice: undefined
}
const {
    label: productLabel, //we can rename the name of the property, for example if the property was already taken
    stock,
    reading = 'No' //we can assign a default value used if the object doesn't have this property
} = o
console.log(productLabel)   
console.log(stock)
console.log(reading)
//it's possible to destructure an object passed as parameter

const f = (type, {label, stock})=>{ //in this way the code can directly read te object but it seem to me not so good
    console.log(type, stock, label)
}

f('order', o)