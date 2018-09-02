const knex = require('./connection')
const bcrypt = require('bcrypt')

const getUsers = () => {
  return knex.select().from('users')
}

const getUserById = (id) => {
  return knex
    .select()
    .from('users')
    .where('user_id', '=', id)
}

const getUserByEmail = (userEmail) => {
  return knex
    .select()
    .from('users')
    .where('email', '=', userEmail)
}

const addUser = (data) => {
  let { password } = data
  const { fullName, email } = data
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err
    return bcrypt.hash(password, salt, async (error, hash) => {
      if (error) {
        throw error
      }
      password = hash
      await knex.table('users').insert({
        full_name: fullName,
        email: email,
        password: password
      })
    })
  })
}

const editUser = (id, data) => {
  let { password } = data
  const { fullName, email, userId } = data
  return bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err
    bcrypt.hash(password, salt, async (error, hash) => {
      if (error) {
        throw error
      }
      password = hash
      await knex
        .table('users')
        .where('user_id', '=', userId)
        .update({
          full_name: fullName,
          email: email,
          password: password
        })
    })
  })
}

const deleteUser = (userId) => {
  return knex
    .table('users')
    .where('user_id', '=', userId)
    .del()
}

const comparePassword = (password, hash, callBack) => {
  bcrypt.compare(password, hash, (err, isMatch) => {
    if (err) throw err
    callBack(null, isMatch)
  })
}

module.exports = {
  comparePassword,
  getUserByEmail,
  deleteUser,
  editUser,
  getUsers,
  addUser,
  getUserById
}
