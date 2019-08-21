let http = require('http')

let server = http.createServer()

server.on('request', (request, response) => {

    response.writeHead(200, {
        'Content-type' : 'text/html ; charset=utf-8'
    })
    response.end('il y a eu une requete')
})

server.listen(8080)