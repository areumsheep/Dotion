import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';

import swaggerDoc from './config/swagger';
import userRouter from './routes/user';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use('/api', userRouter);

app.listen(PORT, () =>
  console.log('App is listening on url http://localhost:' + PORT),
);
