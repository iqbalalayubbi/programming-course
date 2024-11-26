import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', async (req: Request, res: Response) => {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
