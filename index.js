const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('hello, hello')
})

//ADDITION
app.get('/add/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x + y}`)
})

//SUBTRACTION
app.get('/subtract/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x - y}`)
})

//MULTIPLY
app.get('/multiply/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x * y}`)
})

//DIVIDE
app.get('/divide/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x / y}`)
})

//Listen to PORT
app.listen(PORT, () => {
    console.log(`all is good`)
})