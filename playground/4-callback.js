// setTimeout( () => {
//     console.log('The seconds are up')
// }, 500)

// const names = ['Jiew', 'Pang', 'Andrew']
// const shortNames = names.filter( (name) => {
//     return name.length <= 4
// })

// // console.log( shortNames )

// const geocode = (address, callback) => {
//     setTimeout( () => {
//         const data = {
//             latitude: 0,
//             longitude:  0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Japan', (data) => {
//     console.log(data)
// })


const add = ( x, y, callback) => {
    setTimeout( () => {
        const result = x+y
        callback(result)
    }, 2000)
}
add(1, 4, (sum) => {
    console.log(sum)
})