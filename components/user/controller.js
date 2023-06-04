const store = require ('./store')

const addUser = async (name) => {
    try {
      if (!name) {
        console.log('no hay nombre');
        throw Error('invalid name');
      }
      const newUser = {
        name,
      };
      //anadimos en la capa de datos
      store.add(newUser);
    } catch (error) {
      console.log('Entra en error ', error);
      return false;
    }
  };

  const getUser = async (filterUser) => {
    try {
      //obtenemos los mensajes
     const allUser = await store.list(filterUser)
     return allUser
    } catch (error) {
      console.log('Entra en error ', error);
      return false
    }
  }

  module.exports = {
    addUser,
    getUser,
  }
  
