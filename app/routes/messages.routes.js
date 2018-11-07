module.exports = (app) => {
    const messages = require('../controllers/messages.controller.js');
    const users = require('../controllers/users.controller');

    app.get('/messages/count', messages.count);
    app.get('/messages/top', messages.top);
    app.get('/users/top', users.top);
    app.get('/users/count', users.count);

}
