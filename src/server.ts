import express from 'express';
import helmet from 'helmet';
import {config} from 'dotenv'



const app = express();
app.use(express.json())
app.use(helmet())

const port = process.env.HOST_PORT || 8501;

app.get('/api', (req, res) => {
  res.send('Hello World 5555');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});