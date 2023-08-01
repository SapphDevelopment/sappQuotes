# sappQuotes

<p align="left"><a href="https://nodei.co/npm/sappquotes"><img src="https://nodei.co/npm/sappquotes.png?mini=true"></a></p>
<p align="left"><a href="https://ko-fi.com/J3J1FVEH0"><img src="https://ko-fi.com/img/githubbutton_sm.svg"></a></p>

<div align="left">
    <a href="https://discord.gg/75QR5duadJ"> <img src="https://img.shields.io/discord/1129153558898540684?color=5865F2&logo=discord&logoColor=white" alt="npm version"/> </a>
    <a href="https://www.npmjs.com/package/sappquotes"> <img src="https://img.shields.io/npm/v/sappquotes.svg?maxAge=3600" alt="npm version"/> </a>
    <a href="https://www.npmjs.com/package/sappquotes"> <img src="https://img.shields.io/npm/dt/sappquotes.svg?maxAge=3600" alt="npm downloads"/> </a>
</div>

sappQuotes is a very lightweight npm package that provides a collection of quotes with various categories. It allows you to retrieve random quotes or quotes from specific categories. All quotes were manually curated, ensuring no duplicates, no API reliance, and no downtime.

## Installation

You can install sappQuotes using npm:

```shh
npm install sappquotes@latest
```

## Usage

Here's an example how to use sappQuotes:

```typescript
/* JavaScript */ const { getRandomQuote, countQuotes, fetchQuotes, fetchCategories } = require("sappquotes")
/* TypeScrippt */ import { getRandomQuote, countQuotes, fetchQuotes, fetchCategories } = from "sappquotes"

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
```

## API

The sappQuotes package provides the following functions:

### `getRandomQuote`

Retrieve a random quote from any category.

### `getRandomQuote(category: string)`

Retrieve a random quote from a specific category.

- `category`: The category from which to retrieve the quote.

### `fetchQuotes`

Retrieve all available quotes.

### `fetchCategories`

Retrieve all available categories.

## License

MIT License

Copyright (c) 2023 Sapphire Developers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
