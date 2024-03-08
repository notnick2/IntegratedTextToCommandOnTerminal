const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/get-commands', (req, res) => {
  const { prompt } = req.body;
  console.log(prompt)

  commands=[
    "cd ~/Desktop/100xdevs",
    "npx create-next-app my-nextjs-app --yes",
    "cd my-nextjs-app",
    "npm init -y",
    "npm install express",
    "npx prisma init --yes",
    "npm install @prisma/client",
    "npm install concurrently",
    "npm install nodemon",
    "echo 'node_modules' > .gitignore",
    "mkdir test",
    "cd test",
    "npx create-next-app my-test-app --yes",
    "cd my-test-app",
    "npm init -y",
    "npm install express",
    "npx prisma init --yes",
    "npm install @prisma/client",
    "npm install concurrently",
    "npm install nodemon",
    "echo 'node_modules' > .gitignore",
    "cd ../..",
    "touch index.js server.js",
  ]
  



  const summary = 'The "Hello, World!" program has been compiled and executed successfully.';

  res.json({ commands, summary });
});

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});


