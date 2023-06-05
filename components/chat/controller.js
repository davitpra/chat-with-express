const store = require('./store')

async function addChat(users) {
  try {
    if (!users) {
      console.log('No users')
      throw new Error()
    }
    const chat = {
      users
    }

    return await store.addChat(chat)
  } catch (error) {
    throw new Error('incorect data')
  }
}

async function getChats(userid) {
  try {
    return await store.getChats(userid)
  } catch (error) {
    throw new Error('Error throw get data')
  }
}

module.exports = {
  addChat,
  getChats
}