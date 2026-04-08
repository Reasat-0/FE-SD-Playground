import { authors, books } from "./data.js";

export const resolvers = {
  Query: {
    books: () => {
      return books;
    },
    authors: () => {
      return authors;
    },
  },
};
