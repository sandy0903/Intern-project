import React, { SetStateAction, useContext, useState,useEffect } from "react";

export type ContextProp = {
  clearValue: boolean;
  number?: number | null | string | [];
  display: string;
  resultList:{
    result:string
  }[]
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
  const [resultList, setResultList]=useState<{result:string}[]>([])
  const [getList, setGetList]=useState<boolean>(false)

// get result from localStorage
  useEffect(() => {
    const results =window.localStorage.getItem('results' || null);
    typeof results=='string' && setResultList(JSON.parse(results))


  }, []);

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
        setDisplay(eval(display.replaceAll(",",".")).toString().length>3 ? eval(display.replaceAll(",",".")).toFixed(1).toString() : eval(display.replaceAll(",",".")).toString() );
        const numberResult=eval(display.replaceAll(",",".")).toString().length>3 ? eval(display.replaceAll(",",".")).toFixed(1): eval(display.replaceAll(",","."))
        setResultList([...resultList,{"result":display+"="+numberResult.toString()}])

        window.localStorage.setItem("results",JSON.stringify(resultList))

        break;
    }
  };

  return (
    <AppContext.Provider
      value={{ clearValue, handleKeyBoard, display,resultList }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
