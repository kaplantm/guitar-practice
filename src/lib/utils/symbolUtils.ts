import { SymbolType } from "../constants/types";

export const initialDataPointState = {
  data: null,
  error: null,
  updatedAt: 0,
};

const emptySymbol: SymbolType = {
  name: "",
  data: {
    quote: initialDataPointState,
    target: initialDataPointState,
    recommendations: initialDataPointState,
    financials: initialDataPointState,
    profile: initialDataPointState,
  },
};

export function generateSymbol(symbol: Partial<SymbolType>) {
  return { ...emptySymbol, ...(symbol || {}) };
}
