module.exports = (app) => {
    const messages = require('../controllers/messages.controller.js');
    const users = require('../controllers/users.controller');
    const chatters = require('../controllers/chatters.controller');
    app.get('/messages/count', messages.count);
    app.get('/messages/top', messages.top);
    app.get('/users/top', users.top);
    app.get('/users/count', users.count);
    app.get('/chatters/:username', chatters.count);
}
