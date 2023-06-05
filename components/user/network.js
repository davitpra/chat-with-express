const express = require ("express")
const response = require("../../network/response");
const controller = require('./controller')

const router = express.Router();


router.get('/', async (req,res)=>{
    try {
        // traemos la query o por defecto null
        const filterUser = req.query.user || null
        // traemos los mensajes con el usuario
        const allUser = await controller.getUser(filterUser)
        response.success(req, res, allUser, 200)
    } catch (error) {
        response.error(req, res, 'Unexpected Error', 500, error);
    }
});

router.post('/',async (req,res)=>{
    try {
        const {name} = req.body
        // creamos un nombre al usuaio con el controller.
        await controller.addUser(name)
            .then ( () => {response.success(req, res, 'User added', 201)})
    } catch (error) {
        response.error(req, res, 'error en servidor', 500, error);
    }
});

module.exports= router 
