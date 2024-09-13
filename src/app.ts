import { Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import app from '@config/server_config';
app.use((err: any, res: Response) => {
  res.status(500).send({ message: err.message });
})