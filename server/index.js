import express from "express";
import cors from "cors";

const app = express();
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "0x87690b41812c6c2bcf1a08a1576da4e71282c042": 298,
  "0x134b4689ed7e646208968f6b9154195ca08e6d55": 79,
  "0x6767bd201cad4ed82346feeb5ab88cbc452418ec": 415,
  "0x1dac16bbc1721c328b0ab024da2ab310b6bcf1c1": 475,
  "0xd76bf9a86597a504a760cd60f44bc8617d1bc6e3": 116,
  "0x9483d4e803f33ee4a0be1d73d5020a3e3474dbf7": 194,
  "0x0e077aec30bfb877dbfde69c9c48c2a996715d39": 111,
  "0x5f1563214cb1b6726fc9180647c23caade41dbda": 268,
  "0x020fb7ac853fcd38200160dfd28718131b4a079e": 298,
  "0xc36b16366f094d4d49a31c3c40055be4bac12d69": 342,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
