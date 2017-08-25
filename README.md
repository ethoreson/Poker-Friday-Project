# PokerNight

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Firebase setup instructions

* Create a firebase account, then select 'add firebase to you web app'.
* run the following in the command line:
* npm install angularfire2@4.0.0-rc.0 firebase --save
* include "types": [ "firebase" ] in your tsconfig.json file
* create a file in src/app called api-keys.ts. insert the following, replacing the values with the ones given to you from firebase:
* export var masterFirebaseConfig = {
  apiKey: "AIzaSyAhOnFGeUwA2ifEkTG-LY6spmHH32xcFig",
  authDomain: "poker-night-a3c0f.firebaseapp.com",
  databaseURL: "https://poker-night-a3c0f.firebaseio.com",
  storageBucket: ""poker-night-a3c0f.appspot.com",
  messagingSenderId: "231995991569"
}



## About

Created by Emilie Thoreson, as a Friday independent project. The Poker Night web app lists members of a poker group, along with stats for each player.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
