import React from "react";
import ReactDOM from "react-dom";

import ReactFlow, {Background,
  Controls,
  MiniMap, useEdgesState,
  useNodesState,} from "reactflow";
import "./index.scss";

import "reactflow/dist/style.css";

import HeaderLayout from './components/HeaderLayout';
import { default as NarrowLeftSidebar } from "./components/SidebarLayout";
import RightPane from './components/RightPane';
import NodeTileStyle from "./components/NodeTileStyle"

const onNodeClick = (event, node) => console.log('click node', node);

const edgeStyle = {
  strokeWidth: 2,
  color: 'red'
}
const HTTPData = {
  label: "HTTP Trigger",
  defaultDomain: "https://sandboxurl.com/dev7-zsddls.com/signup",
  isCustomDomain: true,
  triggerType: ["HTTP based trigger", "SMTP based trigger", "FTP based trigger"],
  icon: 'mdi:earth-arrow-right',
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
  {
    id: "1",
    type: "custom",
    data: HTTPData,
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: {
      label: "Authenticate User",
      description: "description",
      icon: 'mdi:shield-account-outline',
    },

    position: { x: -10, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: {
      label: "Create Tenant",
      description: "description",
      icon: 'material-symbols:add-home-outline'
    ,
    },

    position: { x: 0, y: 350 },
  },
  {
    id: "4",
    type: "custom",
    data: {
      label: "Redirect User",
      description: "description",
      icon: 'ion:navigate-circle-outline',
    },

    position: { x: 0, y: 500 },
  },
];
const edgeStyles = {
  strokeWidth: 2,
}
const initialEdges = [
    {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
    label: 'test',
    style: edgeStyles,
  },
  {
    id: "e1-3",
    source: "2",
    target: "3",
    type: "smoothstep",
    style: edgeStyles,
  },
  {
    id: "e1-4",
    source: "3",
    target: "4",
    type: "smoothstep",
    style: edgeStyles,
  },
  {
    id: "e1-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    style: edgeStyles,
  },
];

const nodeTypes = {
  custom: NodeTileStyle,
};



const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  return (
      <div className="flex h-full">
        <RightPane />
        <NarrowLeftSidebar />
        {/* Content area */}

        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Main content */}
          <HeaderLayout />
          <div className="flex flex-1 items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              {/* Primary column */}
              <section
                  aria-labelledby="primary-heading"
                  className="flex h-full min-w-0 flex-1 flex-col lg:order-last"
              >


                <ReactFlow
                    nodes={initialNodes}
                    edges={initialEdges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    onNodeClick={onNodeClick}
                    nodesDraggable={true}
                    defaultViewport={{ x: 600, y: 0, zoom: 0.8 }}
                    className="bg-teal-50"
                >
                  <MiniMap />
                  <Controls />
                  <Background color="#99b3ec" variant="dots" />
                </ReactFlow>


              </section>
            </main>
          </div>
        </div>
      </div>
  )
}


ReactDOM.render(<App />, document.getElementById("app"));
