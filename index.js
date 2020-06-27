const uuid = require('uuid-js');
const electron = require('electron');

const {
	app,
	BrowserWindow,
	Menu,
	ipcMain
} = electron;

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		},
		title: ' ',
		width: 700,
		height: 400
	});

	const startUrl = process.env.ELECTRON_START_URL || `file://${__dirname}/build/index.html`

	mainWindow.loadURL(startUrl);
	mainWindow.on('closed', () => {
		app.quit();
		mainWindow = null;
	});
});