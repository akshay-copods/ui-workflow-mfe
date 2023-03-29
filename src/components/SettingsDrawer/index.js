import React from 'react';
import {Drawer } from 'antd';
import SchemaToJSX from "../SchemaToJSX";
function SettingsDrawer({ data, open, onClose }) {
    console.log('drawer data', data);
    return (
        <Drawer title={data?.title} placement="right" onClose={onClose} open={open} mask={false} maskClosable={false}>
            {SchemaToJSX(data)}
        </Drawer>
    );
}

export default SettingsDrawer;
