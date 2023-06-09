const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.post('/', async (req, res) => {
  try {
    const { users } = req.body
    const newChat = await controller.addChat(users)
    response.success(req, res, newChat, 201)
  } catch (error) {
    response.error(req, res, 'Información inválida', 400, error.message)
  }
})

router.get('/', async (req, res) => {
  try {
    const allChats = await controller.getChats()
    response.success(req, res, allChats, 200)
  } catch (error) {
    response.error(req, res, 'Unexpected error', 500, error)
  }
})

router.get('/:userid', async (req, res) => {
  try {
    const {userid} = req.params
    const chatsList = await controller.getChats(userid)
    response.success(req, res, chatsList, 200)
  } catch (error) {
    response.error(req, res, 'Unexpected error', 500, error)
  }
})



router.delete('/:id', async(req,res) =>{
  try{
      const {id} = req.params
      //eliminamos con el controler
      await controller.deleteChat(id)
      response.success(req, res, `chat ${id} deleted`, 200)

  }catch (error) {
      response.error(req, res, "service error",500, error)
  }

})


module.exports = router