const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const userSchema = new Schema({
    profileId: String,
    name: String,
    firstname: String,
    lastname: String,
    avatar: String

});

mongoose.model('users', userSchema);