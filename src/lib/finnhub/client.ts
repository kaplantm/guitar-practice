import * as finnhub from "finnhub";

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.REACT_APP_X_FINNHUB_TOKEN; // Replace this
const finnhubClient = new finnhub.DefaultApi();

// Stock candles
// finnhubClient.stockCandles(
//   "AAPL",
//   "D",
//   1590988249,
//   1591852249,
//   {},
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// //Company News
// finnhubClient.companyNews(
//   "AAPL",
//   "2020-01-01",
//   "2020-05-01",
//   (error, data, response) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(data);
//     }
//   }
// );

// // Investor Ownership
// let optsLimit = { limit: 10 };
// finnhubClient.investorsOwnership("AAPL", optsLimit, (error, data, response) => {
//   console.log(data);
// });

// //Aggregate Indicator
// finnhubClient.aggregateIndicator("AAPL", "D", (error, data, response) => {
//   console.log(data);
// });

// Basic financials
export function financials(
  symbol: string,
  callback: (error: any, data: any, response: any) => void
) {
  return finnhubClient.companyBasicFinancials(symbol, "margin", callback);
}

// // Company earnings
// finnhubClient.companyEarnings(
//   "AAPL",
//   { limit: 10 },
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// // Company EPS estimates
// finnhubClient.companyEpsEstimates("AAPL", {}, (error, data, response) => {
//   console.log(data);
// });

// // Company executive
// finnhubClient.companyExecutive("AAPL", (error, data, response) => {
//   console.log(data);
// });

// // Company peers
// finnhubClient.companyPeers("AAPL", (error, data, response) => {
//   console.log(data);
// });

// // Company profile
// finnhubClient.companyProfile({ symbol: "AAPL" }, (error, data, response) => {
//   console.log(data);
// });
// finnhubClient.companyProfile(
//   { isin: "US0378331005" },
//   (error, data, response) => {
//     console.log(data);
//   }
// );
// finnhubClient.companyProfile(
//   { cusip: "037833100" },
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// Company profile2
export function profile(
  symbol: string,
  callback: (error: any, data: any, response: any) => void
) {
  return finnhubClient.companyProfile2(symbol, callback);
}

// // Revenue Estimates
// finnhubClient.companyRevenueEstimates("AAPL", {}, (error, data, response) => {
//   console.log(data);
// });

// // List country
// finnhubClient.country((error, data, response) => {
//   console.log(data);
// });

// // Earnings calendar
// finnhubClient.earningsCalendar(
//   { from: "2020-06-01", to: "2020-06-30" },
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// // Economic code
// finnhubClient.economicCode((error, data, response) => {
//   console.log(data);
// });

// // Economic data
// finnhubClient.economicData("MA-USA-656880", (error, data, response) => {
//   console.log(data);
// });

// // Filings
// finnhubClient.filings({ symbol: "AAPL" }, (error, data, response) => {
//   console.log(data);
// });

// //Financials
// finnhubClient.financials("AAPL", "ic", "annual", (error, data, response) => {
//   console.log(data);
// });

// // Financials Reported
// finnhubClient.financialsReported(
//   { symbol: "AAPL" },
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// // Forex candles
// finnhubClient.forexCandles(
//   "OANDA:EUR_USD",
//   "D",
//   1590988249,
//   1591852249,
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// // Forex exchanges
// finnhubClient.forexExchanges((error, data, response) => {
//   console.log(data);
// });

// // Forex rates
// finnhubClient.forexRates({ base: "USD" }, (error, data, response) => {
//   console.log(data);
// });

// // Forex symbols
// finnhubClient.forexSymbols("OANDA", (error, data, response) => {
//   console.log(data);
// });

// //Fund ownership
// finnhubClient.fundOwnership("AAPL", { limit: 10 }, (error, data, response) => {
//   console.log(data);
// });

// // General news
// finnhubClient.generalNews("general", {}, (error, data, response) => {
//   console.log(data);
// });

// // Ipo calendar
// finnhubClient.ipoCalendar(
//   "2020-01-01",
//   "2020-06-15",
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// //Major development
// finnhubClient.majorDevelopments("AAPL", {}, (error, data, response) => {
//   console.log(data);
// });

// // News sentiment
// finnhubClient.newsSentiment("AAPL", (error, data, response) => {
//   console.log(data);
// });

// // Pattern recognition
// finnhubClient.patternRecognition("AAPL", "D", (error, data, response) => {
//   console.log(data);
// });

// // Price target
export function target(
  symbol: string,
  callback: (error: any, data: any, response: any) => void
) {
  return finnhubClient.priceTarget(symbol, callback);
}

// //Quote
export function quote(
  symbol: string,
  callback: (error: any, data: any, response: any) => void
) {
  console.log("client quote");
  return finnhubClient.quote(symbol, callback);
}

// // Recommendation trends
export function recommendations(
  symbol: string,
  callback: (error: any, data: any, response: any) => void
) {
  return finnhubClient.recommendationTrends(symbol, callback);
}

// // Stock dividends
// finnhubClient.stockDividends(
//   "KO",
//   "2019-01-01",
//   "2020-06-30",
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// // Splits
// finnhubClient.stockSplits(
//   "AAPL",
//   "2000-01-01",
//   "2020-06-15",
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// // Stock symbols
// finnhubClient.stockSymbols("US", (error, data, response) => {
//   console.log(data);
// });

// // Support resistance
// finnhubClient.supportResistance("AAPL", "D", (error, data, response) => {
//   console.log(data);
// });

// // Technical indicator
// finnhubClient.technicalIndicator(
//   "AAPL",
//   "D",
//   1580988249,
//   1591852249,
//   "macd",
//   {},
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// // Transcripts
// finnhubClient.transcripts("AAPL_162777", (error, data, response) => {
//   console.log(data);
// });

// // Transcripts list
// finnhubClient.transcriptsList("AAPL", (error, data, response) => {
//   console.log(data);
// });

// // Upgrade/downgrade
// finnhubClient.upgradeDowngrade({ symbol: "AAPL" }, (error, data, response) => {
//   console.log(data);
// });

// // Tick Data
// api.stockTick("AAPL", "2020-03-25", 500, 0, (error, data, response) => {
//   console.error(data);
// });

// // Indices Constituents
// api.indicesConstituents("^GSPC", (error, data, response) => {
//   console.error(data);
// });

// // Indices Historical Constituents
// api.indicesHistoricalConstituents("^GSPC", (error, data, response) => {
//   console.error(data);
// });

// // ETFs Profile
// api.etfsProfile("SPY", (error, data, response) => {
//   console.error(data);
// });

// // ETFs Holdings
// api.etfsHoldings("SPY", (error, data, response) => {
//   console.error(data);
// });

// // ETFs Industry Exposure
// api.etfsIndustryExposure("SPY", (error, data, response) => {
//   console.error(data);
// });

// // ETFs Country Exposure
// api.etfsCountryExposure("SPY", (error, data, response) => {
//   console.error(data);
// });
