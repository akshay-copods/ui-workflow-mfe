import React from "react";
import ReactDOM from "react-dom";

import ReactFlow from "reactflow";
import "./index.scss";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <div className='h-96 w-96 border-8'>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
      />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
