const socket = new WebSocket(
  `wss://ws.finnhub.io?token=${process.env.REACT_APP_X_FINNHUB_TOKEN}`
);

// Connection opened -> Subscribe
export function createListenerForSymbol(
  symbolName: string,
  callback: (event: any) => void
) {
  socket.addEventListener("open", function (event) {
    socket.send(JSON.stringify({ type: "subscribe-news", symbol: symbolName }));
    socket.addEventListener("message", callback);
  });
}

// // Listen for messages
// socket.addEventListener("message", function (event) {
//   console.log("Message from server ", event.data);
// });

// Unsubscribe
const unsubscribe = function (symbol: any) {
  socket.send(JSON.stringify({ type: "unsubscribe-news", symbol: symbol }));
};
