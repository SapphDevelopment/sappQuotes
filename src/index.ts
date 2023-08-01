import fetch from "node-fetch";

export enum Categories {
  inspiration = "inspiration",
  motivation = "motivation",
  love = "love",
  success = "success",
  happy = "happy",
  perseverance = "perseverance",
  wisdom = "wisdom",
  sad = "sad",
}

interface Quote {
  author: string;
  quote: string;
  category: Categories;
}

const url: string =
  "https://raw.githubusercontent.com/SapphireDevs/quotes/main/quotes.ts";

export async function fetchCategories(): Promise<string[]> {
  return Object.values(Categories);
}

export async function fetchQuotes(): Promise<Quote[]> {
  const response = await fetch(url);
  const fileContent = await response.text();

  const regex = /const quotes: Quote\[\] = (\[[\s\S]*?\]);/;
  const match = RegExp(regex).exec(fileContent);

  if (!match || !match[1]) {
    throw new Error("Failed to parse quotes file");
  }

  const quotes = eval(match[1]) as Quote[];
  return quotes;
}

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
      author: "Unknown",
      quote: `No quotes found for the specified category: ${category}`,
      category: category as Categories,
    };
  }

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[randomIndex];
}
