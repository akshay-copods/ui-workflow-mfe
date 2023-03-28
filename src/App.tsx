import React from "react";
import ReactDOM from "react-dom";

import ReactFlow from "reactflow";
import "./index.scss";

import "reactflow/dist/style.css";

const onNodeClick = (event, node) => console.log('click node', node);

const httpData = {
  defaultDomain: "https://sandboxurl.com/dev7-zsddls.com/signup",
  isCustomDomain: true,
  triggerType: ["HTTP based trigger", "SMTP based trigger", "FTP based trigger"],
  customDomain : {
    appEnv: ["Dev", "Staging", "Prod"],
    url: "https://test.dev.com",
    urlPath: "",
    params : [
      {key: "plan", value: "standerd"},
      {key: "search", value: "true"}
    ]
  }
}
const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Label 1", type: "HTTP", data: httpData}},
  { id: "2", position: { x: 0, y: 100 }, data: { label: "Label 2", type: "SMTP"}},
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <div className='h-96 w-96 border-8'>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodeClick={onNodeClick}
      />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
