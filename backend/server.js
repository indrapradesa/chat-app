import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToMonggoDB from './db/connectToMonggoDB.js';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payload (from re.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    connectToMonggoDB();
    console.log(`server running on port ${PORT}`)
});