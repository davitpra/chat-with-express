const express = require ("express")
const multer = require ( 'multer')

const response = require("../../network/response");
const controller = require('./controller')

const router = express.Router();
// config para guardar archivos
const upload = multer ({
    // donde quiero que lo guarde
    dest: "public/files/"
})

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

router.post('/',
// ejecutamos multer como un solo archivo llamado file
    upload.single('file'),
    async (req,res)=>{
        try {
            const {user, message, chat} = req.body
            //obtenemos el file
            const file = req.file
            // creamos un mensaje con el controller.
            const responseMessage = await controller.addMessage(user, message, chat, file)
            response.success(req, res, responseMessage , 201)
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

// creamos una ruta especifica para hacer el delete
router.delete('/:id', async(req,res) =>{
    try{
        //obtenemos los parametros y el mensaje
        const {id} = req.params
        //eliminamos con el controler
        await controller.deleteMessage(id)
        response.success(req, res, `message ${id} deleted`, 200)

    }catch (error) {
        response.error(req, res, "error en el servidor",500, error)
    }

})

module.exports= router 
