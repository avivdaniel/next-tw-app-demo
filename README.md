# Full-Stack Serverless Marketplace Application 🚀

This project is a full-stack serverless marketplace application built with Next.js, GraphQL, and FaunaDB. It allows you to create a robust and feature-rich marketplace without the hassle of managing servers or databases. With the power of Next.js and FaunaDB, you can rapidly develop and deploy production-ready applications. 💪

## Features 🎯

- Server-side rendering with Next.js for optimal performance and SEO. 🌐
- Integration with Apollo GraphQL Client for efficient data fetching and caching. 🚀
- FaunaDB, a flexible and serverless distributed document-relational database, powers the backend. 🗃️
- Powerful GraphQL API provided by FaunaDB for seamless data access and manipulation. 🔍
- Custom Fauna GraphQL resolvers (UDFs) to handle complex business logic. 💡
- Authentication with Auth0 for secure user management and authentication. 🔒
- Stripe payment integration for handling transactions. 💳

## Getting Started 🚀

To get started with the project, follow the steps below:

1. Clone the repository: `git clone https://github.com/avivdaniel/next-tw-store.git` 📥
2. Install dependencies: `npm install` ⚙️
3. Configure environment variables:
   - Create a `.env` file in the project root directory.
   - Add the necessary environment variables, such as `FAUNA_SECRET_KEY`, `AUTH0_DOMAIN`, and `AUTH0_CLIENT_ID`. Refer to the `.env.example` file for the required variables.
4. Start the development server: `npm run dev` 🏗️
5. Open your browser and access the application at `http://localhost:3000` 🌐

## Project Structure 📂

The project structure is designed to provide a clear separation of concerns and maintainability. Here's an overview of the main directories and files:

- `pages/`: Contains the Next.js pages that define the application routes.
- `components/`: Contains reusable React components used across the application.
- `graphql/`: Includes GraphQL queries, mutations, and schemas used by the Apollo Client.
- `pages/api/`: Contains the serverless API routes used for backend functionality.
- `services/`: Includes utility functions and services used throughout the application.
- `styles/`: Contains global styles and styling utilities.

## Prerequisites ⚙️

To run the project locally, you need to have the following prerequisites installed:

- Node.js (v14 or above) 🟩
- npm (v7 or above) 📦
- FaunaDB account and API key 🗄️
- Auth0 account with configured domain and client ID 🔑
- Stripe account for payment integration 💳

## Contributing 🤝

Contributions to the project are welcome! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request.

Please make sure to follow the project's code of conduct and adhere to best practices when contributing.

## License 📝

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT
