import fetch from "node-fetch";

// Enum to represent different categories of quotes
enum categories {
  inspiration = "inspiration",
  motivation = "motivation",
  love = "love",
  happy = "happy",
  success = "success",
  perseverance = "perseverance",
  wisdom = "wisdom",
  sad = "sad",
}

// Interface to describe the structure of a quote
interface Quote {
  text: string;
  author: string;
  category: categories;
  tags: string[];
}

const baseUrl = "https://raw.githubusercontent.com/sapphiredevs/quotes/main";
const quotesFileUrl = `${baseUrl}/quotes.ts`;

// Fetch quotes from the quotes.ts file
export async function fetchQuotes(): Promise<Quote[]> {
  const response = await fetch(quotesFileUrl);
  const fileContent = await response.text();

  const regex = /const quote: Quote\[\] = (\[[\s\S]*?\]);/;
  const match = fileContent.match(regex);

  if (!match || !match[1]) {
    throw new Error("Failed to parse quotes file");
  }

  const quotes = eval(match[1]) as Quote[];

  return quotes;
}

// Fetch and count all quotes registered
export async function countQuotes(): Promise<number> {
  const quotes = await fetchQuotes();
  return quotes.length;
}

// Fetch available categories of quotes
export async function fetchCategories(): Promise<string[]> {
  return Object.values(categories);
}

// Get a random quote, optionally filtered by category
export async function getRandomQuote(category?: string): Promise<Quote> {
  const quotes = await fetchQuotes();
  let filteredQuotes: Quote[] = quotes;

  if (category) {
    const categories = await fetchCategories();
    const lowercaseCategory = category.toLowerCase();

    if (!categories.map((c) => c.toLowerCase()).includes(lowercaseCategory)) {
      throw new Error(`Invalid category: ${category}`);
    }
    filteredQuotes = quotes.filter(
      (quote) => quote.category.toLowerCase() === lowercaseCategory
    );
  }

  if (filteredQuotes.length === 0) {
    return {
      text: `No quotes found for the specified category: ${category}`,
      author: "Could not be found.",
      category: category as categories,
      tags: [],
    };
  }

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[randomIndex];
}
