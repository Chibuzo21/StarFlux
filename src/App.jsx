import React, { useState } from "react";
import ConnectWallet from "./Pages/ConnectWallet";
import "./App.css";
import BuyStar from "./Pages/BuyStar/BuyStar";
import { useTonConnectUI } from "@tonconnect/ui-react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const [walletConnected, setWalletConnected] = useState(true);
  const [tonConnectUI, setOptions] = useTonConnectUI();

  useEffect(() => {
    const wallet = localStorage.getItem("connectWallet");
    if (wallet) {
      setWalletConnected(false);
    }
  }, []);
  const HandleClick = () => {
    localStorage.setItem("connectWallet", "Wallet connected");
    setTimeout(() => {
      setWalletConnected(false);
    }, 900);
    setTimeout(() => {
      tonConnectUI.openModal();
    }, 1200);
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            walletConnected ? (
              <ConnectWallet HandleClick={HandleClick} />
            ) : (
              <Navigate to="/BuyStar" />
            )
          }
        />
        <Route path="/BuyStar" element={<BuyStar />} />
      </Routes>
    </div>
  );
};

export default App;
