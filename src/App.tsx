import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import Layout from "./components/Layout";
import Screen from "./components/Screen";

const App = () => {
  return (
   <Layout>
     <Screen/>
     <Board/>
   </Layout>
  );
};

export default App;
