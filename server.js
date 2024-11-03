const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const server = require('./src/server.json'); // Adjust the path if necessary

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());

app.get('/server', (req, res) => {
    res.json(server.Health);
  });

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

app.get('/data/server', (req, res) => {
    const jsonDataPath = path.join(__dirname, 'src', 'server.json');
    fs.readFile(jsonDataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading JSON file');
            return;
        }
        res.header("Content-Type", "application/json");
        res.send(data);
    });
});


app.get('/health/server-:id/health', (req, res) => {
    const serverId = parseInt(req.params.id);
    const serverHealthData = server.Health.filter(record => record.serverId === serverId);
    if (serverHealthData.length > 0) {
      res.json(serverHealthData);
      res.header("Content-Type", "application/json");
        res.send(serverHealthData)
    } else {
      res.status(404).json({ message: 'Server not found' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
