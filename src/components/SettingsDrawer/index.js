import React from 'react';
import {Drawer } from 'antd';
function SettingsDrawer({ data, open, onClose }) {
    return (
        <Drawer title={data?.title} placement="right" onClose={onClose} open={open} mask={false} maskClosable={false}>

        </Drawer>
    );
}

export default SettingsDrawer;
