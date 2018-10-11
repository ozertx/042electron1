// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron')
const { MAIN } = require('./global.js')

const ipc = electron.ipcRenderer

ipc.on(MAIN, (event, arg) => {
    console.log(arg);
    ipc.send(MAIN, arg)
})

// Other const's removed for brevity

// var price = document.querySelector('h1')

// Add these two variables
var targetPriceVal;
//var targetPrice = document.getElementById('targetPrice')






//---------------------------------------------------------------------
// const ipc = electron.ipcRenderer
//
// const updateBtn = document.getElementById('updateBtn')
//
// updateBtn.addEventListener('click', function () {
//   ipc.send('update-notify-value', document.getElementById('notifyVal').value)
//
//   // Close this window
//   var window = remote.getCurrentWindow();
//   window.close();
// })
