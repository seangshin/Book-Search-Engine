const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    description: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    savedBooks(username: String): [Book]
    savedBook(bookId: ID!): Book
  }

  type Mutation {
    # addUser(username: String!, email: String!, password: String!): Auth
    # login(email: String!, password: String!): Auth
    # addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    # addComment(
    #   thoughtId: ID!
    #   commentText: String!
    #   commentAuthor: String!
    # ): Thought
    # removeThought(thoughtId: ID!): Thought
    # removeComment(thoughtId: ID!, commentId: ID!): Thought
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSavedBook(title: String!, author: String!, dateSaved: String!): Book
    removeSavedBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;
