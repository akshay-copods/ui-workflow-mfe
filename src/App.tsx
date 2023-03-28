import { Drawer, Input } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ReactFlow } from "reactflow";

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const httpData = {
  defaultDomain: "https://sandboxurl.com/dev7-zsddls.com/signup",
  isCustomDomain: true,
  triggerType: [
    "HTTP based trigger",
    "SMTP based trigger",
    "FTP based trigger",
  ],
  customDomain: {
    appEnv: ["Dev", "Staging", "Prod"],
    url: "https://test.dev.com",
    urlPath: "",
    params: [
      { key: "plan", value: "standerd" },
      { key: "search", value: "true" },
    ],
  },
};
const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "HTTP TRIGGER", type: "HTTP", data: httpData },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "AUTHENTICATE", type: "AUTH" },
  },
];

const App = () => {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onNodeClick = (event, node) => {
    setPanel(node.data.type);
    console.log("click node", node);
  };

  return (
    <div className='mt-10 text-3xl w-full h-screen'>
      {
        <Drawer
          title='Config'
          placement='right'
          onClose={onClose}
          open={panel === "HTTP"}>
          <label htmlFor='Domain'>Domain</label>
          <Input />
        </Drawer>
      }
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          onNodeClick={onNodeClick}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
