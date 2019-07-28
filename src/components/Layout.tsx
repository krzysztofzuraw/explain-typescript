import * as React from 'react';

import '../styles/main.css';

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className="container mx-auto">
    <h1 className="text-6xl font-thin text-gray-900 text-center p-12">TypeScript Explained</h1>
    <div className="flex items-center justify-center">
      <input
        className="shadow-md appearance-none border w-2/4 rounded p-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
        type="search"
        placeholder="What do you want to learn?"
      />
    </div>
    <div className="bg-white m-20 shadow h-full p-10 rounded">{children}</div>
    <footer className="text-center p-4 text-xs font-thin">
      This is a community-driven attempt to explain TypeScript jargon. You are welcome to contribute
      on{' '}
      <a
        className="text-blue-600 font-medium"
        href="https://github.com/krzysztofzuraw/explain-typescript"
      >
        GitHub
      </a>
      .
    </footer>
  </div>
);
