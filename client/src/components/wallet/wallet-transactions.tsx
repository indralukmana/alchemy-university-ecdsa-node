import React from "react";

export const WalletTransactions = ({ transactions }) => {
  return (
    <div className="wallet-transactions">
      {transactions.map((transaction) => {
        return (
          <div key={transaction.txHash} className="wallet-transaction-card">
            <p>
              Transaction Hash:
              {transaction.txHash}
            </p>
            <p>
              From:
              {transaction.sender}
            </p>
            <p>
              To:
              {transaction.recipient}
            </p>
            <p>
              Amount:
              {transaction.amount}
            </p>
          </div>
        );
      })}
    </div>
  );
};
