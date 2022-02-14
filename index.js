// get environment variables
require('dotenv').config() 

const express = require('express')

const app = express()

// defining routes
app.get('/', function(req, res) {
    res.send(`
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; background-color: white;">
            <h2 style="text-align: center;">NAV BAR</h2>
        </div>
            <h1 style="text-align: center;">WHITE PAGE, BEWARE, I LIVE!<h1>
        </body>
    `)
})

// Tedfgeswfal Page
// Color Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="text-align: center; color: ${myColor};">${myColor} Page, I AM SINNISTAR! I HUNGER!</h1>
        </body>
    `)
})

app.listen(process.env.PORT, function (){
    console.log("I LIVE AGAIN!")
    
})