const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: { nodeIntegration: true }
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

let server = require("../server/dist/server.js");

function slowdown() {
  console.log("this is a log in slowDown");
  for (var i = 0; i < 100000; i++) {
    const x = {
      y:
        Math.ceil(i) +
        "sdsfjdlfjlkMNFONnsdno".slice(4, (Math.random() * 20) | 0)
    };
    eval("(" + JSON.stringify(x) + ")");
  }
}

slowdown();

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
