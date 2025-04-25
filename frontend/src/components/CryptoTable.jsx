import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';
import '../styles/CryptoTable.css';

export default function CryptoTable() {
  const cryptoList = useSelector((state) => state.crypto);

  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>24h Volume</th>
          <th>Circulating Supply</th>
          <th>Max Supply</th>
        </tr>
      </thead>
      <tbody>
        {cryptoList.map((crypto, index) => (
          <CryptoRow key={crypto.id} crypto={crypto} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
