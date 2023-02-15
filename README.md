# Book-Search-Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 ![](/screenshot.JPG)

Link to deployed application: 

## Description
The motivation of this project is to build a MERN application using a GraphQL API built with Apollo Server. The application is built using a React front end, MongoDB database, and Node.js/Express.js server. It features a fully functioning Google Books API search engine built with a GraphQL API and an Apollo Server to fetch and modify data using queries and mutations. It also implements JSON Web Tokens (JWT) and authentication middleware to work in the context of a GraphQL API. All these technologies integrate together to give the ability to create a personalized user experience. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
- [Appendix](#appendix)
  
## Installation
The following tools were used for development and testing of this project: Code development IDE (Microsoft VS Code), node.js (JavaScript runtime environment), npm (software registry containing inquirer). See below for the full list of dependencies.

To test this application in development, run the following command in the root directory:
$ npm run install
$ npm run develop
  
## Usage
Open the URL using a browser (Google Chrome preferred). 
  
## Credits
Georgia Tech Coding Bootcamp instructors, TA's, and other faculty.

## License
MIT
  
## Questions
GitHub URL: https://github.com/seangshin
Reach out additional questions at shin.seang@gmail.com


## Appendix

Client to Server endpoints flow

1. Client Side: The client-side code for saving a book would typically involve writing a GraphQL mutation in the form of a query string that defines the data to be sent to the server. This mutation would be triggered when the user clicks a save button or performs some other action in the client-side form.

2. Client-side Queries: The client-side code would then use a GraphQL client library, such as Apollo Client, to send the mutation to the server. The client library would handle the process of constructing a request and sending it to the server.

3. Server Side: On the server side, the GraphQL API receives the mutation request and passes it to the appropriate resolver function for processing. The resolver function is defined in the resolvers.js file and implements the logic for saving a book in the database.

4. Resolver: The resolver function for the save book mutation would start by checking if the user is authenticated, using the context argument, which contains information about the current request, including the user's authentication token. If the user is not authenticated, the resolver would throw an error. If the user is authenticated, the resolver would use the Mongoose library to find the user in the database, based on the user ID specified in the mutation, and update the user's saved books by adding the new book to the savedBooks array.

5. Models: The models for the User and Book collections are defined in the models folder, using the Mongoose library. These models define the structure of the data stored in the database and provide methods for reading, writing, and updating data.

6. TypeDefs: The GraphQL schema, which defines the types and fields available in the API, is defined in the typeDefs.js file. This schema includes definitions for the User and Book types, as well as the mutations and queries that can be performed on them.

7. Server Endpoints: Finally, the GraphQL API is served by the Express.js web framework, which listens on a specified endpoint for incoming requests and routes them to the appropriate resolver function for processing.

This is the general flow of a MERN app that uses a GraphQL API to save a book. Of course, the specifics may vary depending on the specific requirements of your project, but this should give you a high-level understanding of how the different components fit together.


JSON Web Tokens (JWT)
JWT is a standard for creating access tokens that are used to authenticate and authorize users in applications. A JWT is a string that contains a JSON object, which is cryptographically signed using a secret key, to verify its authenticity.

The token consists of three parts: a header, a payload, and a signature. The header typically contains information about the algorithm used to sign the token. The payload contains information about the user, such as the user ID and any additional data required for authentication and authorization. The signature is a hash that is created by combining the header and payload with a secret key.



