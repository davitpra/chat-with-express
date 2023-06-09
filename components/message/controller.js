const { socket } = require('../../socket');
const store = require ('./store')

const addMessage = async (user, message, chat, file) => {
    try {
      if (!user || !message) {
        console.log('no hay usuario o mensaje');
        throw Error('datos incorrectos');
      }
      // seteamos una url vacia
      let fileUrl = ''
      //si existe file guardamos su url
      if (file) {
        fileUrl = `http://localhost:3000/app/files/${file.filename}`
      }
      // escribirmos en nuevo formato de message
      const fullMessage = {
        chat: chat,
        message: message,
        user: user,
        date: new Date(),
        file:fileUrl
      };
      //anadimos en la capa de datos el mensaje
      await store.add(fullMessage);
      // enviamos el mensaje por el socket
      socket.io.emit('message', fullMessage)

    } catch (error) {
      console.log('Entra en error ', error);
      return false;
    }
  };

  const getMessage = async (query) => {
    try {
      //obtenemos los mensajes
     const allMessage = await store.list(query)
     return allMessage
    } catch (error) {
      console.log('Entra en error ', error);
      return false
    }
  }

  const updateMessage = async (id, message) => {
    try {
      // lanzamos un error si no encuentra el id o el mensaje
      if (!id || !message) {
        throw Error ("datos incorrectos")
      }
      //actualizamos el mensaje
      const result = await store.update(id, message)
      return result

    } catch (error) {
      console.log('Entra en error ', error);
      return false;
    }
  }

  const deleteMessage = async (id) => {
    try {
      // lanzamos un error si no encuentra el id 
      if (!id ) {
        throw Error ("datos incorrectos")
      }
      //eliminamos de la db
      await store.delete(id)
      return true

    } catch (error) {
      console.log('Entra en error ', error);
      return false;
    }
  }
  module.exports ={
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
  }
  