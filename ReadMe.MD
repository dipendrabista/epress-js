####EXPRESS JS Tutorials

Fast, unopinionated{kunai convention xaina jasari project develop gare pani hunxa}, minimalist web framework for Node.js
 
Express JS Application:
      
      Web Applications
         Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
      APIs
        With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
      Performance
        Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
      Frameworks
        Many popular frameworks are based on Express.
        

Basic express hello world app

step 1: mkdir myapp
step 2: cd myapp
step 3: npm init->enter app.js as an entry point ,default is index.js
            npm init -y ->do not prompt anything
step 4: npm i express
            npm i express --no-save-->temporary install
step 5: create app.js and copy following code inside app.js
            
``` javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```
    
step 6:run app.js

    node app.js
    
step 6:open application in browser in using http://localhost:3000
      
<br/>


NODEMON

    Nodemon will restart a Node application when file changes in a directory are detected.

    step 1: npm install nodemon -g
    step 2: nodemon app.js
    
      
LIVE-SERVER  

    Live-server on the other hand, will refresh your browser when changes are detected to any supported file types (e.g. HTML, JS, CSS).
    It also enables Ajax requests when you are working locally — these don't normally work with the file:// protocol.  
     
     STEP 1: npm i -g live-server
     
     STEP 2:create simple index.html
     
     step 3:live-server index.html
            
            make changes on index.html ,it will automatically reload the browser.
            
            
        
    