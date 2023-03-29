import { Alert, Button, Input, Select } from "antd";
import React from "react";

const renderSectionBlocks = (sectionBlocks) => {
  console.log("sectionBlocks", sectionBlocks);
  return sectionBlocks.map((block) => {
    switch (block.componentType) {
      case "input":
        return (
          <div className='mb-2'>
            <Input
              key={block.key}
              placeholder={block.label}
              defaultValue={block.value}
              disabled={block.isDisabled}
            />
          </div>
        );
      case "select":
        return (
          <div className='mb-2'>
            <Select
              key={block.key}
              defaultValue={block.value}
              disabled={block.isDisabled}>
              <Select.Option value={block.value}>{block.label}</Select.Option>
            </Select>
          </div>
        );
      case "Alert":
        return (
          <div className='mb-2'>
            <Alert
              key={block.key}
              message={block.message}
              type='info'
              showIcon
              action={
                block.action && (
                  <Button
                    size='small'
                    type='text'>
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

const renderSettings = ({ settings }) => {
  if (!settings) {
    return null;
  }
  return settings.map((setting) => (
    <div key={setting.sectionTitle}>
      <h3>{setting.sectionTitle}</h3>
      {setting.isSectionZeroState ? (
        <div className='mb-4'>
          {setting.sectionZeroState &&
            renderSectionBlocks([setting.sectionZeroState])}
        </div>
      ) : (
        <div className='mb-4'>{renderSectionBlocks(setting.sectionBlocks)}</div>
      )}
    </div>
  ));
};

const SchemaToJSX = (settingsData) => {
  console.log("settingsData", settingsData);
  if (!settingsData) {
    return false;
  }

  return (
    <div>
      {renderSettings(settingsData)}
      {console.log("setting actions", settingsData?.settingActions)}
      <div className='flex gap-4'>
        {settingsData?.settingActions &&
          settingsData.settingActions.map((action) => (
            <Button
              key={action.key}
              type='primary'
              disabled={action.isDisabled}
              onClick={action.onClick}>
              {action.text}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default SchemaToJSX;
