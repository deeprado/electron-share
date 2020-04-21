import { app, BrowserWindow } from 'electron'
const electron = require('electron')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

/**
 * 获取屏幕信息
 */
let defaultWorkAreaSize = {
  width: 1280,
  height: 716
}

  /**
 * 获取桌面可用大小
 */
function workAreaSize () {
  const minWidth = 1280
  const minHeight = 716

  // 屏幕工作区域
  const {
    width,
    height
  } = electron.screen.getPrimaryDisplay().workAreaSize
  // const displays = electron.screen.getAllDisplays()
  // const externalDisplay = displays.find((display) => {
  //   return display.bounds.x !== 0 || display.bounds.y !== 0
  // })

  // const win = (externalDisplay) ? new BrowserWindow({
  //   x: externalDisplay.bounds.x + 50,
  //   y: externalDisplay.bounds.y + 50
  // }) : false

  const tmpWidth = (width < minWidth) ? minWidth : ((width > 1440) ? 1440 : width)
  const tmpHeight = (height < minHeight) ? minHeight : ((height > 797) ? 797 : height)
  Object.assign(defaultWorkAreaSize, {
    width: tmpWidth,
    height: tmpHeight
  })

  // // 当前鼠标绝对位置
  // electron.screen.getCursorScreenPoint()
  // // 返回主窗口
  // electron.screen.getPrimaryDisplay()
  return defaultWorkAreaSize
}

function createWindow () {

  const {
    width,
    height
  } = workAreaSize();

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: height,
    useContentSize: true,
    width: width
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
