const http = require('http')
const app = require('./app')
const server = http.createServer(app)

const port = process.env.PORT || 5000

const db = require('./db');


server.listen(port, ()=>{
    console.log('Server is listening on port ' + port)
})
