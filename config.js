require('dotenv').config()

const user = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST

const uri =`mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority`;

module.exports= {
    user,
    password,
    host,
    uri
}