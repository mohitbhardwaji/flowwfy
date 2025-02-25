import React, { useState, useCallback, useMemo } from "react";
import ReactFlow, { MiniMap, Controls, Background, useNodesState } from "reactflow";
import "reactflow/dist/style.css";

// Define network structure
const networkData = [
  { src: "NVR", target: ["SwitchA", "SwitchB"] },
  { src: "SwitchA", target: ["SwitchC", "CameraA", "CameraB", "CameraD"] },
  { src: "SwitchB", target: ["SwitchD", "CameraC"] },
  { src: "SwitchC", target: ["CameraE", "CameraF"] },
  { src: "SwitchD", target: ["CameraG", "CameraH"] },
];

//  ------- start Function to generate positions dynamically
const generateTopology = (data) => {
  const spacingX = 200; // Horizontal spacing
  const spacingY = 150; // Vertical spacing

  let nodeLevels = {};
  let nodeOrders = {};
  let nodes = [];
  let edges = [];

  const addNode = (id, level, order) => {
    if (!nodeLevels[id]) {
      nodeLevels[id] = level;
      nodeOrders[id] = order;
      nodes.push({
        id,
        data: { label: id },
        position: { x: order * spacingX, y: level * spacingY },
        draggable: true, // ✅ Make nodes draggable
      });
    }
  };

  // Process each connection in networkData
  data.forEach(({ src, target }, index) => {
    const level = nodeLevels[src] || 0;
    let order = nodeOrders[src] || index;

    addNode(src, level, order);

    target.forEach((tgt, i) => {
      let newOrder = order + (i - (target.length - 1) / 2);
      addNode(tgt, level + 1, newOrder);
      edges.push({ id: `e${src}-${tgt}`, source: src, target: tgt, type: "simplebezier" });
    });
  });

  return { nodes, edges };
};

// ----- end of positioning -----

const NewFlow = () => {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => generateTopology(networkData), []);
  
  // ✅ State for nodes and onNodesChange handler
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow 
        nodes={nodes} 
        edges={initialEdges} 
        onNodesChange={onNodesChange} 
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default NewFlow;
