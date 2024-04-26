const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { User, Account } = require('../db/index')
const {JWT_SECRET} = require('../config')
const zod = require('zod')
const { authMiddleware } = require('../middleware')
const router = Router()

const signUpBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string()
})

router.post('/signup', async (req, res) => {
  const success = signUpBody.safeParse(req.body)
  if (!success) {
    return res.status(411).json({
      message: "User already taken / Incorrect inputs"
    })
  }
  const username = req.body.username
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName

  const ifExists = await User.findOne({ username: req.body.username })
  if (ifExists) {
    return res.status(411).json({
      message: "User already taken / Incorrect inputs"
    })
  }
  const user = await User.create({
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName
  })
  const userId = user._id
  const token = jwt.sign({userId: userId}, JWT_SECRET)
  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000
})
  return res.json({
    message: "User created successfully",
    token: token
  })
})

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string()
})

router.post('/signin', async (req, res) => {
  const success = signinBody.safeParse(req.body)
  if (!success) {
    return res.status(411).json({
      message: "Error while logging in"
    })
  }
  const user = await User.findOne({ username: req.body.username, password: req.body.password })
  if (!user) {
    return res.status(411).json({
      message: "Error while logging in"
    })
  }
  const token = jwt.sign({ userId: user._id }, JWT_SECRET)
  return res.status(200).json({
    token: token
  })
})

const updateUserBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional()
})

router.put('/', authMiddleware, async (req, res) => {
  const success = updateUserBody.safeParse(req.body)
  if (!success) {
    req.status(411).json({
      message: "Error while updating information"
    })
  }
  await User.updateOne({ _id: req.userId }, req.body)
  res.json({
    message: "Updated successfully"
  })
})

router.get('/bulk', async (req, res) => {
  const filter = req.query.filter || ""
  const users = await User.find({
    $or: [{
      firstName: {
        "$regex": filter
      },
      lastName: {
        "$regex": filter
      }
    }]
  })
  res.json({
    user: users.map(user => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id
    }))
})
})

module.exports = router