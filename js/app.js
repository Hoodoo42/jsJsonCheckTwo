// creating an object that will be turned into string so it can be saved in a cookie
let selection = {
  title: `Black Candle`,
  price: 43,
  imageUrl: `https://images.unsplash.com/photo-1504036583833-1b9340d6722f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80`,
  description: `The Black Candles are lovely`,
};

// setting the variable that will hold the string version of the object
// Cookies.set is named userSelection and is holding the string version of the object (through the value of the variable selectionJSON)

let selectionJson = JSON.stringify(selection);
Cookies.set(`userSelection`, selectionJson);
