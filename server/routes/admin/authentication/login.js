const express = require('express');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const db = require('../../../dbClients/usersDB')

const router = express.Router();

router.get('/login', (req, res) => {
	res.render('login', { layout: false })
});

passport.use(new LocalStrategy(
	{
		usernameField: 'email',
		passwordField: 'password',
		session: false
	  },
	async function (email, password, done){
		const user = await db.getUserByEmail(email)
		if (user.length === 0) {
			return done(null, false, { message: 'User is not exist' });
		}
		db.comparePassword(password, user[0].password, (err, isMatch) => {
			if (err) throw err;
			if (isMatch) {
				return done(null, user);
			} else {
				return done(null, false, { message: 'Invalid password' });
			}
		})
	}));

passport.serializeUser(function (user, done) {
	done(null, user[0].user_id);
});

passport.deserializeUser(async (id, done) => {
	const user = await db.getUserById(id)
	done(null, user[0]);
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});


router.get('/logout', (req, res) => {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
})

module.exports = router
