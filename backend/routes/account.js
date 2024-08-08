import { Router } from "express";
import authMiddleware from "../middleware.js";
import { Account } from "../db.js";
import mongoose from "mongoose";

const router = Router();

router.use("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  res.status(200).json({
    balance: account.balance,
  });
});

router.use("/transfer", authMiddleware, async (req, res) => {
  // const account = await Account.findOne({
  //   userId: req.body.userId,
  // });

  // if (account.balance < amount) {
  //   return res.status(400).json({
  //     message: "Insufficient balance",
  //   });
  // }

  // const toAccount = await Account.findOne({
  //   userId: to,
  // });

  // if (!toAccount) {
  //   return res.status(400).json({
  //     message: "Invalid account",
  //   });
  // }

  // await Account.updateOne(
  //   {
  //     userId: req.body.userId,
  //   },
  //   {
  //     $inc: {
  //       balance: -amount,
  //     },
  //   }
  // );
  // await Account.updateOne(
  //   {
  //     to,
  //   },
  //   {
  //     $inc: {
  //       balance: +amount,
  //     },
  //   }
  // );


  const session = await mongoose.startSession();
  session.startTransaction();

  const { to, amount } = req.body;

  const account = await Account.findOne({
    userId: req.userId
  }).session(session)

  if(!account || account.balance < amount){
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance "
    })
  }

  const toAccount = await Account.findOne({userId: to}).session(session);

  if(!toAccount){
    await session.abortTransaction();
    return res.status(400).json({
      message: "Inavalid Account"
    })
  }

  await Account.updateOne({userId: req.userId}, {$inc: {
    balance: -amount
  }}).session(session);
  await Account.updateOne({userId: to}, {$inc: {
    balance: amount
  }}).session(session);


  await session.commitTransaction()

  res.status(200).json({
    message: "Transfer successful",
  });
});

export default router;
