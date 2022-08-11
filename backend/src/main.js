import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';

import swaggerFile from '../swagger-output.json';
import router from './routes';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use('/api', router);

app.listen(PORT, () => {
  console.log('App is listening on url http://localhost:' + PORT);
  console.log('API documentation: http://localhost:' + PORT + '/docs');
});
