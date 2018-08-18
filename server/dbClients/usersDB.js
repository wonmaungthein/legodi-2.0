
const knex = require("./connection");
const bcrypt = require('bcryptjs')

function getUsers() {
    return knex.select().from("users");
};

function getUserByEmail(userEmail) {
    return knex.select().from("users").where('email', '=', userEmail)
};

function addUser(data) {
    let { password } = data;
    const { fullName, email } = data;
    bcrypt.genSalt(10, (err, salt) => {
        return bcrypt.hash(password, salt, async (error, hash) => {
            if (error) {
                throw error;
            }
            password = hash;
            await knex.table('users').insert({
                full_name: fullName,
                email: email,
                password: password,
            });
        })
    })
};

function editUser(data) {
    let { password } = data;
    const { fullName, email, userId } = data;
    return bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (error, hash) => {
            if (error) {
                throw error;
            }
            password = hash;
            await knex.table('users')
                .where('user_id', '=', userId)
                .update({
                    full_name: fullName,
                    email: email,
                    password: password,

                })
        })
    })
};

function deleteUser(userId) {
    return knex.table('users')
        .where('user_id', '=', userId)
        .del()
};

module.exports = {
    getUserByEmail,
    deleteUser,
    editUser,
    getUsers,
    addUser
}
