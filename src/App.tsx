import React, { useState } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout"
import Screen from "./components/Screen"
import Board from "./components/Board"

import AppProvider from "./context";
import History from "./page/History";
const App = () => {

  return (
  <AppProvider>

    <Layout>
      <Screen/>
      <Board/>
    </Layout>
    <History/>
  </AppProvider>

  );
};

export default App;
