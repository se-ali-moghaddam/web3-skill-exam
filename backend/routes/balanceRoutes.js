import express from 'express';
import { getBalanceEthers, getBalanceWeb3 } from '../controllers/balance/BalanceController.js';

const router = express.Router();

router.get('/api/balance/ethers/:contractAddress/:walletAddress', getBalanceEthers);
router.get('/api/balance/web3/:contractAddress/:walletAddress', getBalanceWeb3);

export default router;