const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());

// Serve JSON data from dummy.json
app.get('/data', (req, res) => {
    const jsonDataPath = path.join(__dirname, 'src', 'dummy.json');
    fs.readFile(jsonDataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading JSON file');
            return;
        }
        res.header("Content-Type", "application/json");
        res.send(data);
    });
});

app.get('/data/cloudeka', (req, res) => {
    const jsonDataPath = path.join(__dirname, 'src', 'cloudeka.json');
    fs.readFile(jsonDataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading JSON file');
            return;
        }
        res.header("Content-Type", "application/json");
        res.send(data);
    });
});

app.get('/data/samrat', (req, res) => {
    const jsonDataPath = path.join(__dirname, 'src', 'samrat.json');
    fs.readFile(jsonDataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading JSON file');
            return;
        }
        res.header("Content-Type", "application/json");
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
