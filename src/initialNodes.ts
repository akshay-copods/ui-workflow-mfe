const initialPosition = { x: 0, y: 50 };
const nodeDistance = 190;

const calculateNodePosition = (index) => {
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
