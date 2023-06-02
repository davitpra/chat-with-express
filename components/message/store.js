const db = require('mongoose');
const Model = require('./model');
require('dotenv').config()

const user = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST

const uri =`mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority`;

console.log(uri)
//nos conectamos a la db
db.connect(uri, { 
     useNewUrlParser: true,
     useUnifiedTopology: true 
    })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err))

const addMessage =  (message) => {
    //creamos un nuevo objeto con message
    const myMessage = new Model(message);
    // lo guardamos en la db
    myMessage.save();
  }

const getMessages = async () => {
    //devolvemos todos los mensajes
    const messages = await Model.find()
    return messages
}

const updateText = async (id, text) => {
    // encontramos el mensaje
    const foundMessage= await Model.findById(id)
    // cambiamos el mensaje
    foundMessage.message = text
    //salvamos
    foundMessage.save()
}

module.exports = {
    add: addMessage,
    list:getMessages,
    updateText

}
