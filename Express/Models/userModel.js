const mongosse = require('mongoose');

const userSchema = new mongosse.Schema({
    name : String,
    email : String ,
    password : String,
})

module.exports = mongosse.model('User' ,userSchema);