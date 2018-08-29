const passport = require('passport')
const { getUserById } = require('../../../dbClients/usersDB')
const secret = require('./config')

const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')

// JSON WEB TOKENS STRATEGY
const option = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET || secret
}

passport.use(new JwtStrategy(option, async (payload, done) => {
  try {
    const user = await getUserById(payload.sub)
    if (!user) {
      return done(null, false)
    }
    return done(null, user)
  } catch (error) {
    return done(error, false)
  }
}))
