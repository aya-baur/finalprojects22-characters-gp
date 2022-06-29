const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  type: {
    type: String,
    default: '1',
  }
})
module.exports = mongoose.model('User', userSchema)