const express = require ("express")
const app = express ()
// conectamos la app como un servidor http
// http es un modulo de node.
const server = require("http").Server(app)

// traemos el objeto socket
const {connect} = require('./socket')
const router = require('./network/routes')
const dbConnection = require ('./db')
const {uri} = require ('./config')



dbConnection(uri)
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//conectamos el servidor a socket
connect (server)
router(app)

app.use("/",  express.static ('public'))
// cambiamos por serve
server.listen(3000, ()=>{
    console.log(" la aplication esta escuchando en el port http://localhost::3000");
});
