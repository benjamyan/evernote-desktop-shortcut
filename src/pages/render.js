// const ipc = require('electron').ipcRenderer

const elementList = [
    document.querySelectorAll('input[type="submit"]'), // form submission
    document.querySelectorAll('a') // a links
].flatMap( element=> Array.from(element) );

console.log(elementList)

// for (const item of elementList) {
//     elementList[item].addEventListener('click', function () {
//         console.log('clckskadskla')
//     //   ipc.send('asynchronous-message', 'ping')
//     })
// }