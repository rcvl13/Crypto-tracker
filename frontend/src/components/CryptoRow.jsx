export default function CryptoRow({ crypto, index }) {
  const formatPercent = (value) => (
    <span style={{ color: value >= 0 ? 'green' : 'red' }}>
      {value.toFixed(2)}%
    </span>
  );

  return (
    <tr>
      <td>{index}</td>
      <td>
        {/* Display the image of the cryptocurrency logo */}
        <img src={crypto.logo} alt={`${crypto.name} Logo`} width="30" height="30" />
      </td>
      <td>{crypto.name}</td>
      <td>{crypto.symbol}</td>
      <td>${crypto.price.toLocaleString()}</td>
      <td>{formatPercent(crypto.percentChange1h)}</td>
      <td>{formatPercent(crypto.percentChange24h)}</td>
      <td>{formatPercent(crypto.percentChange7d)}</td>
      <td>${crypto.marketCap.toLocaleString()}</td>
      <td>${crypto.volume24h.toLocaleString()}</td>
      <td>{crypto.circulatingSupply}M</td>
      <td>{crypto.maxSupply}M</td>
    </tr>
  );
}
  