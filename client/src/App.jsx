import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

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
