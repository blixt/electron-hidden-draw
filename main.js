const electron = require('electron');
const path = require('path');
const url = require('url');

electron.app.on('ready', () => {
  const win = new electron.BrowserWindow({
    width: 600,
    height: 600,
    frame: false,
    transparent: true,
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  let hidden = true;
  setInterval(() => (hidden = !hidden) ? win.show() : win.hide(), 2000);
});
