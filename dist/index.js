import fetch from "node-fetch";
// Enum to represent different categories of quotes
var categories;
(function (categories) {
    categories["inspiration"] = "inspiration";
    categories["motivation"] = "motivation";
    categories["love"] = "love";
    categories["happy"] = "happy";
    categories["success"] = "success";
    categories["perseverance"] = "perseverance";
    categories["wisdom"] = "wisdom";
    categories["sad"] = "sad";
})(categories || (categories = {}));
const baseUrl = "https://raw.githubusercontent.com/sapphiredevs/quotes/main";
const quotesFileUrl = `${baseUrl}/quotes.ts`;
// Fetch quotes from the quotes.ts file
export async function fetchQuotes() {
    const response = await fetch(quotesFileUrl);
    const fileContent = await response.text();
    const regex = /const quote: Quote\[\] = (\[[\s\S]*?\]);/;
    const match = fileContent.match(regex);
    if (!match || !match[1]) {
        throw new Error("Failed to parse quotes file");
    }
    const quotes = eval(match[1]);
    return quotes;
}
// Fetch and count all quotes registered
export async function countQuotes() {
    const quotes = await fetchQuotes();
    return quotes.length;
}
// Fetch available categories of quotes
export async function fetchCategories() {
    return Object.values(categories);
}
// Get a random quote, optionally filtered by category
export async function getRandomQuote(category) {
    const quotes = await fetchQuotes();
    let filteredQuotes = quotes;
    if (category) {
        const categories = await fetchCategories();
        const lowercaseCategory = category.toLowerCase();
        if (!categories.map((c) => c.toLowerCase()).includes(lowercaseCategory)) {
            throw new Error(`Invalid category: ${category}`);
        }
        filteredQuotes = quotes.filter((quote) => quote.category.toLowerCase() === lowercaseCategory);
    }
    if (filteredQuotes.length === 0) {
        return {
            text: `No quotes found for the specified category: ${category}`,
            author: "",
            category: categories.wisdom,
            tags: [],
        };
    }
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
}
