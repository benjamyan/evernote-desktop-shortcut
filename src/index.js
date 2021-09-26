const { ipcMain, app } = require('electron');
const createElectronWindow  = require('./electron/createWindow');
const watchElementsInWindow = require('./electron/watchElements');

const watchElectronInstance = ()=> {
    ipcMain.on('invokeAction', function(event, data){
        const result = processData(data);
        event.sender.send('actionReply', result);
    });
};

const initializeElectron = async ()=> {
    const win = await createElectronWindow();
    win.webContents.on('did-finish-load', function(data) {
        console.log("\nloaded!\n");
        //
        // watchElementsInWindow(data);
        // watchElectronInstance();
        //
        // console.log(document)
        // ipcMain.on('invokeAction', function(event, data){
        //     // const result = processData(data);
        //     console.log('action')
        //     event.sender.send('actionReply', result);
        // });
    });
    app.on('window-all-closed', function() {
        if (process.platform !== 'darwin') app.quit()
    });
};

(async function main(){
    try {
        app.whenReady()
            .then(
                () => initializeElectron()
            ).catch(
                (err)=> console.error(err)
            );
    } catch (err) {
        console.error(err);
        return process.exit(1);
    };
})();