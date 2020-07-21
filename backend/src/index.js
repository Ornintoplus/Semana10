const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Salve!!');
});

app.listen(8787);