const db = require('mongoose');

async function dbConnection(uri) {
    //nos conectamos a la db
    await db.connect(uri, { 
         useNewUrlParser: true,
         useUnifiedTopology: true 
        })
      .then(() => console.log('[db] Conectada con éxito'))
      .catch(err => console.error('[db]', err))
}

module.exports = dbConnection