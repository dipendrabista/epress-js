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

THUNDER CLIENT EXTENSION FOR VSCODE

    similar to postman,vscode mai api test garna sakinxa ,window switch garnupardaina 
    ,ram save hunxa same application ma open hunevayekole. postman use garne ho vane
    vscode bata arko application ma janu parne hunxa 
   
SERVING STATIC CONTENTS

    express.static(root, [options]) ==>built in middleware just like filter in servlet /interceptor in angular
    app.use(express.static("public"))
    
    we can directly access these contents from the browser e.g http://localhost:3000/home.html
    
    Serving static files in Express
    To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
    
    The function signature is:
    
    express.static(root, [options])
    The root argument specifies the root directory from which to serve static assets. For more information on the options argument, see express.static.
    
    For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:
    
    app.use(express.static('public'))
    Now, you can load the files that are in the public directory:
    
    http://localhost:3000/images/kitten.jpg
    http://localhost:3000/css/style.css
    http://localhost:3000/js/app.js
    http://localhost:3000/images/bg.png
    http://localhost:3000/hello.html
    Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
    To use multiple static assets directories, call the express.static middleware function multiple times:
    
    app.use(express.static('public'))
    app.use(express.static('files'))
    Express looks up the files in the order in which you set the static directories with the express.static middleware function.
    
    NOTE: For best results, use a reverse proxy cache to improve performance of serving static assets.
    
    To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory, as shown below:
    
    app.use('/static', express.static('public'))
    Now, you can load the files that are in the public directory from the /static path prefix.
    
    http://localhost:3000/static/images/kitten.jpg
    http://localhost:3000/static/css/style.css
    http://localhost:3000/static/js/app.js
    http://localhost:3000/static/images/bg.png
    http://localhost:3000/static/hello.html
    However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
    
    const path = require('path')
    app.use('/static', express.static(path.join(__dirname, 'public')))
    
    
    
    
    
            
        
    