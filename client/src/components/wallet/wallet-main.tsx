import React from "react";
import { WalletSelect } from "./wallet-select";
import { WalletInfo } from "./wallet-info";
import { WalletTransactions } from "./wallet-transactions";
import { derivePrivateKey } from "../../utils/wallet-utils";
import server from "../../utils/server";

export const Wallet = ({
  address,
  setAddress,
  balance,
  setBalance,
  privateKey,
  setPrivateKey,
  setTransactions,
  transactions,
}) => {
  async function updateWalletInfo(newAddress) {
    setAddress(newAddress);
    if (newAddress) {
      const {
        data: { balance },
      } = await server.get(`balance/${newAddress}`);
      setBalance(balance);

      const {
        data: { transactions },
      } = await server.get(`transactions/${newAddress}`);
      setTransactions(transactions);
    } else {
      setBalance(0);
    }
  }

  const onWalletSelect = ({ newPrivateKey }) => {
    setPrivateKey(newPrivateKey);
    const { address } = derivePrivateKey(newPrivateKey);
    updateWalletInfo(address);
  };

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <WalletSelect onSelect={onWalletSelect} selected={privateKey} />
      <WalletInfo address={address} balance={balance} />
      <WalletTransactions transactions={transactions} />
    </div>
  );
};

export default Wallet;
