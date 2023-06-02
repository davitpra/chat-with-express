const express = require ("express")
const response = require("../../network/response");
const controller = require('./controller')

const router = express.Router();

router.get('/', async (req,res)=>{
    try {
        // traemos la query o por defecto null
        const filterMesseges = req.query.user || null
        // traemos los mensajes con el usuario
        const allMessage = await controller.getMessage(filterMesseges)
        response.success(req, res, allMessage, 200)
    } catch (error) {
        response.error(req, res, 'Unexpected Error', 500, error);
    }
});

router.post('/',async (req,res)=>{
    const {user, message} = req.body

    try {
    // creamos un mensaje con el controller.
    const fullMessage = await controller.addMessage(user, message)
    if (fullMessage) {
        response.success(req, res, fullMessage, 201);
      } else {
        throw Error;
      }
    } catch (error) {
        response.error(req, res, 'error en servidor', 500, error);
    }
});

// creamos una ruta especifica para hacer el patch
router.patch('/:id', async(req,res) =>{
    try{
        //obtenemos los parametros y el mensaje
        const {id} = req.params
        const{ message} = req.body
        //actualizamos con el controler
        const updateMessage = await controller.updateMessage(id, message)
        response.success(req, res, updateMessage, 200)
    }catch (error) {
        response.error(req, res, "error en el servidor",500, error)
    }

})

module.exports= router 
