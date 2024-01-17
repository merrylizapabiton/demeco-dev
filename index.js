let express = require("express")

let app = express()
let PORT = 6968

app.use(express.static(`${__dirname}/public`))
 
app.get("/signin", (_, res) => res.sendFile(`${__dirname}/public/signin.html`))
app.get("/forgot-password", (_, res) => res.sendFile(`${__dirname}/public/forgot-password.html`))
app.get("/register", (_, res) => res.sendFile(`${__dirname}/public/register.html`))
app.get("/user-settings", (_, res) => res.sendFile(`${__dirname}/public/user-settings.html`))
app.get("/admin-page", (_, res) => res.sendFile(`${__dirname}/public/admin-page.html`))

let handleServerConnection = (error) => console.log(error ? `${error.message}` : `Server is running on port ${PORT}`)
app.listen(PORT, handleServerConnection)
