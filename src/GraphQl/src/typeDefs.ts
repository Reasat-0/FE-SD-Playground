export const typeDefs = `#graphql

    type Author{
        id: ID!
        name: String
        books: [Book]
    }
    
    
    type Book{
        id: ID!
        title: String!
        author : Author
        year: Int
    }

    type Query {
        authors : [Author]
        books: [Book]
    }

    type Mutation {
        addBook (title: String! , authorId: ID! ) :  Book
        
    }

`;
