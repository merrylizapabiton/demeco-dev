let express = require("express")
let cors = require("cors")

let app = express()
let PORT = 6969

app.use(cors())
app.use(express.static(`${__dirname}/public`))
 
app.get("/signin", (_, res) => {
    res.sendFile(`${__dirname}/public/signin.html`);
})

let handleServerConnection = (error) => console.log(error ? `${error.message}` : `Server is running on port ${PORT}`)
app.listen(PORT, handleServerConnection)
