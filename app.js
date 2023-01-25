const express = require('express')
const path = require('path')
const app = express()
const port = 3000
//serving static contents like html,css,js,image
app.use(express.static("public"))

// custom middleware
const myMiddleware = (req, res, next) => {
    console.log("Request from :" + req.url);
    next();
};
app.use(myMiddleware)
app.get('/', (req, res) => {

    //sending text content
    res.send('Hello World')
})

//return JSON object as response
app.get('/json', (req, res) => {

    //we can set status code as well but express set the content type ,status code automatically for us.
    res.status(200);
    res.json(
        {
            name: 'Dipendra Bista',
            age: 29,
            address: 'Chatara'
        }
    )
})

//return html page
app.get('/html', (req, res) => {
    res.sendFile(path.join(_dirname, '/index.html'))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})