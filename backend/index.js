const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

// Import crypto data
let assets = require("./cryptoData");

// API endpoint to get asset data
app.get("/assets", (req, res) => {
  res.json(assets);
});

// Simulate real-time updates every 2 seconds
setInterval(() => {
  for (let asset of assets) {
    // Random fluctuation: ±1% price change
    const changeFactor = 1 + (Math.random() * 2 - 1) / 100;
    asset.price = +(asset.price * changeFactor).toFixed(2);

    // Random % changes
    asset.percentChange1h = +(Math.random() * 2 - 1).toFixed(2);
    asset.percentChange24h = +(Math.random() * 4 - 2).toFixed(2);
    asset.percentChange7d = +(Math.random() * 20 - 10).toFixed(2);

    // Simulate 24h volume fluctuation
    asset.volume24h = Math.floor(asset.volume24h * (1 + (Math.random() * 2 - 1) / 100));
  }
}, 2000);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
