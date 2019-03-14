# React Native Boilerplate

## Description
Boilerplate for a React Native Project

## Features

* [Redux](http://redux.js.org/)
* [Redux Observable](https://redux-observable.js.org/)
* [Native Base](https://nativebase.io/)
* [React Navigation](https://reactnavigation.org/) 
* [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) 
* [React Native Config](https://github.com/luggit/react-native-config/) 
* [Reactotron](https://github.com/infinitered/reactotron/) 

## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions, eact Native CLI Quickstart tab](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git clone https://github.com/victorkvarghese/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Open `index.js` and replace `'ReactNativeBoilerPlate'` by your project name
6. Open `app.json` and replace `'ReactNativeBoilerPlate'` by your project name 

7. Run `yarn` or `npm install` to install dependencies

8. Start the packager with `npm start` or `yarn start`
9. Connect a mobile device to your development machine
10. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device

## Command line scripts
  - `start`: Start react packager
  - `test-integration:cli:local`: run integration cli script with setting up dev environment
  - `android-dev`: run app on android simulator with .env.dev configuration
  - `android-prod`: run app on android simulator with .env.prod configuration
  - `build-android-dev`: build android .apk with .env.dev configuration
  - `build-android-prod`: build android .apk with .env.prod configuration


## Build
  ### Android
  In order to build android .apk one of commands is needed to run inside root folder:
  - `build-android-dev`: build android .apk with .env.dev configuration
  - `build-android-prod`: build android .apk with .env.prod configuration
  Produces .apk file is in 'android/app/build/outputs/apk/app-release.apk' directory.

  ### IOS
  In order to build IOS .ipa file next steps are needed:
  - Select scheme: Development-Release, Local-Release, Production-Release,Default-Release
    NOTE: Default-Release scheme uses .env configuration which is specific to current branch
  - Change ratemytate/AppDelegate.m as described in file comments
  - Select Device: Generic IOD device
  - Select Product->Archive from top menu
  - Select export from Archives window
  - Select Save for Development Deployement
  - Select RateMyTate GmbH Development Team
  - Select Export one app for all compatible devices
  - Save .ipa file do desired location
