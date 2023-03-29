import { Drawer, Input, Select } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import "./index.scss";

const initialEdges = [
  { id: "1", source: "1", target: "2", show: false },
{ id: "2", source: "2", target: "5", show: false },
{ id: "3", source: "5", target: "7", show: false },
{ id: "4", source: "1", target: "2", show: true },
{ id: "5", source: "2", target: "7", show: true },
];
const HTTP_CONFIG = {
  configTitle: "HTTP Trigger",
  sections: [
    {
      sectionTitle: "Sandbox Settings",
      inputs: [
        {
          label: "URL",
          inputType: "TEXT",
          value: "https://sandboxurl.com/dev7-zsddls.com/signup",
          options: [],
        },
        {
          label: "Trigger Type",
          inputType: "SELECT",
          value: "HTTP based trigger",
          options: [
            { value: "HTTP based trigger", label: "HTTP based trigger" },
            { value: "API based trigger", label: "API based trigger" },
          ],
        },
      ],
    },
  ],
};
const AUTH_CONFIG = {
  configTitle: "AUTH Config",
  sections: [
    {
      sectionTitle: "Sign up IDP",
      inputs: [
        {
          label: "Tenant Name",
          inputType: "TEXT",
          value: "New Tenant",
          options: [],
        },
        {
          label: "App Environment",
          inputType: "SELECT",
          value: "Dev",
          options: [
            { value: "Dev", label: "Dev" },
            { value: "Staging", label: "Staging" },
          ],
        },
      ],
    },
  ],
};
const initialNodes = [
  {
    id: "1",
    position: { x: 700, y: 300 },
    data: { label: "HTTP TRIGGER", type: "HTTP", data: HTTP_CONFIG },
    style: { backgroundColor: "rgba(255, 0, 0, 0.2)" },
  },
  {
    id: "2",
    position: { x: 700, y: 400 },
    data: { label: "AUTHENTICATE", type: "AUTH", data: AUTH_CONFIG, groupNodeId: "3" },
  },
  {
    id: "3",
    type: "group",
    position: { x: 510, y: 500 },
    style: {
      width: 540,
      height: 100
    },
    hidden: true
  },
  {
    id: "4",
    data: { label: "Sign Up IDP", type: "SIGNUPIDP", data: AUTH_CONFIG },
    position: { x: 20, y: 20 },
    parentNode: "3",
    extent: "parent",
    hidden: true
  },
  {
    id: "5",
    data: { label: "Sign Up Page", type: "SIGNUPPAGE", data: AUTH_CONFIG },
    position: { x: 190, y: 20 },
    parentNode: "3",
    extent: "parent",
    hidden: true
  },
  {
    id: "6",
    data: { label: "Error", type: "ERRORPAGE", data: AUTH_CONFIG },
    type: "output",
    position: { x: 360, y: 20 },
    parentNode: "3",
    extent: "parent",
    hidden: true
  },
  {
    id: "7",
    position: { x: 700, y: 500 },
    data: { label: "Create Tenant", type: "AUTH", data: AUTH_CONFIG },
  },
];

const App = () => {
  const [open, setOpen] = useState(false);
  const [activeConfig, setActiveConfig] = useState({}) as any;
  const [nodes, setNodes] = useState(initialNodes) as any;
  console.log("ACTIVE CONFIG", activeConfig);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setActiveConfig("");
  };

  const onNodeClick = (event, node) => {
    setActiveConfig(node.data.data);
    //console.log("click nodes", nodes);
    console.log("click node", node);
    if (node.id === "2") {
      setNodes(
        nodes.map((nodes: any) =>
        nodes.id === node.data.groupNodeId ||
        nodes.parentNode === node.data.groupNodeId
        ? { ...nodes, hidden: !nodes.hidden }
        : nodes.id === "7" ? {...nodes, position: {...nodes.position, y: nodes.position.y === 500 ? 650 : 500}} : nodes
        )
        );
      }
      
      //console.log("click nodes", node);
      //setEdges(edges.map((edge) => ({ ...edge, show: !edge.show })));
  };

  return (
    <div className='mt-10 text-3xl w-full h-screen'>
      {
        <Drawer
          title={activeConfig?.configTitle}
          placement='right'
          onClose={onClose}
          open={Object.keys(activeConfig).length !== 0}>
          {activeConfig?.sections?.map((section) => (
            <div className='flex flex-col gap-5'>
              <h3 className='text-lg'>{section.sectionTitle}</h3>
              {section.inputs?.map((input) => (
                <div className='flex flex-col gap-2'>
                  <label htmlFor=''>{input.label}</label>
                  {input.inputType === "TEXT" && (
                    <Input
                      type='text'
                      value={input.value}
                      className='border border-black'
                    />
                  )}
                  {input.inputType === "SELECT" && (
                    <Select
                      defaultValue={input.value}
                      options={input.options}
                      id=''
                      className='border border-black'></Select>
                  )}
                </div>
              ))}
            </div>
          ))}
        </Drawer>
      }
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={initialEdges.filter((edge) => edge.show)}
          onNodeClick={onNodeClick}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
