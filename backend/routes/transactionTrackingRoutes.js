import express from 'express';
import { fetchTransactions, filterTransactions } from '../controllers/transactionTracking/TransactionTracking.js';

const router = express.Router();

router.get('/api/transaction-tracking/fetch-transactions/:walletAddress', fetchTransactions);
router.get('/api/transaction-tracking/filter-transactions/:walletAddress/:startDate/:endDate/', filterTransactions);

export default router;