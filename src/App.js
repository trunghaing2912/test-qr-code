import { Html5QrcodeScanner } from "html5-qrcode";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    if (!scanResult) {
      const scanner = new Html5QrcodeScanner(
        "reader",
        {
          qrbox: {
            width: 1000,
            height: 1000,
          },
          fps: 5,
        },
        false
      );

      scanner.render(success, error);

      function success(result) {
        scanner.clear();
        setScanResult(result);
      }

      function error(err) {
        console.warn(err);
      }
    }
  }, [scanResult]);

  const handleRetry = () => {
    setScanResult(null);
  };

  return (
    <div className="App">
      <h1>QR Code Scanning in React</h1>
      <div>
        {" "}
        {scanResult ? (
          <div>
            <p>Scanned Result: {scanResult}</p>
          </div>
        ) : (
          <div id="reader"></div>
        )}
      </div>
      <button onClick={handleRetry}>Quay lại để tiếp tục quét</button>
    </div>
  );
}

export default App;
