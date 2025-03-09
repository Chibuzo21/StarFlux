import React, { useState } from "react";
import ConnectWallet from "./Pages/ConnectWallet";
import "./App.css";
import BuyStar from "./Pages/BuyStar/BuyStar";
import { useTonConnectUI } from "@tonconnect/ui-react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/home";
import AirdropHome from "./Pages/Airdrop/airdropHomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={
              walletConnected ? (
                <ConnectWallet HandleClick={HandleClick} />
              ) : (
                <Navigate to="/Home" />
              )
            }
          />

          <Route path="/Home" element={<Home />} />
          <Route path="/BuyStar" element={<BuyStar />} />
          <Route path="/airdropHome" element={<AirdropHome />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
