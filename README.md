# wake-on-lan-sample

## Description

This is a wake-on-lan sample to use on any installation.

## Usage

### Installation

```sh
npm install
```
More about this [package](https://github.com/agnat/node_wake_on_lan).

### Run

Double click start.bat file to run the wol.js file,  
or  
Run the application with the following command:

```sh
node wol.js
```

### Setup

Global variables to customize application in wol.js

```js
const MAC = 'D8:5E:D3:83:82:71' // client mac address
const restDay = [1, 2] // Sunday - Saturday : 0 - 6
const intervalMaxTime = 5 // how many times you want to wake
const intervalFrequency = 1000 // how often you want to wake
```

