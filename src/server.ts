import express from 'express';
import helmet from 'helmet';
import {config} from 'dotenv'



const app = express();
app.use(express.json())
app.use(helmet())

const port = 8500;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});