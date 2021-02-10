// Callback
// const getDataCallback = (callback) => {
//     setTimeout(() => {
//         callback('This is my callback error', undefined)
//         callback('This is my callback error', undefined)
//     }, 2000);
// }

// getDataCallback((err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         conole.log(data);
//     }
// })

// Promise
const getDataPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
        }, 2000);
    })
}

getDataPromise(7).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err);
})