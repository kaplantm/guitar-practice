import { SymbolType } from "../constants/types";

const emptySymbol: SymbolType = {
  name: "",
  currentPrice: 0,
  hasError: false,
};

export function generateSymbol(symbol: Partial<SymbolType>) {
  return { ...emptySymbol, ...(symbol || {}) };
}
