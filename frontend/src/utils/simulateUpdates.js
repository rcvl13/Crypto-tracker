export const simulateCryptoUpdates = (cryptoList) => {
  return cryptoList.map((crypto) => {
    const priceChange = (Math.random() - 0.5) * 1000;
    const percentChange1h = (Math.random() - 0.5) * 2;
    const percentChange24h = (Math.random() - 0.5) * 5;
    const percentChange7d = crypto.percentChange7d + (Math.random() - 0.5) * 1;
    const volumeChange = (Math.random() - 0.5) * 500000000;

    // Optionally simulate small circulating supply change (e.g., mining or staking)
    const supplyChange = (Math.random() - 0.5) * 0.05;
    const newCirculatingSupply = Math.max(0.01, crypto.circulatingSupply + supplyChange);

    const newPrice = Math.max(0.1, crypto.price + priceChange);
    const newMarketCap = newPrice * newCirculatingSupply * 1_000_000;

    return {
      ...crypto,
      price: newPrice,
      percentChange1h,
      percentChange24h,
      percentChange7d,
      volume24h: Math.max(0, crypto.volume24h + volumeChange),
      circulatingSupply: Number(newCirculatingSupply.toFixed(2)),
      marketCap: Math.round(newMarketCap),
    };
  });
};
