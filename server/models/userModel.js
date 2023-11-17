const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:false
  },
  email:{
    type:String,
    required: true,
    unique:true
  },
  password:{
    type: String,
    required: true,
    unique: false
  }
})


userSchema.statics.signup = async function (name, email, password){
  // validation of email and password
  if(!email || !password || !name) {throw Error('All fields must be filled')}
  if(!validator.isEmail(email)){throw Error('Email is not valid!');}
  if(!validator.isStrongPassword(password)){throw Error('Password is not strong enough');}
  //finds if email is already in use
  const exists = await this.findOne({email})
  if(exists){throw Error('Email already in use!')}
  //salt the password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)
  const user = await this.create({name, email, password:hashPassword})
  //change later
  return user
}

// static login method
userSchema.statics.login = async function(email, password){
  if(!email || !password) {throw Error('All fields must be filled')}
  const user = await this.findOne({ email })
  if(!user){throw Error('Incorret Email or Password.')}
  const match = await bcrypt.compare(password, user.password)
  if(!match){ throw Error('Incorrect Email or Password.')}
  //change later
  return user
}
module.exports = mongoose.model('User', userSchema)