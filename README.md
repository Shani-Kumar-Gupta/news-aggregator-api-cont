# Airtribe Backend Engineering: News Aggregator API Backend Project
## Objective
Build a RESTful API that allows users to fetch news articles from multiple sources based on their preferences.

## Project Description:

In this project, we will create a RESTful API using Node.js, Express.js, and NPM packages. The API will allow users to register, log in, and set their news preferences (e.g., categories, sources). The API will then fetch news articles from multiple sources using external news APIs (e.g., NewsAPI). The fetched articles should be processed and filtered asynchronously based on user preferences.

## Extended Project Requirement Description:

This assignment will be on top of the previous week’s work. You need to make changes accordingly.

   1. Review the project from Week 2 and identify potential security vulnerabilities.
   2. Implement input validation and sanitization for user registration, event creation, and updates.
   3. Optimize performance by implementing caching, if not done in the previous week's optional extension.
   4. Set up unit testing and write test cases for the API endpoints, focusing on testing input validation and proper functioning of CRUD operations. Make sure to achieve good test coverage and test edge cases.
   5. Refactor the API code to improve error handling, ensuring that appropriate error messages are returned for different types of errors (e.g., validation errors, authentication errors, authorization errors, and server errors).
   6. Test the API using Postman or Curl to ensure it works as expected and that the implemented security measures are effective.

## Optional extension:
   1. Implement rate limiting to protect the API against brute-force attacks and excessive requests.
   2. Add user email verification to the registration process. Send a verification email with a unique token and require the user to confirm their email address before they can access the API.
   3. Log API requests and responses for auditing purposes. Use a logging library like Winston or Morgan to log request and response data.
   4. Add end-to-end tests for the API using a testing tool like Supertest to simulate user interaction and test the entire application workflow.

## Initial Project Setup:

Used the below-mentioned npm command to initialize the project-
`npm init`

## Follow the below commands to run the project locally on your system:

1. Clone the repository:

   ```bash
   https://github.com/Shani-Kumar-Gupta/Airtribe-Backend-Engineering-Projects.git
   ```
2. Open the cloned repository

2. Navigate to the project directory:

   ```bash
   cd news-aggregator-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application

   ```bash
   npm start
   ```
   Alternative to run the application
   ```bash
   npm run dev
   ```

5. Run the below command for testing and test coverage report

   Command to Run Test Cases:
   ```bash
   npm run test
   ```
   Command to get the Test Coverage Report
   ```bash
   npm run coverage
   ```

## Dependencies:

As a part of backend application and API development, I have used the below-mentioned packages or modules as dependencies-
1. express
2. body-parser
3. dotenv
4. nodemon
5. axios
6. bcrypt
7. jsonwebtoken
8. url-search-params
9. fs
10. helmet
11. chai
12. mocha
13. sinon.js
14. winston
15. morgan    

## Endpoint Implemented:

1. Register New User: `/auth/register` Method: `POST``
2. Login existing user: `/auth/login` Method: `POST`
3. Get Users News Preferences: `/newsAggregator/users/preferences` Method: `GET`
4. Updated Users News Preferences: `/newsAggregator/users/preferences` Method: `PUT`
5. Get News Basis User Preferences: `/newsAggregator/news` Method: `GET`
