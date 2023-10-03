const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-4 p-3">
        <div>
          <h1 className="font-bold text-xl mb-4">
            Q1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <div className="ml-5">
            <p className="mb-2">
              An access token is a credential used to access protected resources
              on a server, obtained after successful authentication and
              authorization. It is sent with each request to authenticate and
              authorize the user or client application. A refresh token is a
              credential with a longer lifespan that is used to obtain a new
              access token when the current access token expires. It allows the
              client to request a new access token without reauthentication.
            </p>
            <p className="mb-4">
              On the client-side, access tokens are typically stored in memory
              or short-lived storage like browser session storage, while refresh
              tokens are stored securely in more persistent storage such as
              HTTP-only cookies, local storage, or secure storage provided by
              the operating system. Secure storage mechanisms are important to
              protect the tokens from unauthorized access. It&apos;s essential
              to follow the security guidelines and best practices of the
              specific technology being used to ensure proper storage and
              protection of access and refresh tokens.
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-4">
            Q.2 Compare SQL and NoSQL databases?
          </h1>
          <div className="ml-5">
            <p className="mb-4">
              SQL and NoSQL databases are two contrasting types of database
              management systems. SQL databases adhere to a predefined schema
              and use SQL as the query language. They provide strong
              consistency, transactional support, and are well-suited for
              applications requiring complex querying. On the other hand, NoSQL
              databases offer a flexible schema, enabling the storage of
              unstructured or evolving data. They prioritize scalability and
              horizontal expansion, making them suitable for handling large
              amounts of data and accommodating changing requirements. NoSQL
              databases often have their own query languages and provide
              eventual consistency. The choice between SQL and NoSQL depends on
              factors such as data structure, scalability needs, and consistency
              requirements specific to the application at hand.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-4">
            Q3. What is express js? What is Nest JS?
          </h2>
          <div className="ml-5">
            <p>
              Express.js is a minimalist and flexible web application framework
              for Node.js, focusing on simplicity and customization. Nest.js,
              built on top of Express.js, is a structured and opinionated
              framework that brings modularity and scalability to Node.js
              applications using TypeScript. The choice between the two depends
              on the specific needs and preferences of a project, with
              Express.js providing simplicity and flexibility, and Nest.js
              offering a more structured and scalable approach to application
              development.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-4">
            Q4. What is MongoDB aggregate and how does it work?
          </h2>
          <div className="ml-5">
            <p>
              The MongoDB aggregation framework is a feature that allows for
              advanced data processing and analysis within the database. It
              works by applying a series of stages to a collection of documents,
              allowing for complex operations such as filtering, grouping,
              sorting, and transforming the data. Each stage performs a specific
              operation on the data and passes the transformed result to the
              next stage in the pipeline. By combining these stages and
              utilizing various operators and functions, users can perform
              sophisticated data analysis and obtain the desired output. The
              aggregation framework provides a flexible and efficient way to
              process data directly within MongoDB, enabling powerful querying
              and data manipulation capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
