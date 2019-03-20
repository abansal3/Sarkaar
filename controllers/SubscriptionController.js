const request = require('request');

const SubscriptionController = {
    subscribeUserToMailingList: (req, res) => {
        var email = req.body.email;

        request.post('https://us20.api.mailchimp.com/3.0/lists/18ed5c55bc/members', {
            auth: {
                username: 'anystring',
                password: 'f889e4d888d1b14010c812b41d84c553-us20'
            },
            json: {
                email_address: email,
                status: "subscribed",
                tags: ["Early Adopter"]
            }
        }, function(error, response, body) {
            console.log(response);
            res.status(200);
            res.send('success');
        })
    },
    hi: (req, res) => {
        res.send({ express: 'popo' });
    }
};

module.exports = SubscriptionController;
