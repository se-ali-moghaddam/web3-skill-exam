import asyncHandler from "express-async-handler";
import Metadata from "../../models/metadata/Metadata.js";
import { ethers } from "ethers";
import Web3 from "web3";
import abi from '../../config/abi/NFT-ABI.json' assert { type: 'json' };

export const getMetadataEthers = asyncHandler(async (req, res) => {
    const { contractAddress, tokenId } = req?.params;
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

    const contract = new ethers.Contract(contractAddress, abi, provider);
    const tokenURI = await contract.tokenURI(tokenId);

    const response = await fetch(tokenURI);
    const metadata = await response.json();

    await Metadata.create({
        name: `${metadata.name || 'name'}`,
        description: `${metadata.description || 'description'}`,
        image: metadata.image
    });

    res.json(metadata);
});

export const getMetadataWeb3 = asyncHandler(async (req, res) => {
    const { contractAddress, tokenId } = req?.params;
    const web3 = new Web3(process.env.RPC_URL);

    const contract = new web3.eth.Contract(abi, contractAddress);

    const tokenURI = await contract.methods.tokenURI(tokenId).call();
    console.log("Token URI:", tokenURI);

    const response = await fetch(tokenURI);
    const metadata = await response.json();

    await Metadata.create({
        name: `${metadata.name || 'name'}`,
        description: `${metadata.description || 'description'}`,
        image: metadata.image,
    });

    res.json(metadata);
});