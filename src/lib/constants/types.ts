export type Nullable<T> = T | null;

export type DataPointType<T> = {
  data: Nullable<T>;
  error: any; // TODO: type
  updatedAt: number;
};

export type SymbolType = {
  name: string;
  data: {
    quote: DataPointType<any>; //TODO: types
    target: DataPointType<any>;
    recommendations: DataPointType<any>;
    financials: DataPointType<any>;
    profile: DataPointType<any>;
  };
};

export type DataPointKeysType = keyof SymbolType["data"];
