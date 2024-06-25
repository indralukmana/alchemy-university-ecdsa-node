import "./App.scss";
import { useState } from "react";
import Wallet from "./components/wallet/wallet-main";
import Transfer from "./components/transfer/transfer-main";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <Transfer
        setBalance={setBalance}
        address={address}
        currentBalance={balance}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
