const express = require ("express")
const router = require('./network/routes')
const dbConnection = require ('./db')
const {uri} = require ('./config')

const app = express ()

dbConnection(uri)
app.use(express.json());
app.use(express.urlencoded({extended : false}));
router(app)

app.use("/",  express.static ('public'))

app.listen(3000);
console.log(" la aplication esta escuchando en el port http://localhost::3000");