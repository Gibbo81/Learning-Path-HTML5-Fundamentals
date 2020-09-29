
const add = (a,b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{            
            resolve(a+b)
        }, 2000)  
    })    
}

//old solution promoise chain
add(1,2)
.then(sum =>{
    console.log(sum)
    return add(sum, 3)
})
.then(sum2 => {
    console.log(sum2)
    return add(sum2, 5)    
})
.then(total => 
    console.log(total))
.catch((error) => {
    console.log(error)    
})

//New solution async await
var f = async function(){
    var t = await add (1,2)
    t = await add (t,2)
    t = await add (t,2)
    return await add (t,3)       
}

f().then(tot => console.log('new: ', tot))
   .catch(e => console.log(e))
