import { useState } from "react";
import server from "./server";
import { buildMessageHash } from "./utils/wallet-utils";

function Transfer({ address, setBalance, currentBalance, setTransactions }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [txHash, setTxHash] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer() {
    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
        txHash,
      });
      setBalance(balance);

      const {
        data: { transactions },
      } = await server.get(`transactions/${address}`);
      setTransactions(transactions);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  async function verify(evt) {
    evt.preventDefault();

    const txData = {
      sender: address,
      amount: parseInt(sendAmount),
      recipient,
    };

    const txHash = buildMessageHash(txData);
    setTxHash(txHash);
    setIsVerifying(true);
  }

  return (
    <div className="container">
      <form className="container transfer" onSubmit={verify}>
        <section>
          <h1>Send Transaction</h1>
          <label>
            Send Amount (max {currentBalance})
            <input
              placeholder="1, 2, 3..."
              value={sendAmount}
              onChange={setValue(setSendAmount)}
              max={currentBalance}
              type="number"
            ></input>
          </label>
          <label>
            Recipient
            <input
              placeholder="Type an address, for example: 0x2"
              value={recipient}
              onChange={setValue(setRecipient)}
            ></input>
          </label>
        </section>
        <section style={{ display: isVerifying ? "block" : "none" }}>
          <h1>Verify Transaction</h1>
          <div>
            <p>Sender: {address}</p>
            <p>Amount: {sendAmount}</p>
            <p>Recipient: {recipient}</p>
          </div>
        </section>
        <input
          type="submit"
          className="button"
          value="Transfer"
          hidden={isVerifying}
          style={{ display: isVerifying ? "none" : "block" }}
        />
        <button
          className="button"
          onClick={transfer}
          style={{
            display: isVerifying ? "block" : "none",
          }}
        >
          Verify
        </button>
      </form>
    </div>
  );
}

export default Transfer;
