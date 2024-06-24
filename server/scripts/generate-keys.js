import { secp256k1 as secp } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { toHex } from "ethereum-cryptography/utils";

const addresses = {};

// NOTE
// The getPublicKey need to have the second argument isCompressed to have value like metamask wallet

for (let i = 0; i < 10; i++) {
  const privateKey = secp.utils.randomPrivateKey();
  const publicKey = secp.getPublicKey(privateKey, false);
  const address = keccak256(publicKey.slice(1)).slice(-20);

  // random balance between 50 to 500
  const randomBalance = Math.floor(Math.random() * 450) + 50;

  console.log(`Private key: ${toHex(privateKey)}`);
  console.log(`Public key: ${toHex(publicKey)}`);
  console.log(`Address: ${toHex(address)}`);
  console.log(`Balance: ${randomBalance}`);
  console.log("------------------------------------------------");

  addresses[`0x${toHex(address)}`] = randomBalance;
}

// pretty print addresses
console.log(JSON.stringify(addresses, null, 2));
