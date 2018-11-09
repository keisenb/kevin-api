const axios = require('axios');

// get chatter count by username
exports.count = (req, res) => {
    axios.get('https://tmi.twitch.tv/group/user/' + req.params.username)
    .then(function (result) {
        res.json(result.data);
    })
    .catch(function (err) {
        console.log(err);
        res.status(500).send({
            message: err || "Some error occurred while retrieving top."
        });
    })
};

