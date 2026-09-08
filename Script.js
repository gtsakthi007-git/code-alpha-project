const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vincent Peale"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh"
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown"
  }
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");
const copyBtn = document.getElementById("copyQuote");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

newQuoteBtn.addEventListener("click", generateQuote);

copyBtn.addEventListener("click", async () => {
  const text = `${quoteText.textContent} ${quoteAuthor.textContent}`;

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copied!";
    
    setTimeout(() => {
      copyBtn.textContent = "Copy Thought";
    }, 1500);
  } catch (error) {
    alert("Unable to copy the quote.");
  }
});

// Show a random quote when the app opens
generateQuote();
