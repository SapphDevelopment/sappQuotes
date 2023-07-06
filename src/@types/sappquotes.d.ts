declare module "sappquotes" {
  import { Response } from "node-fetch";

  import { categories } from "../enums.js";

  interface Quote {
    text: string;
    author: string;
    category: categories;
    tags: string[];
  }

  /**
   * Fetch quotes from the quotes.ts file
   * @returns A promise that resolves to an array of Quote objects
   */
  function fetchQuotes(): Promise<Quote[]>;

  /**
   * Fetch and count all quotes registered
   * @returns A promise that resolves to the number of quotes
   */
  function countQuotes(): Promise<number>;

  /**
   * Fetch available categories of quotes
   * @returns A promise that resolves to an array of category names
   */
  function fetchCategories(): Promise<string[]>;

  /**
   * Get a random quote, optionally filtered by category
   * @param category - Optional. The category to filter the quotes
   * @returns A promise that resolves to a random Quote object
   */
  function getRandomQuote(category?: categories): Promise<Quote>;

  export {
    fetchQuotes,
    countQuotes,
    fetchCategories,
    getRandomQuote,
    categories,
    Quote,
  };
}
