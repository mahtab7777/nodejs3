var http= require('http')

http.createServer(function(req, res){
    res.write('Mahtab Malik A Devops Engineer')
    res.end()
}).listen(80)
