const { Router } = require('express')
const mongoose = require('mongoose')
const zod = require('zod')
const { Account } = require('../db')
const { authMiddleware } = require('../middleware')
const router = Router()

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
  });
  res.json({
      balance: account.balance
  })
});

router.post('/transfer',authMiddleware, async (req, res) => {
  const session = await mongoose.startSession()
  session.startTransaction()

  const fromUser = await Account.findOne({ userId: req.userId }).session(session)
  if (!fromUser || fromUser.balance < req.body.amount) {
    await session.abortTransaction()
    res.status(400).json({
      message: "Insufficient balance"
    })
  }
  const toUser = await Account.findOne({ userId: req.body.to }).session(session)
  if (!toUser) {
    await session.abortTransaction()
    res.status(400).json({
      message: "Invalid account"
    })
  }
  await Account.updateOne({ userId: req.userId }, { $inc: { balance: -req.body.amount } }).session(session);
  await Account.updateOne({ userId: req.body.to }, { $inc: { balance: req.body.amount } }).session(session);
  await session.commitTransaction()
  res.json({
    message: "Transaction Successful"
  })
})

module.exports = router