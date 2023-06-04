const mongoose = require( 'mongoose')

const Schema = mongoose.Schema
// creamos un esquema que debe seguir los datos
const mySchema = new Schema( {
    name:String,
})
// configuramos la db con el nombre Message y el esquema
const model = mongoose.model('User', mySchema)

module.exports = model
