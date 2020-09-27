const passport = require('passport');
const fs = require('fs')

exports.scope = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.redirect = (passport.authenticate('google'), (req, res) => {
    console.log(req.query)

    fs.writeFile("token.json", JSON.stringify(req.query), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', "token.json");
      });
    return res.redirect('/home');
})