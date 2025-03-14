var http= require('http')

http.createServer(function(req, res){
    res.write('Mahtab Malik A Backend Developer')
    res.end()
}).listen(80)
