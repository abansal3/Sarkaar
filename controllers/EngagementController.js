const request = require('request');

const EngagementController = {
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
            if (error) {
                console.log(error);
            } else {
                console.log(response);
                res.status(200);
                res.send('success');
            }
        })
    },
    sendContactUsEmail: (req, res) => {
        request.post('https://hooks.zapier.com/hooks/catch/4683858/nzv2vi/', {
            json: {
                email: req.body.email,
                subject: req.body.subject,
                body: req.body.body
            }
        }, function(error, response, body) {
            if (error) {
                console.log(error);
            } else {
                console.log(response);
                res.status(200);
                res.send('success');
            }
        })
    }
};

module.exports = EngagementController;
