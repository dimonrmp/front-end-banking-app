// import { createContext, useContext, useState } from 'react';
// const UserContext = createContext(null);

import { HashRouter, Route, Routes } from "react-router-dom";

import CreateAccount from "./Components/createaccount";
import Login from "./Components/login";
import Home from "./Components/home";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";
import AllData from "./Components/alldata";
import NavBar from "./Components/navbar";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/createaccount/" element={<CreateAccount />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/alldata/" element={<AllData />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
