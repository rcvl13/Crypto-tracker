const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

let assets = require("./cryptoData");


app.get("/assets", (req, res) => {
  res.json(assets);
});

setInterval(() => {
  for (let asset of assets) {
    const changeFactor = 1 + (Math.random() * 2 - 1) / 100;
    asset.price = +(asset.price * changeFactor).toFixed(2);


    asset.percentChange1h = +(Math.random() * 2 - 1).toFixed(2);
    asset.percentChange24h = +(Math.random() * 4 - 2).toFixed(2);
    asset.percentChange7d = +(Math.random() * 20 - 10).toFixed(2);

    asset.volume24h = Math.floor(asset.volume24h * (1 + (Math.random() * 2 - 1) / 100));
  }
}, 2000);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
