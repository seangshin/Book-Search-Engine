const User = require('<path-to-user-model>');
const { ObjectId } = require('mongodb');

const resolvers = {
  Query: {
    users: () => User.find({}),
    user: (_, { username }) => User.findOne({ username }),
    savedBooks: (_, { username }) => User.findOne({ username }).savedBooks,
  },
  Mutation: {
    addUser: (_, { username, email, password }) => {
      const newUser = new User({ username, email, password });
      return newUser.save();
    },
    addBook: (_, { username, book }) =>
      User.findOneAndUpdate(
        { username },
        { $push: { savedBooks: book } },
        { new: true }
      ),
    removeBook: (_, { username, bookId }) =>
      User.findOneAndUpdate(
        { username },
        { $pull: { savedBooks: { _id: ObjectId(bookId) } } },
        { new: true }
      ),
  },
};

module.exports = resolvers;