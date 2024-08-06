import { Router } from "express";
import authMiddleware from "../middleware.js";
import { Account } from "../db.js";

const router = Router();

router.use("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.body.userId,
  });
  res.status(200).json({
    balance: account.balance,
  });
});

router.use("/transfer", authMiddleware, async (req, res) => {
  const { to, amount } = req.body;
  const account = await Account.findOne({
    userId: req.body.userId,
  });

  if (account.balance < amount) {
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  });

  if (!toAccount) {
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  await Account.updateOne(
    {
      userId: req.body.userId,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  );
  await Account.updateOne(
    {
      to,
    },
    {
      $inc: {
        balance: +amount,
      },
    }
  );

  res.status(200).json({
    message: "Transfer successful",
  });
});

export default router;
