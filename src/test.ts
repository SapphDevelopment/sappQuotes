import { getRandomQuote, fetchCategories, fetchQuotes } from "./index.js";

async function main() {
  // Fetch and display a random quote
  await getRandomQuote().then((quote) => {
    console.log(`"${quote.quote}" - ${quote.author}`);
  });

  // Fetch and display a random quote from a specific category
  const category = "motivation";
  await getRandomQuote(category).then((quote) => {
    console.log(`"${quote.quote}" - ${quote.author} (${quote.category})`);
  });

  // Fetch and display available categories
  await fetchCategories().then((categories) => {
    console.log("Available categories:", categories);
  });

  // Fetch and display available quotes
  await fetchQuotes().then((quotes) => {
    console.log("Available quotes:", quotes);
  });
}

main();
