const square = (n) => n*n
const squareLong = (n) => {
    return n*n
}

console.log(square(4))
console.log(squareLong(5))


const event = {
    name : "Birthday Party",
    guestList :["Paul","John","Jack"],
    //here i can not use the arrow function because i will not be able to access to this.guestList
    printGuestList(){
        console.log('Guest list for ' + this.guestList) 
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
//arrow functions are great candidates for all place eccept method because their this retains the value of enclosing context this
//Instead as method function we need this set to object the method s called on
}
event.printGuestList()