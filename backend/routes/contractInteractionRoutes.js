import express from 'express';
import { transferEthers, transferWeb3 } from '../controllers/contractInteraction/ContractInteraction.js';

const router = express.Router();

router.post('/api/transfer/ethers/:from/:to/:amount', transferEthers);
router.post('/api/transfer/web3/:from/:to/:amount', transferWeb3);

export default router;