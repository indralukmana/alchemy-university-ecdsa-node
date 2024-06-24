import { secp256k1 as secp } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils";
import { sha256 } from "ethereum-cryptography/sha256";

export const derivePrivateKey = (privateKey) => {
  const publicKey = secp.getPublicKey(privateKey, false);
  const addressUint8Array = keccak256(publicKey.slice(1)).slice(-20);
  const address = `0x${toHex(addressUint8Array)}`;

  return {
    address,
  };
};

export const buildMessageHash = (jsonData) => {
  const messageString = JSON.stringify(jsonData);
  const messageHash = sha256(utf8ToBytes(messageString));

  const messageHashHex = toHex(messageHash);

  return messageHashHex;
};

export const signMessage = (privateKey, message) => {};
