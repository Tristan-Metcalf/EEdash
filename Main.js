const electron = require("electron");

const { app, BrowserWindow } = require("electron");
var Employees = require("./Birthday");

function update() {
  console.log(Employees.Employees);
}

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  win.loadFile("index.html");
}

app.on("ready", createWindow);
app.on("browser-window-focus", update);
