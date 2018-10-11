console.log('main tread');

const { MAIN } = require('./global.js')
const ipc = require('electron').ipcMain

ipc.on(MAIN, function (event, arg) {
    console.log(arg);
 })

module.exports.start = window => {
    console.log('main tread start');

    let tick = 0
    setInterval( () => {
        console.log("main tread tick");
        tick ++
        window.webContents.send(MAIN, tick)
    }, 2500)
}
