const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "WELCOME :v"
    })
})

app.listen(process.env.APP_PORT, () => {
    console.log('App listening on port ' + process.env.APP_PORT + ' !');
})

