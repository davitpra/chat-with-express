const store = require ('./store')

const addMessage = async (user, message) => {
    try {
      if (!user || !message) {
        console.log('no hay usuario o mensaje');
        throw Error('datos incorrectos');
      }
      const fullMessage = {
        message: message,
        user: user,
        date: new Date(),
      };
      //anadimos en la capa de datos el mensaje
      store.add(fullMessage);
      console.log(fullMessage)
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
      const result = await store.updateText(id, message)
      return result

    } catch (error) {
      console.log('Entra en error ', error);
      return false;
    }
  }

  module.exports ={
    addMessage,
    getMessage,
    updateMessage
  }
  