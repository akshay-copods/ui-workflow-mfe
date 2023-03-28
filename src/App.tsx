import { Button, Drawer, Input } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    children: [
      {
        id: "1-1",
        position: { x: 50, y: 0 },
      },
    ],
  },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const App = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='mt-10 text-3xl w-full h-screen'>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Button
          type='primary'
          onClick={showDrawer}>
          Open
        </Button>
        <Drawer
          title='Config'
          placement='right'
          onClose={onClose}
          open={open}>
          <label htmlFor='Domain'>Domain</label>
          <Input />
        </Drawer>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
