
const addMessage = async (user, message) => {
    // manejamos los errores con un try - catch
    try {
        // lanzamos un error si no hay usuario o mensaje
      if (!user || !message) {
        console.log('no hay usuario o mensaje');
        throw Error('no hay nada');
      }
      //esquema de mensaje
      const fullMessage = {
        message: message,
        user: user,
        date: new Date(),
      };
      //retornamos el mensaje
      return fullMessage;
    } catch (error) {
        // retornamos false
      console.log('Entra en error ', error);
      return false;
    }
  };

  module.exports ={
    addMessage,
  }