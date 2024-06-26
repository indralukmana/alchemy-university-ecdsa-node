import server from "../../utils/server";

export const TransferSendVerification = ({
  address,
  sendAmount,
  recipient,
  txHash,
  setBalance,
  setTransactions,
  setIsVerifying,
}) => {
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
      setIsVerifying(false);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <section className="transfer-send-verification">
      <h1>Verify Transaction</h1>
      <div>
        <p>Sender: {address}</p>
        <p>Amount: {sendAmount}</p>
        <p>Recipient: {recipient}</p>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => setIsVerifying(false)}>
          Cancel
        </button>
        <button className="button" onClick={transfer}>
          Verify
        </button>
      </div>
    </section>
  );
};
