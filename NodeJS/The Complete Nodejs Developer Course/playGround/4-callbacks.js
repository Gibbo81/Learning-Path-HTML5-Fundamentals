

const add = (x, y , callback) => {
    setTimeout(() => {
        callback(x+y)
    }, 5000)
}

add(1, 4, (sum) => {
    console.log(sum)
})
