const { app, BrowserWindow } = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        width: 1024,
        height: 800,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false         
        }
    })
    window.loadFile(__dirname + '/src/index.html')
   window.webContents.openDevTools()
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})