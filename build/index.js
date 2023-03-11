"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const cross_fetch_1 = require("cross-fetch");
const fs_1 = require("fs");
const adblocker_electron_1 = require("@cliqz/adblocker-electron");
const fs = __importStar(require("fs"));
function getUrlToLoad() {
    let url = 'https://yugenanime.ro';
    return url;
}
function getCSS() {
    let css = fs.readFileSync('assets/styles.css', 'utf-8');
    return css;
}
let mainWindow = null;
async function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            nodeIntegrationInSubFrames: true,
        },
        width: 1000,
        height: 700,
        show: false,
        icon: __dirname + '/assets/icons/512x512.png'
    });
    const blocker = await adblocker_electron_1.ElectronBlocker.fromLists(cross_fetch_1.fetch, adblocker_electron_1.fullLists, {
        enableCompression: true,
    }, {
        path: 'engine.bin',
        read: async (...args) => (0, fs_1.readFileSync)(...args),
        write: async (...args) => (0, fs_1.writeFileSync)(...args),
    });
    blocker.enableBlockingInSession(mainWindow.webContents.session);
    mainWindow.setBackgroundColor('#101112');
    mainWindow.loadURL(getUrlToLoad());
    mainWindow.setMenuBarVisibility(false);
    mainWindow.setAutoHideMenuBar(true);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    mainWindow.on('ready-to-show', () => {
        mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.webContents.insertCSS(getCSS());
        mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.show();
    });
    mainWindow.on('page-title-updated', () => {
        mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.webContents.insertCSS(getCSS());
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
