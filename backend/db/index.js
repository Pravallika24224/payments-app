const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://pravallika:Pravallika%4010@cluster0.kxj574s.mongodb.net/payments-app")

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 30,
    lowercase: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  firstName: {
    type: String,
    required: true,
    max: 30,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    max: 30,
    trim: true
  },
})

const AccountSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User model
      ref: 'User',
      required: true
  },
  balance: {
      type: Number,
      required: true
  }
});

const User = mongoose.model("User", UserSchema)
const Account = mongoose.model("Account", AccountSchema)

module.exports = { User, Account }