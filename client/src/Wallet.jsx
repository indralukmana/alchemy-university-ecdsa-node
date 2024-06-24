import server from "./server";
import { derivePrivateKey } from "./utils/wallet-utils";

function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  privateKey,
  setPrivateKey,
}) {
  async function onChange(evt) {
    const privateKeyValue = evt.target.value;
    setPrivateKey(privateKeyValue);
    const { address } = derivePrivateKey(privateKeyValue);
    updateWalletInfo(address);
  }

  async function updateWalletInfo(newAddress) {
    setAddress(newAddress);
    if (newAddress) {
      const {
        data: { balance },
      } = await server.get(`balance/${newAddress}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Private Key
        <input
          placeholder="Type the wallet key"
          value={privateKey}
          onChange={onChange}
        ></input>
      </label>

      <div className="address">Address: {address}</div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
