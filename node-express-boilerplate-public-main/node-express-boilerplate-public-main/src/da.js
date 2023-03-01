const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const { json } = require('express');
const port = 3000
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
// app.get("/",  (req,resp)=>{
//     resp.json('Hello world')
// })
app.post('/add', (req, resp) => {
    let { num1, num2 } = req.body;
    let sum = num1 + num2
    resp.send({
        "status": (validateNumbers(num1, num2, sum)) ? 'Error' : 'success',
        "message": (validateNumbers(num1, num2, sum)) ? validateNumbers(num1, num2, sum) : 'the sum of given two numbers',
        "result": sum

    }
    )
})

app.post('/sub', (req, resp) => {
    let { num1, num2 } = req.body;
    let sum = num1 - num2
    resp.send({
        "status": (validateNumbers(num1, num2, sum)) ? 'Error' : 'success',
        "message": (validateNumbers(num1, num2, sum)) ? validateNumbers(num1, num2, sum) : 'the difference of given two numbers',
        "result": sum

    }
    )
})

app.post('/divide', (req, resp) => {
    let { num1, num2 } = req.body;
    let sum = num1 / num2
    if (num2 == 0) {
        resp.send({
            "status": 'error',
            "message": "cannot divide by zero",
            "result": sum
        })
    }
    else {
        resp.send({
            "status": (validateNumbers(num1, num2, sum)) ? 'Error' : 'success',
            "message": (validateNumbers(num1, num2, sum)) ? validateNumbers(num1, num2, sum) : 'The division of given numbers',
            "result": sum

        }
        )
    }
})

app.post('/multiply', (req, resp) => {
    let { num1, num2 } = req.body;
    let sum = num1 * num2

    resp.send({
        "status": (validateNumbers(num1, num2, sum)) ? 'Error' : 'success',
        "message": (validateNumbers(num1, num2, sum)) ? validateNumbers(num1, num2, sum) : 'The product of given numbers',
        "result": sum

    }
    )
})

function validateNumbers(n1, n2, result) {
    if (n1 < -1000000 || n2 < -1000000 || result < -1000000) return 'Underflow'
    else if (n1 > 1000000 || n2 > 1000000 || result > 1000000) return 'Overflow'
    else if (/[A-za-z]+/.test(n1) || /[A-za-z]+/.test(n2)) return 'Invalid data types'
    return false
}
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;