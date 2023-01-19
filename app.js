const express = require('express')
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
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})