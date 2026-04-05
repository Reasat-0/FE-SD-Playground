export const typeDefs = `#graphql

    type Author{
        id: ID!
        name: String
    }
    
    
    type Book{
        id: ID!
        title: String!
        author : String!
        year: Int
    }

    type Query {
        authors : [Author]
        books: [Book]
    }

`;
