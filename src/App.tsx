import React from "react";
import { Box } from "@material-ui/core";
import "./App.css";
import { SymbolList } from "./components/symbolList";
import { Dash } from "./components/dash";
import { SymbolType, Nullable } from "./lib/constants/types";
import { useSelector } from "react-redux";
import { selectSymbols } from "./lib/redux/slices/stockSlice";

function App() {
  const symbols = useSelector(selectSymbols) || {};
  const symbolNameList = Object.keys(symbols).sort();
  const defaultSymbol = symbolNameList[0] ? symbols[symbolNameList[0]] : null;
  const [selectedSymbol, setSelectedSymbol] = React.useState<
    Nullable<SymbolType>
  >(defaultSymbol);
  const hasValidSelection = selectedSymbol?.name
    ? symbolNameList.indexOf(selectedSymbol.name) !== -1
    : !defaultSymbol;

  React.useEffect(() => {
    if (!hasValidSelection) {
      setSelectedSymbol(defaultSymbol);
    }
  }, [hasValidSelection, defaultSymbol]);

  function updateSymbolByName(symbolName: Nullable<string>) {
    if (symbolName) {
      setSelectedSymbol(symbols[symbolName]);
    } else {
      setSelectedSymbol(defaultSymbol);
    }
  }

  function updateSymbol(symbol: Nullable<SymbolType>) {
    setSelectedSymbol(symbol);
  }

  return (
    <Box display="flex" flex={1}>
      <SymbolList
        selectedSymbol={selectedSymbol}
        setSelectedSymbolByName={updateSymbolByName}
        setSelectedSymbol={updateSymbol}
        symbolNameList={symbolNameList}
      />
      <Dash selectedSymbol={selectedSymbol} />
    </Box>
  );
}

export default App;
