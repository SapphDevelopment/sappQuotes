import {
  fetchQuotes,
  countQuotes,
  fetchCategories,
  getRandomQuote,
} from "./index.js";

async function main() {
  try {
    const quotes = await fetchQuotes();
    console.log("ALL THE QUOTES");
    console.log(quotes);

    const countedQuotes = await countQuotes();
    console.log("NUMBER OF QUOTES");
    console.log(countedQuotes);

    const categories = await fetchCategories();
    console.log("ALL THE CATEGORIES");
    console.log(categories);

    const randomQuote = await getRandomQuote();
    console.log("Quote Author " + randomQuote.author);
    console.log("Quote Category " + randomQuote.category);
    console.log("Quote Tags " + randomQuote.tags);
    console.log("Quote Text " + randomQuote.text);

    const randomQuoteFromCategory = await getRandomQuote("inspiratioN");
    console.log("Random Quote");
    console.log(randomQuoteFromCategory);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
