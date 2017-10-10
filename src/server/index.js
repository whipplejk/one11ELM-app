const express = require('express');

const publicweb = process.env.PUBLICWEB || './';
const app = express();

app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

const port = process.env.SERVER_PORT || '80';
app.listen(80, () => console.log(`API running on localhost:${port}`));
