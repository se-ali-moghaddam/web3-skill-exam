import asyncHandler from "express-async-handler";
import axios from "axios";
import Transaction from "../../models/transaction/Transaction.js";

export const fetchTransactions = asyncHandler(async (req, res) => {
    const { walletAddress } = req.params;

    const apiKey = process.env.ETHERSCAN_API_KEY;
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;

    const response = await axios.get(url);

    if (response.data.status !== "1") {
        throw new Error(response.data.message || "Failed to fetch transactions");
    }

    const transactions = response.data.result.slice(0, 5);

    const savedTransactions = [];
    for (const tx of transactions) {
        const existing = await Transaction.findOne({ hash: tx.hash });
        if (!existing) {
            const savedTx = await Transaction.create({
                from: tx.from,
                to: tx.to,
                amount: tx.value,
                txHash: tx.hash,
                timestamp: new Date(tx.timeStamp * 1000)
            });
            savedTransactions.push(savedTx);
        }
    }

    res.json(transactions);
});

export const filterTransactions = asyncHandler(async (req, res) => {
    const { walletAddress, startDate, endDate } = req.params;

    let query = {
        from: walletAddress,
        timestamp: {
            $gte: startDate,
            $lte: endDate,
        },
    };

    const filteredTransactions = await Transaction.find(query);

    res.json(filteredTransactions);
});
