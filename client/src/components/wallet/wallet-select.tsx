import React from "react";

// private key array
const wallets = [
  "d28f9fdc180a27059949024710743f53bc35545b29bfcd1bc84a02646cf14507",
  "591a506e7e2fd584d972993164a560c264b7d00af1600de4aa98beafa9441f0f",
  "92e24b0f6f2674fb63b6842ea020c59b2ebe1d317eb62f199dd5f88cde61ae57",
  "a1799fd436af2dc5bff501f4ba82bee9dfd3882aa307bcda34cb1d9646752d00",
  "ed76c8bfe3b8c5f3118b756b06247dac56be2df4dcf1286aa8b513a2d60149ba",
  "132d5e6e3a3d733e477d7842910a751b1628bb23ed9cfe5ef8a68930c2c32fe6",
  "e30c9e88ef96f626c4978b56d34f1b4f9639ce308a12600a2ee68d6e525aca97",
  "c67a777082e3504c89e5c1d7af77d1e93e94aac3fc1ad564acfa0349a8bbda13",
  "c08a951b57d0cbfdab2f726565f494fa012b443661cb088004d314e9199cb290",
  "c0c49cdb7f647a10ef48d9b9a6b6e3a2507a84fc4c870afa29f400f0866348a2",
];

export const WalletSelect = ({ onSelect, selected }) => {
  async function onChange(evt) {
    const newPrivateKey = evt.target.value;
    onSelect({ newPrivateKey });
  }

  return (
    <div>
      {wallets.map((wallet) => (
        <label key={wallet}>
          <input
            type="radio"
            name="wallets"
            value={wallet}
            checked={selected === wallet}
            onChange={onChange}
          />
          {wallet}
        </label>
      ))}
    </div>
  );
};
