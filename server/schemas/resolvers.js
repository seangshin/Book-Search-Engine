const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // // Query to get all users
    // users: async () => {
    //   // Find all users and populate their saved books
    //   return User.find().populate('savedBooks');
    // },
    // // Query to get a specific user by their username
    // user: async (parent, { username }) => {
    //   // Find the user with the specified username and populate their saved books
    //   return User.findOne({ username }).populate('savedBooks');
    // },
    // // Query to get all saved books for a specific user
    // savedBooks: async (parent, { username }) => {
    //   // Find the user with the specified username and return their saved books
    //   const user = await User.findOne({ username });
    //   return user.savedBooks;
    // },
    // // Query to get a specific saved book by its id
    // savedBook: async (parent, { bookId }) => {
    //   // Find the saved book with the specified id
    //   return Book.findOne({ _id: bookId });
    // },
    // Query to get the currently authenticated user
    me: async (parent, args, context) => {
      if (context.user) {
        // Find the authenticated user by their id and populate their saved books
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    // Mutation to add a new user
    addUser: async (parent, { username, email, password }) => {
      // Create a new user with the specified parameters
      const user = await User.create({ username, email, password });
      // Sign a new token for the user
      const token = signToken(user);
      // Return the token and the user
      return { token, user };
    },
    // Mutation to log in an existing user
    login: async (parent, { email, password }) => {
      // Find the user with the specified email
      const user = await User.findOne({ email });

      if (!user) {
        // If no user was found, throw an error
        throw new AuthenticationError('No user found with this email address');
      }

      // Check if the provided password is correct
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        // If the password is incorrect, throw an error
        throw new AuthenticationError('Incorrect credentials');
      }

      // Sign a new token for the user
      const token = signToken(user);
      // Return the token and the user
      return { token, user };
    },
    // Mutation to save a book for a specific user
    saveBook: async (parent, { userId, book }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { savedBooks: book } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Mutation to unsave a book for a specific user
    removeBook: async (parent, { userId, bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $pull: { savedBooks: { _id: bookId } } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;