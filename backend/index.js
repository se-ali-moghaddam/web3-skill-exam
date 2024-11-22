import express from 'express';
import dbConnect from './config/db/dbConnect.js';
import dotenv from 'dotenv';
import metadataRoutes from './routes/metadataRoutes.js';
import balanceRoutes from './routes/balanceRoutes.js';
import contractInteractionRoutes from './routes/contractInteractionRoutes.js';
import transactionTrackingRoutes from './routes/transactionTrackingRoutes.js';
import { errorHandler, notFound } from './middleware/error/errorHandler.js';
import cors from 'cors';

dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(metadataRoutes);
app.use(balanceRoutes);
app.use(contractInteractionRoutes);
app.use(transactionTrackingRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`The server is running on port(${PORT}) :)`));