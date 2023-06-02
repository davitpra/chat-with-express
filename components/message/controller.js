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

  const getMessage = () => {
    try {
      //obtenemos los mensajes
     const allMessage = store.list()
     return allMessage
    } catch (error) {
      console.log('Entra en error ', error);
      return false
    }
  }

  module.exports ={
    addMessage,
    getMessage
  }
  