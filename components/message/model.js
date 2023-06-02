const mongoose = require( 'mongoose')

const Schema = mongoose.Schema
// creamos un esquema que debe seguir los datos
const mySchema = new Schema( {
    user: String,
    message: {
        type:String,
        require:true
    },
    date: Date
})
// configuramos la db con el nombre Message y el esquema
const model = mongoose.model('Message', mySchema)

module.exports = model
