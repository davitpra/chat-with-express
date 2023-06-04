const Model = require('./model');

const addMessage =  (message) => {
    //creamos un nuevo objeto con message
    const myMessage = new Model(message);
    // lo guardamos en la db
    myMessage.save();
  }

const getMessages = async (filterUser) => {
    let filter = {}
    if (filterUser !== null) {
      filter = { user: filterUser}
    }
    const messages = await Model.find(filter)
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

const deleteMessenges = async (id) => {
  // encontramos el mensaje
  return await Model.deleteOne({_id:id})

}

module.exports = {
    add: addMessage,
    list:getMessages,
    update:updateText,
    delete:deleteMessenges

}
