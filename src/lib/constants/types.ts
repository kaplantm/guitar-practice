export type Nullable<T> = T | null;

// TODO: rremovev old
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

export enum playerStatusEnum {
  PLAYING = "playing",
  PAUSED = "paused",
  STOPPED = "stopped",
}

export type DataPointKeysType = keyof SymbolType["data"];
