const Home = () => {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-red-800 mb-4">
        Welcome to my MERN Auth App
      </h1>
      <p className="mb-4 text-700">
        This is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It includes authentication features that
        allow users to sign up, log in, and logout, and provides access to
        protected routes only for authicated users.
      </p>
      <p className="mb-4 text-700">
        The frontend of the app is built with React and uses React-router-dom
        for client-side routing. The backedn is built with Node.js and Express,
        and uses MongoDB as the database. Authentication is implented using JSON
        Web Tokens (JWT)
      </p>
      <p className="mb-4 text-700">
        This app is intented as a starting point for building fullstack web apps
        with authentication using the MERN stack.
      </p>
    </div>
  );
};

export default Home;
