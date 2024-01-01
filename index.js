import express from "express"

let app = express()
let PORT = 6969

app.use(express.static('public'))


let handleServerConnection = (error) => console.log(error ? `${error.message}` : `Server is running on port ${PORT}`)
app.listen(PORT, handleServerConnection)
// localhost:6969
// 127.0.0.1:6969