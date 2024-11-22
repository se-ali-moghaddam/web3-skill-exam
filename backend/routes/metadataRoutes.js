import express from 'express';
import { getMetadataEthers, getMetadataWeb3 } from '../controllers/metadata/MetadataController.js';

const router = express.Router();

router.post('/api/metadata/ethers/:contractAddress/:tokenId', getMetadataEthers);
router.post('/api/metadata/web3/:contractAddress/:tokenId', getMetadataWeb3);

export default router;