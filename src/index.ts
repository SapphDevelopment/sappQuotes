import fetch from "node-fetch";

interface Quote {
  text: string;
  author: string;
  category: string;
  tags: string[];
}

const baseUrl = "https://raw.githubusercontent.com/sapphiredevs/quotes/main";

export async function fetchQuotes(): Promise<Quote[]> {
  const response = await fetch(`${baseUrl}/quotes.json`);
  const quotes = await response.json();
  return quotes as Quote[];
}

export async function fetchCategories(): Promise<string[]> {
  const response = await fetch(`${baseUrl}/categories.json`);
  const categories = await response.json();
  return categories as string[];
}

export async function getRandomQuote(category?: string): Promise<Quote> {
  const quotes = await fetchQuotes();
  let filteredQuotes: Quote[] = quotes;

  if (category) {
    const categories = await fetchCategories();
    if (!categories.includes(category)) {
      throw new Error(`Invalid category: ${category}`);
    }
    filteredQuotes = quotes.filter((quote) => quote.category === category);
  }

  if (filteredQuotes.length === 0) {
    throw new Error("No quotes found for the specified category");
  }

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[randomIndex];
}
