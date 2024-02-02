//create current date
const currentDate = document.getElementById('todayDate');

let today = new Date();
let date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

const myQuotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success"
  }
]

const myQuote = document.getElementById('todayQuote');

if (date == "2024/2/2") {
  console.log("Hello,  world");
  myQuote.innerHTML = myQuotes[0].quote;
} else if (date == "2024/2/3") {
  myQuote.innerHTML = myQuotes[1].quote;
} else if (date == "2024/2/4") {
  myQuote.innerHTML = myQuotes[2].quote;
} else if (date == "2024/2/5") {
  myQuote.innerHTML = myQuotes[3].quote;
} else if (date == "2024/2/6") {
  myQuote.innerHTML = myQuotes[4].quote;
} 