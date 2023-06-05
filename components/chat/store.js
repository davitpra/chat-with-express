const Model = require('./model')

async function addChat(chat) {
  try {
    const myChat = new Model(chat)
    return await myChat.save()
  } catch (error) {
    console.log(error.message)
    throw new Error('Error saving')
  }
}

async function getChats() {
  try {
    return await Model.find().populate('users').exec()
  } catch (error) {
    console.log(error.message)
    throw new Error('Unexpected error')
  }
}

module.exports = {
  addChat,
  getChats
}