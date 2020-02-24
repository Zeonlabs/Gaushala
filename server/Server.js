const { ipcMain: ipc, dialog, ipcRenderer } = require("electron");

ipc.on("create-user", (event, arg) => {
  console.log("ippc console");

  event.sender.send("a", { SAVED: "File Saved" });
});

var http = require("http");
//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response
    res.end(); //end the response
  })
  .listen(8082, function() {
    console.log("server start at port 3000"); //the server object listens on port 3000
  });
