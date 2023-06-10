# Yugen Electron Wrapper
Cross-Platform Electron wrapper written in TypeScript for Yugen, complete with AdBlock!  
Now uses the amazing Yugen Arc Dark theme, created by cybrejon - check out their theme here: https://github.com/cybrejon/yugen-arc-dark-theme  
```
main build status: 100% (ready for build - Windows/macOS/Linux)
```
![screenshot.png](https://github.com/SpektacleFR/yugen-electron-wrapper/blob/f1fcbd2aaf98414e534668bd768ed601e107e4e2/home.png)

# How to use?

## Notice:
This was developed on an M2 Max MacBook Pro, so releases will only be available for ARM64 versions of the operating systems.  If you want to build for others, go right ahead, and I'll be happy to add them to the release.

## Windows
Download the most recent win64 package from the releases tab and launch `install.exe`.  Windows defender WILL catch this file as a virus, this is because it is not trusted by Microsoft.  I can assure you, it's a false positive.
If you wish to run a portable version of this, it's really simple: navigate to the `win-unpacked` folder and execute the exe file in there.

## Linux
Download the most recent AppImage from the releases tab and launch it.  If you so desire, you can create a desktop file for easy launch.  A guide can be found here: https://www.maketecheasier.com/create-desktop-file-linux/

## macOS
~~There is currently no MacOS build for this, since I do not have a proper codesign cert.  To build for MacOS, you need a mac-specific npm package and a developer account.  You're welcome to compile this and do it yourself though :)~~
macOS Build coming soon ;)

# Want to develop?
## Dependencies
You must have NodeJS installed and NPM for package management.

## Downloading the Project

All you have to do is clone the repository to a folder:
```
git clone https://github.com/SpektacleFR/yugen-electron-wrapper.git
```
Then navigate to the project folder:
```
cd yugen-electron-wrapper
```
Lastly, install the required packages:
```
npm install
```
And you're done!  Have fun developing!

# To-do

- [x] Build for MacOS - Doing this will be rather difficult because I don't have a proper codesign cert :(
- [x] Fix AdBlock crashing the MacOS APP build
