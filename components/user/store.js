const Model = require('./model');

const addUser =  (user) => {
    //creamos un nuevo objeto con user
    const myUser = new Model(user);
    // lo guardamos en la db
    myUser.save();
  }

const getUser = async (filterUser) => {
    let filter = {}
    if (filterUser !== null) {
      filter = { name: filterUser}
    }
    const users = await Model.find(filter)
    return users
}


module.exports = {
    add: addUser,
    list: getUser
}
