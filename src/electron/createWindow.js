const { BrowserWindow } = require('electron');

module.exports = async function() {
    console.log("createElectronWindow");
    const win = new BrowserWindow({
        width: 1200,
        height: 700
    });
    win.webContents.loadURL('https://www.evernote.com/Login.action');
    console.log("returning win..")
    return win;
}