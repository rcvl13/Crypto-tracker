import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCrypto } from "./features/crypto/cryptoSlice";
import { simulateCryptoUpdates } from "./utils/simulateUpdates";
import CryptoTable from "./components/CryptoTable";

function App() {
  const dispatch = useDispatch();
  const cryptoList = useSelector((state) => state.crypto);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = simulateCryptoUpdates(cryptoList);
      dispatch(updateCrypto(updatedData));
    }, 1500);

    return () => clearInterval(interval);
  }, [cryptoList, dispatch]);

  return (
    <div className="App">
      <h1>Live Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
