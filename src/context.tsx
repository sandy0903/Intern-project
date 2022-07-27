import React, { SetStateAction, useContext, useState } from "react";

export type ContextProp = {
  clearValue: boolean;
  key?: any;
  number?: number | null | string|[];
  result?:any;
  value?: any[];
  display?: string,
  handleKeyBoard: (e: any) => any;
  calculatorResult?: () => any;
  setClearValue?: React.Dispatch<React.SetStateAction<boolean>>;
  setKey?: React.Dispatch<React.SetStateAction<string | null | number>>;
  setValue?: React.Dispatch<React.SetStateAction<any[]>>;
  setDisplay?: React.Dispatch<React.SetStateAction<string>>;
};
const AppContext = React.createContext<ContextProp | null>(null);

const AppProvider = ({ children }: any) => {
  // clear previous syntax or value
  const [clearValue, setClearValue] = useState(true);

  const [showResult, setResult]=useState<number>(0)

  // key: +/- % / x - +
  const [key, setKey] = useState<SetStateAction<string | null | number>>(null);
  const [syntax, setSyntax] = useState<string | null|[]>(null);
  const [number, setNumber] = useState<number | string | null>(null);
  const [value, setValue] = useState<any[]>([]);
const [display, setDisplay]=useState<string>("")

  const handleKeyBoard = (value: any) => {
    console.log(value)
    // set pre key
    if(value !== "AC" && value !== "C" && value!=="=" && value!=="+/-" && value!=="%"){
        setKey(value)
    }
    if (typeof value == "number") {
      // if pre value is number => clear number
      setClearValue(false);

    //   set number
      if (number) {

        setNumber((pre) => pre + value.toString());

        setDisplay((pre) => pre + value.toString());

      } else {
        setNumber(value.toString());
        setDisplay(value.toString());
      }
    }

    // set syntax
    else if (typeof value !== "number" && value!=="=" && value!=="+/-" && value!=="%")  {
      setSyntax(value);

      if(number){
        setDisplay((pre) => pre + value.toString());
        setClearValue(false);
      }else{
        setClearValue(true)
      }

    }

    switch (value) {
      case "C":
        setClearValue(true);
        setKey(null);
        setNumber(0)
        setDisplay("")
        break;
      case "AC":
        setNumber(0);
        setDisplay("")

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
        setDisplay(eval(display).toString())
        // setDisplay(pre=>typeof pre=='string' && eval(pre))
        break;

    }

  };


  return (
    <AppContext.Provider value={{ clearValue, handleKeyBoard, number,display }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
