import asyncHandler from "express-async-handler";
import { ethers } from "ethers";
import Transaction from "../../models/transaction/Transaction.js";
import Web3 from "web3";
import abi from '../../config/abi/TokenABI.json' assert { type: 'json' };

export const transferEthers = asyncHandler(async (req, res) => {
    const { from, to, amount } = req?.params;
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contract = new ethers.Contract(process.env.TOKEN_CONTRACT_ADDRESS, abi, wallet);

    const amountInWei = BigInt(amount) * BigInt(10 ** 18);

    try {
        const tx = await contract.transfer(to, amountInWei);
        await tx.wait();

        await Transaction.create({
            from,
            to,
            amount,
            txHash: tx.hash,
        });

        res.json({ success: true, txHash: tx.hash });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

export const transferWeb3 = asyncHandler(async (req, res) => {
    const { from, to, amount } = req?.params;
    const web3 = new Web3(process.env.RPC_URL);

    console.log(process.env.PRIVATE_KEY);
    const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY.toString());
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = from;

    const contract = new web3.eth.Contract(abi, process.env.TOKEN_CONTRACT_ADDRESS);

    try {
        const tx = await contract.methods.transfer(to, web3.utils.toWei(amount, 'ether')).send({ from });
        await Transaction.create({
            from,
            to,
            amount,
            txHash: tx.transactionHash,
        });

        res.json({ success: true, txHash: tx.transactionHash });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});