// import React, { useCallback, useState } from "react";
// import ReactFlow, { addEdge, MiniMap, Controls, Background, useNodesState } from "reactflow";
// import "reactflow/dist/style.css";
import { cctv } from "../assets/image";

// // Custom Image Node
// const ImageNode = ({ data }) => (
//   <div className="flex justify-center items-center rounded-full p-2 shadow-lg border border-gray-300">
//     <img src={data.image} alt="Node" className="w-20 h-20" />
//   </div>
// );

// // Custom Text Node
// const TextNode = ({ data }) => (
//   <div className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md border border-gray-300">
//     {data.label}
//   </div>
// );

// // Define node types
// const nodeTypes = {
//   imageNode: ImageNode,
//   textNode: TextNode,
// };

// // Initial Nodes
// const initialNodes = [
//   { id: "1", type: "imageNode", position: { x: 500, y: 50 }, data: { image: cctv } },
//   { id: "2", type: "textNode", position: { x: 200, y: 200 }, data: { label: "Child 1" } },
//   { id: "3", type: "textNode", position: { x: 500, y: 200 }, data: { label: "Child 2" } },
//   { id: "4", type: "textNode", position: { x: 800, y: 200 }, data: { label: "Child 3" } },
//   { id: "5", type: "textNode", position: { x: 1100, y: 200 }, data: { label: "Child 4" } },
//   { id: "6", type: "textNode", position: { x: 100, y: 350 }, data: { label: "S1A" } },
//   { id: "7", type: "textNode", position: { x: 300, y: 350 }, data: { label: "S1B" } },
//   { id: "8", type: "textNode", position: { x: 400, y: 350 }, data: { label: "S2A" } },
//   { id: "9", type: "textNode", position: { x: 600, y: 350 }, data: { label: "S2B" } },
//   { id: "10", type: "textNode", position: { x: 700, y: 350 }, data: { label: "S3A" } },
//   { id: "11", type: "textNode", position: { x: 900, y: 350 }, data: { label: "S3B" } },
//   { id: "12", type: "textNode", position: { x: 1000, y: 350 }, data: { label: "S4A" } },
//   { id: "13", type: "textNode", position: { x: 1200, y: 350 }, data: { label: "S4B" } },
// ];

// // Initial Edges
// const initialEdges = [
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e1-3", source: "1", target: "3" },
//   { id: "e1-4", source: "1", target: "4" },
//   { id: "e1-5", source: "1", target: "5" },
//   { id: "e2-6", source: "2", target: "6" },
//   { id: "e2-7", source: "2", target: "7" },
//   { id: "e3-8", source: "3", target: "8" },
//   { id: "e3-9", source: "3", target: "9" },
//   { id: "e4-10", source: "4", target: "10" },
//   { id: "e4-11", source: "4", target: "11" },
//   { id: "e5-12", source: "5", target: "12" },
//   { id: "e5-13", source: "5", target: "13" },
// ];

// const FlowChart = () => {
//   const [nodes, setNodes] = useNodesState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

//   return (
//     <div className="h-full w-full border">
//       <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect} nodeTypes={nodeTypes}>
//         <MiniMap />
//         <Controls />
//         <Background />
//       </ReactFlow>
//     </div>
//   );
// };

// export default FlowChart;



// import React, { useCallback, useMemo, useState } from "react";
// import ReactFlow, { addEdge, MiniMap, Controls, Background } from "reactflow";
// import "reactflow/dist/style.css";
// import cameraImage from "../assets/cctv_camera.png";

// const initialNodes = [
//   { id: "1", data: { label: "Parent" }, position: { x: 500, y: 50 }, style: { background: "#FF6B6B", color: "#fff", padding: 10, borderRadius: 8 } },

//   { id: "2", data: { label: "Child 1" }, position: { x: 200, y: 200 }, style: { background: "#6A89CC", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "3", data: { label: "Child 2" }, position: { x: 500, y: 200 }, style: { background: "#6A89CC", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "4", data: { label: "Child 3" }, position: { x: 800, y: 200 }, style: { background: "#6A89CC", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "5", data: { label: "Child 4" }, position: { x: 1100, y: 200 }, style: { background: "#6A89CC", color: "#fff", padding: 10, borderRadius: 8 } },

//   { id: "6", data: { label: "Sub-Child 1A" }, position: { x: 100, y: 350 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "7", data: { label: "Sub-Child 1B" }, position: { x: 300, y: 350 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "8", data: { label: "Sub-Child 2A" }, position: { x: 400, y: 350 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "9", data: { label: "Sub-Child 2B" }, position: { x: 600, y: 350 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "10", data: { label: "Sub-Child 3A" }, position: { x: 700, y: 350 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "11", data: { label: "Sub-Child 3B" }, position: { x: 900, y: 350 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "12", data: { label: "Sub-Child 4A" }, position: { x: 1000, y: 350 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "13", data: { label: "Sub-Child 4B" }, position: { x: 1200, y: 350 }, style: { height:150, width:150, backgroundImage: `url(${cameraImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", padding: 10, borderRadius: 8 } },
// ];

// const initialEdges = [
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e1-3", source: "1", target: "3" },
//   { id: "e1-4", source: "1", target: "4" },
//   { id: "e1-5", source: "1", target: "5" },

//   { id: "e2-6", source: "2", target: "6" },
//   { id: "e2-7", source: "2", target: "7" },
//   { id: "e3-8", source: "3", target: "8" },
//   { id: "e3-9", source: "3", target: "9" },
//   { id: "e4-10", source: "4", target: "10" },
//   { id: "e4-11", source: "4", target: "11" },
//   { id: "e5-12", source: "5", target: "12" },
//   { id: "e5-13", source: "5", target: "13" },
// ];

// const FlowChart = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

//   return (
//     <div className="h-full w-full border">
//       <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
//         <MiniMap />
//         <Controls />
//         <Background />
//       </ReactFlow>
//     </div>
//   );
// };

// export default FlowChart;


// import React, { useCallback, useState } from "react";
// import ReactFlow, { addEdge, MiniMap, Controls, Background } from "reactflow";
// import "reactflow/dist/style.css";
// import cameraImage from "../assets/cctv_camera.png"; // Ensure correct path

// const centerX = 600; // Center X position
// const centerY = 300; // Center Y position
// const radius = 200; // Distance from center (first layer)
// const subRadius = 350; // Distance from center (second layer)

// // Define Nodes
// const initialNodes = [
//   { id: "1", data: { label: "Parent" }, position: { x: centerX, y: centerY }, style: { background: "#FF6B6B", color: "#fff", padding: 10, borderRadius: 8 } },

//   // Primary Child Nodes
//   { id: "2", data: { label: "Child 1" }, position: { x: centerX - radius, y: centerY - radius }, style: { background: "#6A89CC", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "3", data: { label: "Child 2" }, position: { x: centerX + radius, y: centerY - radius }, style: { background: "#6A89CC", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "4", data: { label: "Child 3" }, position: { x: centerX - radius, y: centerY + radius }, style: { background: "#6A89CC", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "5", data: { label: "Child 4" }, position: { x: centerX + radius, y: centerY + radius }, style: { background: "#6A89CC", color: "#fff", padding: 10, borderRadius: 8 } },

//   // Sub-Nodes (Grandchildren)
//   { id: "6", data: { label: "Sub-Child 1A" }, position: { x: centerX - subRadius, y: centerY - subRadius }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "7", data: { label: "Sub-Child 1B" }, position: { x: centerX - subRadius + 100, y: centerY - subRadius + 50 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
  
//   { id: "8", data: { label: "Sub-Child 2A" }, position: { x: centerX + subRadius - 100, y: centerY - subRadius + 50 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "9", data: { label: "Sub-Child 2B" }, position: { x: centerX + subRadius, y: centerY - subRadius }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },

//   { id: "10", data: { label: "Sub-Child 3A" }, position: { x: centerX - subRadius, y: centerY + subRadius }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "11", data: { label: "Sub-Child 3B" }, position: { x: centerX - subRadius + 100, y: centerY + subRadius - 50 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },

//   { id: "12", data: { label: "Sub-Child 4A" }, position: { x: centerX + subRadius - 100, y: centerY + subRadius - 50 }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },
//   { id: "13", data: { label: "Sub-Child 4B" }, position: { x: centerX + subRadius, y: centerY + subRadius }, style: { background: "#F8A5C2", color: "#fff", padding: 10, borderRadius: 8 } },

//   // CCTV Camera Node with Image
//   { 
//     id: "14", 
//     data: { label: "CCTV Camera" }, 
//     position: { x: centerX, y: centerY + 2 * radius }, 
//     style: { 
//       height: 100, 
//       width: 100, 
//       backgroundImage: `url(${cameraImage})`, 
//       backgroundSize: "cover", 
//       backgroundPosition: "center", 
//       borderRadius: 8 
//     } 
//   },
// ];

// // Define Edges (Connections)
// const initialEdges = [
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e1-3", source: "1", target: "3" },
//   { id: "e1-4", source: "1", target: "4" },
//   { id: "e1-5", source: "1", target: "5" },
//   { id: "e1-14", source: "1", target: "14" },

//   { id: "e2-6", source: "2", target: "6" },
//   { id: "e2-7", source: "2", target: "7" },
//   { id: "e3-8", source: "3", target: "8" },
//   { id: "e3-9", source: "3", target: "9" },
//   { id: "e4-10", source: "4", target: "10" },
//   { id: "e4-11", source: "4", target: "11" },
//   { id: "e5-12", source: "5", target: "12" },
//   { id: "e5-13", source: "5", target: "13" },
// ];

// const FlowChart = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
//         <MiniMap />
//         <Controls />
//         <Background />
//       </ReactFlow>
//     </div>
//   );
// };

// export default FlowChart;

import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "NVR_A", data: { label: "NVR A" }, position: { x: 100, y: 50 } },
  { id: "Switch_A", data: { label: "Switch A" }, position: { x: 100, y: 150 } },
  { id: "Switch_B", data: { label: "Switch B" }, position: { x: 100, y: 250 } },
  { id: "Switch_C", data: { label: "Switch C" }, position: { x: 100, y: 350 } },
  { id: "Switch_D", data: { label: "Switch D" }, position: { x: 300, y: 350 } },
  { id: "NVR_B", data: { label: "NVR B" }, position: { x: 300, y: 450 } },
  { id: "Cam_1", data: { label: "Cam 1" }, position: { x: 50, y: 400 } },
  { id: "Cam_2", data: { label: "Cam 2" }, position: { x: 150, y: 400 } },
  { id: "Cam_3", data: { label: "Cam 3" }, position: { x: 50, y: 300 } },
  { id: "Cam_4", data: { label: "Cam 4" }, position: { x: 150, y: 300 } },
  { id: "Cam_5", data: { label: "Cam 5" }, position: { x: 50, y: 200 } },
  { id: "Cam_6", data: { label: "Cam 6" }, position: { x: 150, y: 200 } },
  { id: "Cam_7", data: { label: "Cam 7" }, position: { x: 250, y: 400 } },
  { id: "Cam_8", data: { label: "Cam 8" }, position: { x: 350, y: 400 } },
];

const initialEdges = [
  { id: "eA-switchA", source: "NVR_A", target: "Switch_A", type: "straight" },
  { id: "eSwitchA-switchB", source: "Switch_A", target: "Switch_B", type: "step" },
  { id: "eSwitchB-switchC", source: "Switch_B", target: "Switch_C", type: "step" },
  { id: "eSwitchC-switchD", source: "Switch_C", target: "Switch_D", type: "step" },
  { id: "eSwitchD-NVRB", source: "Switch_D", target: "NVR_B", type: "step" },
  { id: "eSwitchC-Cam1", source: "Switch_C", target: "Cam_1", type: "step" },
  { id: "eSwitchC-Cam2", source: "Switch_C", target: "Cam_2", type: "step" },
  { id: "eSwitchB-Cam3", source: "Switch_B", target: "Cam_3", type: "step" },
  { id: "eSwitchB-Cam4", source: "Switch_B", target: "Cam_4", type: "step" },
  { id: "eSwitchA-Cam5", source: "Switch_A", target: "Cam_5", type: "step" },
  { id: "eSwitchA-Cam6", source: "Switch_A", target: "Cam_6", type: "step" },
  { id: "eSwitchD-Cam7", source: "Switch_D", target: "Cam_7", type: "step" },
  { id: "eSwitchD-Cam8", source: "Switch_D", target: "Cam_8", type: "step" },
];

const FlowChart = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Capture new position after dragging
  const onNodeDragStop = useCallback((event, node) => {
    setNodes((nds) =>
      nds.map((n) => (n.id === node.id ? { ...n, position: node.position } : n))
    );
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeDragStop={onNodeDragStop} // Enables moving nodes
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
