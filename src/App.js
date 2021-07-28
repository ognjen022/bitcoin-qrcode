import React, { useState } from "react";
import QRCode from "qrcode.react";

function App() {
  const [bitcoin, setBitcoin] = useState("");
  const [amount, setAmount] = useState("");
  const [qrVisible, setQRVisible] = useState(false);
  const [qrValue, setQRValue] = useState("");

  const generateQRCode = () => {
    const qrvalue = `bitcoin:${bitcoin}?amount=${amount}`;
    setQRValue(qrvalue);
    setQRVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">QR Code</header>
      <input value={bitcoin} onChange={(e) => setBitcoin(e.target.value)} />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={generateQRCode}>Generate QR code</button>
      {qrVisible && <QRCode value={qrValue} renderAs="svg" />}
    </div>
  );
}

export default App;
