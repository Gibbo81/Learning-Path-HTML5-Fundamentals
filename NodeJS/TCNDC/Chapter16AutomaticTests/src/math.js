const calculateTip = (total, tipPercentual = .25) =>{
    const tip = total * tipPercentual
    return total + tip
}

const fahrenheitToCelsius = (temp) => (temp-32) / 1.8

const celsiusToFahrenheit = (temp) => (temp * 1.8) + 32

const addAsync = (a,b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{            
            resolve(a+b)
        }, 2000)  
    })    
}

const forEach = (items, callback) => {
    for( let index =0; index<items.length; index++ ){
        callback(items[index])
    } 
}

module.exports = {
    calculateTip,    //simplified version ===   calculateTip:calculateTip
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    addAsync,
    forEach,
}