const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/get-commands', (req, res) => {
  const { prompt } = req.body;

  // Add your logic to generate commands based on the prompt
  const commands = [
    'echo "$(pwd)"',
    'cd ..'

  ];

  const summary = 'The "Hello, World!" program has been compiled and executed successfully.';

  res.json({ commands, summary });
});

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});


