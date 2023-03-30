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
      groupNodeId: "3",
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
  {
    id: "5",
    type: "custom",
    data: {
      settingsID: "SET_AUTHENTICATE_IDP",
      label: "Signup IDP",
      icon: "mdi:shield-account-outline",
    },
    parentNode: "2",
    extent: "parent",
    hidden: true,
    position: calculateNodePosition(1),
  },
  {
    id: "6",
    type: "custom",
    data: {
      settingsID: "SET_AUTHENTICATE_SIGNUP_PAGE",
      label: "Signup Page",
      icon: "mdi:shield-account-outline",
    },
    parentNode: "2",
    extent: "parent",
    hidden: true,

    position: calculateNodePosition(1),
  },
  {
    id: "7",
    type: "custom",
    data: {
      settingsID: "SET_AUTHENTICATE_ERROR_PAGE",
      label: "ERROR Page",
      icon: "mdi:shield-account-outline",
    },
    parentNode: "2",
    extent: "parent",
    hidden: true,
    position: calculateNodePosition(1),
  },
  {
    id: "8",
    type: "group",
    position: { x: 510, y: 500 },
    style: {
      width: 540,
      height: 100,
    },
    hidden: true,
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
    show: false,
  },
  {
    id: "e1-3",
    source: "2",
    target: "3",
    type: edgeType,
    style: edgeStyles,
    show: false,
  },
  {
    id: "e1-4",
    source: "3",
    target: "4",
    type: edgeType,
    style: edgeStyles,
    show: false,
  },
  {
    id: "e1-5",
    source: "4",
    target: "5",
    type: edgeType,
    style: edgeStyles,
    show: false,
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
    if (node.id === "2") {
      console.log("INSIDE IF");
      setNodes(
        nodes.map((nodes: any) =>
          nodes.id === node.data.groupNodeId ||
          nodes.parentNode === node.data.groupNodeId
            ? { ...nodes, hidden: !nodes.hidden }
            : nodes.id === "7"
            ? {
                ...nodes,
                position: {
                  ...nodes.position,
                  y: nodes.position.y === 500 ? 650 : 500,
                },
              }
            : nodes
        )
      );
    }

    if (settings) {
      setDrawerData(settings);
      setShowDrawer(true);
    } else {
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
                edges={initialEdges.filter((edge) => edge.show)}
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
