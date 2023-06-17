import { fetchQuotes, fetchCategories, getRandomQuote } from "./index.js";

async function main() {
  try {
    const quotes = await fetchQuotes();
    console.log(quotes);

    const categories = await fetchCategories();
    console.log(categories);

    const randomQuote = await getRandomQuote();
    console.log(randomQuote.author);
    console.log(randomQuote.category);
    console.log(randomQuote.tags);
    console.log(randomQuote.text);

    const randomQuoteFromCategory = await getRandomQuote("inspiration");
    console.log(randomQuoteFromCategory);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
