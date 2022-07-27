import React, { SetStateAction, useContext, useState } from "react";

export type ContextProp = {
  clearValue: boolean;
  number?: number | null | string | [];
  display: string;
  handleKeyBoard: (e: any) => any;
  setClearValue?: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplay?: React.Dispatch<React.SetStateAction<string>>;
};
const AppContext = React.createContext<ContextProp | null>(null);

const AppProvider = ({ children }: any) => {
  // clear previous syntax or value
  const [clearValue, setClearValue] = useState(true);
  const [number, setNumber] = useState<number | string | null>(null);
  const [display, setDisplay] = useState<string>("");


  const handleKeyBoard = (value: any) => {
    if (typeof value == "number") {
      // if pre value is number => clear number
      setClearValue(false);

      //   set number
      if (number) {
        setNumber((pre) => pre + value.toString());
        setDisplay((pre) => pre + value.toString());
      } else{
        setNumber(value.toString());
        setDisplay(value.toString());
      }
    }

    else if (
      typeof value !== "number" &&
      value !== "=" &&
      value !== "+/-" &&
      value !== "%"
    ) {
      if (number) {
        setDisplay((pre) => pre + value.toString());

        setClearValue(false);
      } else {
        setClearValue(true);
      }
    }

    switch (value) {
      case "C":
        setClearValue(true);
        setNumber(0);
        setDisplay("");
        break;
      case "AC":
        setNumber(0);
        setDisplay("");

        break;
      case "+/-":
        setDisplay((pre) =>
          typeof pre == "string" ? (parseInt(pre) * -1).toString() : pre
        );

        break;
      case "%":
        setDisplay((pre) =>
          typeof pre == "string" ? (parseInt(pre) / 100).toString() : pre
        );

        break;
      case "=":
        console.log(eval(display.replaceAll(",",".")).toString().length)
        setDisplay(eval(display.replaceAll(",",".")).toString().length>3 ? eval(display.replaceAll(",",".")).toFixed(1).toString() : eval(display.replaceAll(",",".")).toString() );
        break;
    }
  };

  return (
    <AppContext.Provider
      value={{ clearValue, handleKeyBoard, display }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
