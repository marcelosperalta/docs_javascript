// const betterDeveloper = 'vanessa'
// function whoIsBetterCallback(callback, errorCallback) {
//     if (betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel') {
//         errorCallback({
//             name: 'This is wrong',
//             message: betterDeveloper + '? Really'
//         })
//     } else {
//         callback({
//             name: betterDeveloper,
//             message: "CDFs are the best"
//         })
//     }
// }
// whoIsBetterCallback((result) => {
//     console.log(result.name + '? Yeah! ' + result.message);
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// })

const betterDeveloper = 'vanessa'

function whoIsBetterCallback(callback, errorCallback) {

    return new Promise((resolve, reject) => {

        if (betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel') {
            reject({
                name: 'This is wrong',
                message: betterDeveloper + '? Really'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: "CDFs are the best"
            })
        }

    })
}

whoIsBetterCallback()
    .then((result) => {
        console.log(result.name + '? Yeah! ' + result.message)
    })
    .catch((error) => {
        console.log(error.name + ' ' + error.message);
    })