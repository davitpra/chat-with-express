const store = require ('./store')

const addMessage = async (user, message, chat) => {
    try {
      if (!user || !message) {
        console.log('no hay usuario o mensaje');
        throw Error('datos incorrectos');
      }
      const fullMessage = {
        chat: chat,
        message: message,
        user: user,
        date: new Date(),
      };
      //anadimos en la capa de datos el mensaje
      store.add(fullMessage);
    } catch (error) {
      console.log('Entra en error ', error);
      return false;
    }
  };

  const getMessage = (filterUser) => {
    try {
      //obtenemos los mensajes
     const allMessage = store.list(filterUser)
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
  