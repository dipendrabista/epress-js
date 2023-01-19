const express = require('express')
const app = express()
const port = 3000
//serving static contents like html,css,js,image
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})