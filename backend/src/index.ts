import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
dotenv.config({
    path: './src/.env'
});
 
import 'express-async-errors';
import './database/index';
import authRoutes from './routes/auth.routes';
import itemRoutes from './routes/item.routes';
import logger from './shared/logger.util';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

app.use((err: Error, req: Request, res: Response, next: any) => {
    logger.error({
        message: err.message,
        stack: err.stack
    })

    res.status(500).send('Something went wrong');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
