import React from "react";

export const WalletTransactions = ({ transactions }) => {
  return (
    <div className="transactions">
      {transactions.map((transaction) => {
        return (
          <div key={transaction.txHash}>
            <p>
              Transaction Hash:
              {transaction.txHash}
            </p>
            <p>
              From:
              {transaction.from}
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
