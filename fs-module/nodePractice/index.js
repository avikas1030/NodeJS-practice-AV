const fs = require("fs")
const http = require("http")
const url = require("url")
const server = http.createServer((req, res) => {
  const location = url.parse(req.url, true)
  const filename =(location.pathname === "/" ? "index" : location.pathname.slice(1))
  const path = `./ui/${filename}.html`
  
  try{
    const data = fs.readFileSync(path)
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write(data)
    res.end()
  }
  catch(err){
    const data = fs.readFileSync("./ui/not-found.html")
    res.writeHead(404, {'content-type' : 'text/html'})
    res.write(data)
    res.end()
  }
  
})
server.listen(2001)
