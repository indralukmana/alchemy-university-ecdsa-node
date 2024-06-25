import { buildMessageHash } from "../../utils/wallet-utils";

export const TransferSendForm = ({
  currentBalance,
  recipient,
  sendAmount,
  setRecipient,
  setSendAmount,
  setIsVerifying,
  setTxHash,
  address,
}) => {
  async function verifyTransfer(evt) {
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
    <form className="container transfer" onSubmit={verifyTransfer}>
      <section>
        <h1>Send Transaction</h1>
        <label>
          Send Amount (max {currentBalance})
          <input
            placeholder="1, 2, 3..."
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            max={currentBalance}
            type="number"
          ></input>
        </label>
        <label>
          Recipient
          <input
            placeholder="Type an address, for example: 0x2"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          ></input>
        </label>
      </section>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
};
