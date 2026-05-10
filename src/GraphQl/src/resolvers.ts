import { authors, books } from "./data.js";

type BooksResolverType = {
  parent: any;
  args: any;
  context: any;
};

export const resolvers = {
  Author: {
    books: (parent: any, args: any, context: any) => {
      return parent.bookIds.map((bookId: number) => {
        return books.find((book) => book.id === bookId);
      });
    },
  },

  Book: {
    author: (parent: any, args: any, context: any) => {
      return parent.authorId
        ? authors.find((author) => author.id === parent.authorId)
        : null;
    },
  },
  Query: {
    books: () => {
      return books;
    },
    authors: () => {
      return authors;
    },
  },

  Mutation: {
    addBook: (parent: any, args: any, context: any) => {
      console.log(args);
      const newBook = {
        id: books.length + 1,
        title: args.title,
        authorId: parseInt(args.authorId),
      };
      books.push(newBook);
      return newBook;
    },
  },
};
