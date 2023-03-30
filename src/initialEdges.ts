const edgeStyles = {
  strokeWidth: 2,
};
const edgeType = "straight";

export const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: edgeType,
    style: edgeStyles,
    show: true,
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: edgeType,
    style: edgeStyles,
    show: true,
  },
  {
    id: "e3-5",
    source: "4",
    target: "5",
    type: edgeType,
    style: edgeStyles,
    show: true,
  },
  {
    id: "e3-6",
    source: "5",
    target: "6",
    type: edgeType,
    style: edgeStyles,
    show: true,
  },
  {
    id: "e1-5",
    source: "4",
    target: "5",
    type: edgeType,
    style: edgeStyles,
    show: true,
  },
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: edgeType,
    style: edgeStyles,
    show: false,
  },
  {
    id: "e2-3",
    source: "2",
    target: "7",
    type: edgeType,
    style: edgeStyles,
    show: false,
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    type: edgeType,
    style: edgeStyles,
    show: true,
  },
];

// export const initialEdges = [
//   {
//     id: "e1-2",
//     source: "1",
//     target: "2",
//     type: edgeType,
//     style: edgeStyles,
//     show: false,
//   },
//   {
//     id: "e1-3",
//     source: "2",
//     target: "3",
//     type: edgeType,
//     style: edgeStyles,
//     show: false,
//   },
//   {
//     id: "e1-4",
//     source: "3",
//     target: "4",
//     type: edgeType,
//     style: edgeStyles,
//     show: false,
//   },
//   {
//     id: "e1-5",
//     source: "4",
//     target: "5",
//     type: edgeType,
//     style: edgeStyles,
//     show: false,
//   },
// ];
