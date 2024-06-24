import { secp256k1 as secp } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { toHex } from "ethereum-cryptography/utils";

export const derivePrivateKey = (privateKey) => {
  const publicKey = secp.getPublicKey(privateKey, false);
  const addressUint8Array = keccak256(publicKey.slice(1)).slice(-20);
  const address = `0x${toHex(addressUint8Array)}`;

  return {
    address,
  };
};
