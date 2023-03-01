import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: template-mfe</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <div>Mock: MSW</div>
    <div>Router: React Router</div>
    <div>GraphQL Client: graphql-request</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
