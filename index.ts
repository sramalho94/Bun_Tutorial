import figlet from "figlet"

const server = Bun.serve({
  port: 3000,
  fetch(req){
    const url = new URL(req.url)

    if (url.pathname == '/'){
    const body = figlet.textSync("Ello!")
    return new Response(body)
  } 
    if (url.pathname === '/about'){
      return new Response("About Me")
    }
    if (url.pathname === '/contact'){
      return new Response("Contact us")
    }

    return new Response('404')
  }
})

console.log(`Listening on PORT http://localhost:${server.port}`)