import http from 'http'
let server=http.createServer()

let delay = [2000, 1000, 1500];
let i = 0;
server.on('request',(req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain',
        'Access-Control-Allow-Origin':'*',
        'Cache-Control':'max-age=0',
    })
    setTimeout(() => {
        res.end('hello world222');
    }, delay[i]);
})
server.listen(9001)
console.log('server running at http://localhost:9001')