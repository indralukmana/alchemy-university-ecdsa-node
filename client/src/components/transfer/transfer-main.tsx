import { useState } from "react";
import { TransferSendVerification } from "./transfer-send-verification";
import { TransferSendForm } from "./transfer-send-form";

function Transfer({ address, setBalance, currentBalance, setTransactions }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [txHash, setTxHash] = useState("");

  return (
    <div className="transfer container">
      {!isVerifying && (
        <TransferSendForm
          currentBalance={currentBalance}
          recipient={recipient}
          sendAmount={sendAmount}
          setRecipient={setRecipient}
          setSendAmount={setSendAmount}
          setIsVerifying={setIsVerifying}
          setTxHash={setTxHash}
          address={recipient}
        />
      )}
      {isVerifying && (
        <TransferSendVerification
          address={address}
          sendAmount={sendAmount}
          recipient={recipient}
          txHash={txHash}
          setBalance={setBalance}
          setTransactions={setTransactions}
          setIsVerifying={setIsVerifying}
        />
      )}
    </div>
  );
}

export default Transfer;
