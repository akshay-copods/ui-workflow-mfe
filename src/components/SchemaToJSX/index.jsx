import React from "react";
import { Input, Select, Alert, Button } from 'antd';

const renderSectionBlocks = (sectionBlocks) => {
    return sectionBlocks.map((block) => {
        switch (block.componentType) {
            case 'input':
                return (
                    <div className="mb-2">
                        <Input
                            key={block.key}
                            placeholder={block.label}
                            defaultValue={block.value}
                            disabled={block.isDisabled}
                        />
                    </div>
                );
            case 'select':
                return (
                    <div className="mb-2">
                        <Select
                            key={block.key}
                            defaultValue={block.value}
                            disabled={block.isDisabled}
                        >
                            <Select.Option value={block.value}>{block.label}</Select.Option>
                        </Select>
                    </div>

                );
            case 'Alert':
                return (
                    <div className="mb-2">
                        <Alert
                            key={block.key}
                            message={block.message}
                            type="info"
                            showIcon
                            action={
                                block.action && (
                                    <Button size="small" type="text">
                                        Edit
                                    </Button>
                                )
                            }
                        />
                    </div>
                );
            default:
                return null;
        }
    });
};

const renderSettings = (settings) => {
    if (!settings) {
        return null;
    }
    return settings.map((setting) => (
        <div key={setting.sectionTitle}>
            <h3>{setting.sectionTitle}</h3>
            {setting.isSectionZeroState ? (
                <div className="mb-4">
                    {setting.sectionZeroState && renderSectionBlocks([setting.sectionZeroState])}
                </div>
            ) : (
                <div className="mb-4">{renderSectionBlocks(setting.sectionBlocks)}</div>
            )}
        </div>
    ));
};

const SchemaToJSX = (settingsData) => {
    console.log('settingsData', settingsData);
    if (!settingsData) {
        return false;
    }
    const { settings } = settingsData;
    return <div>{renderSettings(settings)}</div>;
};

export default SchemaToJSX;
