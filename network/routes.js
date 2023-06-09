const message = require("../components/message/network.js");
const user = require("../components/user/network.js");
const chat = require("../components/chat/network.js");

const routes = function (server) {
    server.use('/api/message', message);
    server.use('/api/user', user);
    server.use('/api/chat', chat);
}

module.exports = routes 