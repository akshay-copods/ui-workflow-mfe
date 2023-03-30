const initialPosition = { x: 0, y: 50 };
const nodeDistance = 190;

const calculateNodePosition = (index, nodeType) => {
  if (nodeType === "group") {
    console.log(initialPosition.x);
    return {
      x: initialPosition.x - 500 / 3,
      y: initialPosition.y + nodeDistance * index,
    };
  }
  return {
    x: initialPosition.x,
    y: initialPosition.y + nodeDistance * index,
  };
};

export const initialNodes = [
  {
    id: "1",
    type: "custom",
    data: {
      settingsID: "SET_HTTP_TRIGGER",
      label: "HTTP TRIGGER",
      icon: "mdi:earth-arrow-right",
    },
    position: calculateNodePosition(0, "node"),
  },
  {
    id: "2",
    type: "custom",
    data: {
      // settingsID: "SET_AUTHENTICATE",
      label: "Authenticate User",
      icon: "mdi:shield-account-outline",
      groupNodeId: "3",
    },
    position: calculateNodePosition(1, "node"),
  },
  {
    id: "3",
    position: calculateNodePosition(2, "group"),
    style: {
      width: 500,
      height: 170,
    },
    hidden: false,
  },
  {
    id: "4",
    type: "custom",
    data: {
      settingsID: "SET_AUTHENTICATE",
      label: "Signup IDP",
      icon: "mdi:shield-account-outline",
    },
    position: { x: 20, y: 20 },
    parentNode: "3",
    extent: "parent",
    hidden: false,
  },
  {
    id: "5",
    type: "custom",
    data: {
      settingsID: "SET_AUTHENTICATE",
      label: "Signup Page",
      icon: "mdi:shield-account-outline",
    },
    position: { x: 190, y: 20 },
    parentNode: "3",
    extent: "parent",
    hidden: false,
  },
  {
    id: "6",
    type: "custom",
    data: {
      settingsID: "SET_AUTHENTICATE",
      label: "Error Page",
      icon: "mdi:shield-account-outline",
    },
    position: { x: 360, y: 20 },
    parentNode: "3",
    extent: "parent",
    hidden: false,
  },
  {
    id: "7",
    type: "custom",
    data: {
      settingsID: "SET_CREATE_TENANT",
      label: "Create Tenant",
      icon: "material-symbols:add-home-outline",
      afterGroupNodeId: "3",
    },

    position: calculateNodePosition(3, "node"),
  },
];

// export const initialNodes = [
//   {
//     id: "1",
//     type: "custom",
//     data: {
//       settingsID: "SET_HTTP_TRIGGER",
//       label: "HTTP TRIGGER",
//       icon: "mdi:earth-arrow-right",
//     },
//     position: calculateNodePosition(0, "node"),
//   },
//   {
//     id: "2",
//     type: "custom",
//     data: {
//       settingsID: "SET_AUTHENTICATE",
//       label: "Authenticate User",
//       icon: "mdi:shield-account-outline",
//       groupNodeId: "3",
//     },
//     position: calculateNodePosition(1, "node"),
//   },

//   {
//     id: "3",
//     type: "custom",
//     data: {
//       settingsID: "SET_CREATE_TENANT",
//       label: "Create Tenant",
//       icon: "material-symbols:add-home-outline",
//     },

//     position: calculateNodePosition(2, "group"),
//   },
//   {
//     id: "4",
//     type: "custom",
//     data: {
//       settingsID: "SET_USER_REDIRECT",
//       label: "Redirect User",
//       description: "description",
//       icon: "ion:navigate-circle-outline",
//     },

//     position: calculateNodePosition(3, "node"),
//   },
//   {
//     id: "5",
//     type: "custom",
//     data: {
//       settingsID: "SET_AUTHENTICATE_IDP",
//       label: "Signup IDP",
//       icon: "mdi:shield-account-outline",
//     },
//     parentNode: "2",
//     extent: "parent",
//     hidden: true,
//     position: calculateNodePosition(1),
//   },
//   {
//     id: "6",
//     type: "custom",
//     data: {
//       settingsID: "SET_AUTHENTICATE_SIGNUP_PAGE",
//       label: "Signup Page",
//       icon: "mdi:shield-account-outline",
//     },
//     parentNode: "2",
//     extent: "parent",
//     hidden: true,

//     position: calculateNodePosition(1),
//   },
//   {
//     id: "7",
//     type: "custom",
//     data: {
//       settingsID: "SET_AUTHENTICATE_ERROR_PAGE",
//       label: "ERROR Page",
//       icon: "mdi:shield-account-outline",
//     },
//     parentNode: "2",
//     extent: "parent",
//     hidden: true,
//     position: calculateNodePosition(1),
//   },
//   {
//     id: "8",
//     type: "group",
//     position: { x: 510, y: 500 },
//     style: {
//       width: 540,
//       height: 100,
//     },
//     hidden: true,
//   },
// ];
