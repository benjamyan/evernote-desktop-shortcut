const { ipcRenderer } = require('electron');

const getElementsToWatch = (win)=> {
    console.log(win)
    const elementList = [
        win.querySelectorAll('input[type="submit"]'), // form submission
        win.querySelectorAll('a') // a links
    ];
    return elementList.flatMap(
        element=> Array.from(element)
    );
};

module.exports = function(win) {
    console.log("watch ele")
    const elementsToWatch = getElementsToWatch(win);
    console.log(elementsToWatch)
    authButton.addEventListener('click', function(){
        ipcRenderer.once('actionReply', function(event, response){
            processResponse(response);
        })
        ipcRenderer.send('invokeAction', 'someData');
    });
}