const Model = require('./model');

const addMessage =  async (message) => {
  try {
    //creamos un nuevo objeto con message
    const myMessage = new Model(message);
    // lo guardamos en la db
    await myMessage.save();
    return myMessage
  } catch (e) {
    throw new Error(err);
  }
  }

const getMessages = async (query) => {  
    let filter = {}
    if (query) {
      query.chat ? (filter.chat = query.chat) : null;
      query.id ? (filter._id = query.id) : null;
    }
    const messages = await Model.find(filter)
      // le da la relacion al campo user 
      .populate('user')
      // ejecuta la relacion 
      .exec()
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
