// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

window.$ = window.jQuery = require('jquery'); // not sure if you need this at all
window.Bootstrap = require('bootstrap');
const level = require('level')
const db = level('./db')
window.db = db

onload = () => {
    const {ipcRenderer} = require('electron')

    /* Synchronous message emmiter and handler */
    var userHosts = ipcRenderer.sendSync('getHosts', 'sync ping')
    //$("#content").html(syncData)
    
    //userHosts = userHosts.replace(/\n/g, "<br />");
    $("#main-container #input-hosts").val(userHosts);
    $("#btn-submit").click(function(){
      var hosts = $("#main-container #input-hosts").val();

      var result = ipcRenderer.sendSync('saveHosts', hosts)
      console.log(result)
    });


    /* Blocked for 10 sec!!! as waiting for synchronous-message. */




    /* Async message handler */
    /*
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg)
      console.log("TEST")
        $("#content").html(arg)
        console.log( $("#content") )
    });
    */
    /* Async message sender */
    //ipcRenderer.send('asynchronous-message', 'async ping')

}