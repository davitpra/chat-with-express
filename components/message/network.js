const express = require ("express")
const response = require("../../network/response");
const controller = require('./controller')

const router = express.Router();

router.get('/',(req,res)=>{
    console.log(req.headers)
    res.header({
        "Custom-header":"Nuevo valor personalizado"
    });
    success(req, res, 'Lista de mensajes');
});

router.post('/',async (req,res)=>{
    // obtenemos el usuario y el mensaje del body
    const {user, message} = req.body

    //manejamos el error
    try {
    // enviamos el usuario y el mensaje al controlador
    const fullMessage = await controller.addMessage(user, message)
    // si existe el mensaje mandamos el mensaje
    if (fullMessage) {
        response.success(req, res, fullMessage, 200);
      } else {
        // caso contrario manejamos el error
        throw Error;
      }
    // lanzamos el error 
    } catch (error) {
        response.error(req, res, 'error en servidor', 500, 'detalles del error: ninguno, solo probando');
    }
});

module.exports= router 