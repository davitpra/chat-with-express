const express = require ("express")
const { success, error } = require("../../network/response");

const router = express.Router();

router.get('/',(req,res)=>{
    console.log(req.headers)
    res.header({
        "Custom-header":"Nuevo valor personalizado"
    });
    success(req, res, 'Lista de mensajes');
});

router.post('/',(req,res)=>{
    console.log(req.query);
    if(req.query.error == 'ok'){
        error(req, res, 'Error inesperado', 500, 'Es una simulación de errores');
    } else{
        success(req, res, 'Creado correctamente', 201);
    }
});

module.exports= router 