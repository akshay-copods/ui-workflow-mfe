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
import "./index.scss";
import { initialEdges } from "./initialEdges";
import { initialNodes } from "./initialNodes";
import { mockConfig } from "./nodeConfig";

import "reactflow/dist/style.css";

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
    <div className="flex h-full">
      <NarrowLeftSidebar />
      <SettingsDrawer
        data={drawerData}
        open={showDrawer}
        onClose={closeDrawer}
      />

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
                edges={initialEdges.filter((edge) => edge.show)}
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
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
