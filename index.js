let express = require("express")
let cors = require("cors")

let app = express()
let PORT = 6969

app.use(cors())
app.use(express.static(`${__dirname}/public`))
 
app.get("/signin", (_, res) => {
    res.sendFile(`${__dirname}/public/signin.html`);
})

app.get("/register", (_, res) => {
    res.sendFile(`${__dirname}/public/register.html`);
})

let handleServerConnection = (error) => console.log(error ? `${error.message}` : `Server is running on port ${PORT}`)
app.listen(PORT, handleServerConnection)
// localhost:6969
// 127.0.0.1:6969
// demeco-dev
// https://github.com/edusuuu/demeco-dev
// 143.44.144.248