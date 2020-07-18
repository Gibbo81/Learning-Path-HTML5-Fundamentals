const calculateTip = (total, tipPercentual = .25) =>{
    const tip = total * tipPercentual
    return total + tip
}

module.exports = {
    calculateTip    //simplified version ===   calculateTip:calculateTip
}