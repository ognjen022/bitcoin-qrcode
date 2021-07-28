import React, { useState } from "react";
import QRCode from "qrcode.react";

function App() {
  const [bitcoin, setBitcoin] = useState("");
  const [amount, setAmount] = useState("");
  const [qrVisible, setQRVisible] = useState(false);
  const [qrValue, setQRValue] = useState("");

  const generateQRCode = () => {
    const qrvalue = `bitcoin:${bitcoin}${amount && `?amount=${amount}`}`;
    setQRValue(qrvalue);
    setQRVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">QR Code</header>
      <label htmlFor="bitcoin">Address:</label>
      <input
        id="bitcoin"
        value={bitcoin}
        onChange={(e) => setBitcoin(e.target.value)}
      />
      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR code</button>
      <div style={{ margin: "30px" }}>
        {qrVisible && <QRCode value={qrValue} renderAs="svg" />}
      </div>
    </div>
  );
}

export default App;
