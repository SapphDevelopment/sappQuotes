# sappQuotes

<div align="left">
    <a href="https://discord.gg/sapphiredevs-1044098950455627867"> <img src="https://img.shields.io/discord/1044098950455627867?color=5865F2&logo=discord&logoColor=white" alt="npm version"/> </a>
    <a href="https://www.npmjs.com/package/sappquotes"> <img src="https://img.shields.io/npm/v/sappquotes.svg?maxAge=3600" alt="npm version"/> </a>
    <a href="https://www.npmjs.com/package/sappquotes"> <img src="https://img.shields.io/npm/dt/sappquotes.svg?maxAge=3600" alt="npm downloads"/> </a>
</div>

sappQuotes is an npm package that provides a collection of quotes with various categories. It allows you to retrieve random quotes or quotes from specific categories.

## Installation

You can install sappQuotes using npm:

```shh
npm install sappquotes@latest
```

## Usage

Here's an example how to use sappQuotes:

```typescript
import { fetchQuotes, fetchCategories, getRandomQuote } from "sappquotes";

const randomQuote = await getRandomQuote();
console.log('Random Quote:', randomQuote);

const randomQuoteFromCategory = await getRandomQuote("inspiration");
console.log('Random Quote from "inspiration" category:', randomQuoteFromCategory);

const fetchAllQuotes = await fetchQuotes();
console.log(fetchAllQuotes);

const fetchAllCategories = await fetchCategories();
console.log(fetchAllCategories);
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
