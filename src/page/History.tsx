import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AppProvider from "../context";
import { useGlobalContext, ContextProp } from "../context";

const History = () => {
  const {resultList}=useGlobalContext() as ContextProp
  // console.log(resultList)
  const [show, setShow]=useState<boolean>(false)
  const getHistory=()=>{
    setShow(!show)
  }
  return (
      <div>
        <button onClick={getHistory} className="btnList">{show ? "Clear history" : "Get history"}</button>

        {show ? resultList?.map(item=><h4 className="history-item">{item.result}</h4>) : ""}
      </div>

  );
};
export default History;
