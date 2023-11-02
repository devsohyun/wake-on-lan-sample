// global variables
const wol = require('wake_on_lan')
const MAC = 'D8:5E:D3:83:82:71' // client mac address
const restDay = [1, 2] // Sunday - Saturday : 0 - 6
const intervalMaxTime = 5 // how many times you want to wake
const intervalFrequency = 1000 // how often you want to wake
let date_ob = new Date()
let day = date_ob.getDay()
let foundRestDay = false

// check rest days
for (let i = 0; i < restDay.length; i++) {

    if (day == restDay[i]){
        // don't run the script
        console.log("Not sending wol because it's the rest day")
        foundRestDay = true
        // terminate nodejs
        process.exit()
    }
}

// send wol
if (!foundRestDay) {

    let timesRun = 0
    let interval = setInterval(() => {

        timesRun += 1
        if(timesRun === intervalMaxTime){
            clearInterval(interval)
        }

        // wake on lan    
        wol.wake(MAC)
        wol.wake(MAC, function(error) {
            if (error) {
                // handle error
                console.log("ERROR");
            } else {
                // done sending packets
                console.log("SENT")
            }
        })
        const magic_packet = wol.createMagicPacket(MAC)

        // make sure the last iteration has finished
        if (timesRun === intervalMaxTime) {
            setTimeout(() => {
                // terminate nodejs
                process.exit(); 
            }, intervalFrequency)
        }

    }, intervalFrequency)    
}