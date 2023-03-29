import { default as React, useState } from "react";
import ReactDOM from "react-dom";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import HeaderLayout from "./components/HeaderLayout";
import NodeTileStyle from "./components/NodeTileStyle";
import SettingsDrawer from "./components/SettingsDrawer";
import { default as NarrowLeftSidebar } from "./components/SidebarLayout";
import { mockConfig } from "./config";
import "./index.scss";

import "reactflow/dist/style.css";

const initialPosition = { x: 0, y: 50 };
const nodeDistance = 190;

const calculateNodePosition = (index) => {
  return {
    x: initialPosition.x,
    y: initialPosition.y + nodeDistance * index,
  };
};

const HTTPData = {
  settingsID: "SET_HTTP_TRIGGER",
  label: "HTTP TRIGGER",
  icon: "mdi:earth-arrow-right",
};
const initialNodes = [
  {
    id: "1",
    type: "custom",
    data: HTTPData,
    position: calculateNodePosition(0),
  },
  {
    id: "2",
    type: "custom",
    data: {
      settingsID: "SET_AUTHENTICATE",
      label: "Authenticate User",
      icon: "mdi:shield-account-outline",
    },

    position: calculateNodePosition(1),
  },
  {
    id: "3",
    type: "custom",
    data: {
      settingsID: "SET_CREATE_TENANT",
      label: "Create Tenant",
      icon: "material-symbols:add-home-outline",
    },

    position: calculateNodePosition(2),
  },
  {
    id: "4",
    type: "custom",
    data: {
      settingsID: "SET_USER_REDIRECT",
      label: "Redirect User",
      description: "description",
      icon: "ion:navigate-circle-outline",
    },

    position: calculateNodePosition(3),
  },
];
const edgeStyles = {
  strokeWidth: 2,
};
const edgeType = "straight";
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: edgeType,
    style: edgeStyles,
  },
  {
    id: "e1-3",
    source: "2",
    target: "3",
    type: edgeType,
    style: edgeStyles,
  },
  {
    id: "e1-4",
    source: "3",
    target: "4",
    type: edgeType,
    style: edgeStyles,
  },
  {
    id: "e1-5",
    source: "4",
    target: "5",
    type: edgeType,
    style: edgeStyles,
  },
];

const nodeTypes = {
  custom: NodeTileStyle,
};

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerData, setDrawerData] = useState(null);

  const sampleData = {
    key: "value",
  };

  const onNodeClick = (event, node) => {
    const settingsID = node.data.settingsID;
    const settings = mockConfig[settingsID];
    console.log(settingsID);

    if (settings) {
      console.log("Settings for node:", settingsID, settings);
      setDrawerData(settings);
      setShowDrawer(true);
    } else {
      console.log("Settings not found for node:", settingsID);
    }
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div className='flex h-full'>
      <NarrowLeftSidebar />
      <SettingsDrawer
        data={drawerData}
        open={showDrawer}
        onClose={closeDrawer}
      />

      {/* Content area */}

      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Main content */}
        <HeaderLayout />
        <div className='flex flex-1 items-stretch overflow-hidden'>
          <main className='flex-1 overflow-y-auto'>
            {/* Primary column */}
            <section
              aria-labelledby='primary-heading'
              className='flex h-full min-w-0 flex-1 flex-col lg:order-last'>
              <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                onNodeClick={onNodeClick}
                nodesDraggable={true}
                defaultViewport={{ x: 600, y: 0, zoom: 0.8 }}
                className='bg-teal-50'>
                <MiniMap />
                <Controls />
                <Background
                  color='#99b3ec'
                  variant='dots'
                />
              </ReactFlow>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
