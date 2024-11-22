import asyncHandler from "express-async-handler";
import { ethers } from "ethers";
import Web3 from "web3";
import abi from '../../config/abi/TokenABI.json' assert { type: 'json' };

export const getBalanceEthers = asyncHandler(async (req, res) => {
    const { contractAddress, walletAddress } = req?.params;
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

    const contract = new ethers.Contract(contractAddress, abi, provider);
    const balance = await contract.balanceOf(walletAddress);

    res.json(balance.toString());
});

export const getBalanceWeb3 = asyncHandler(async (req, res) => {
    const { contractAddress, walletAddress } = req?.params;
    const web3 = new Web3(process.env.RPC_URL);

    const contract = new web3.eth.Contract(abi, contractAddress);
    const balance = await contract.methods.balanceOf(walletAddress).call();

    res.json(balance.toString());
});