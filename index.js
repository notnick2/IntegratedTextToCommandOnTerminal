// express_server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/get-commands', (req, res) => {
  const { prompt } = req.body;

  // Add your logic to generate commands based on the prompt
  const commands = ['ls', 'echo "Hello World"'];

  res.json({ commands });
});

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
