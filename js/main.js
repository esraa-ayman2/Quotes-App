var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  { quote: "“So many books, so little time.”", author: "― Frank Zappa " },
  {
    quote:
      "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
    author: "― Albert Camus ",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.” ",
    author: "― Robert Frost ",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    author: "― Albert Einstein ",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    author: "― Bernard M. Baruch ",
  },
  {
    quote:
      "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
    author: "― William W. Purkey ",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
    author: "― Dr. Seuss",
  },
  {
    quote: "“Be the change that you wish to see in the world.” ",
    author: "― Mahatma Gandhi ",
  },
  {
    quote: "“In the middle of every difficulty lies opportunity.”",
    author: "― Albert Einstein",
  },
  { quote: "“Turn your wounds into wisdom.”", author: "― Oprah Winfrey" },
  { quote: "“Happiness depends upon ourselves.”", author: "― Aristotle" },
  {
    quote: "“Do not take life too seriously. You will not get out alive.”",
    author: "― Elbert Hubbard",
  },
];
// Check Repeat Of Number
var lastIndex = -1;
function checkNumberRepeate() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);
  lastIndex = randomIndex;
  return randomIndex;
}
function generateQuote() {
  var num = checkNumberRepeate();
  document.getElementById("quoteOutput").innerHTML = quotes[num].quote;
  document.getElementById("authorOutput").innerHTML = quotes[num].author;
}
