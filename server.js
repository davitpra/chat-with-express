// Create a server
const express = require ("express")
const app = express ()
const server = require("http").Server(app)

// imports
const cors= require ('cors')
const {connect} = require('./socket')
const router = require('./network/routes')
const dbConnection = require ('./db')

//config
const {uri, port} = require ('./config')

// Conection with db
app.use(cors())
dbConnection(uri)
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//connection with socket
connect (server)

//router
router(app)

// ? Serve static files from the React app

// serve static files from public
// app.use("/",  express.static ('public'))

// listen server
server.listen(port, ()=>{
    console.log( `la aplication esta escuchando en el port http://localhost::${port}`);
});
