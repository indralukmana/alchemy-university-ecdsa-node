import React from "react";

export const WalletInfo = ({ address, balance }) => {
  return (
    <div>
      <div className="address">Address: {address}</div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
};
