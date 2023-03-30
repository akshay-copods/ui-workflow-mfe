import { Drawer } from "antd";
import React from "react";
import SchemaToJSX from "../SchemaToJSX";
function SettingsDrawer({ data, open, onClose }) {
  return (
    <Drawer
      title={data?.title}
      placement='right'
      onClose={onClose}
      open={open}
      mask={false}
      maskClosable={false}>
      {SchemaToJSX(data)}
    </Drawer>
  );
}

export default SettingsDrawer;
