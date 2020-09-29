const doWorkPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        //resolve([1,6,89])
        reject('No good :-(')
    }, 2000)  
})

doWorkPromise.then((result) => {
    console.log('Success!!', result)
}).catch((error)=> {
    console.log('Error', error)
})