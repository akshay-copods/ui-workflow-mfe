import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Icon } from '@iconify/react';
import './style.css';
function NodeTileStyle({ data }) {
  return (
    <div className="flex-col flex items-center cursor-pointer ">
        <div className="custom-bg w-24 h-24 rounded-lg shadow-inner z-0 justify-center items-center flex hover:shadow-xl">
            <Icon icon={data.icon} width={44}/>
        </div>
      <div className="mt-2 px-6 py-1 bg-gray-200 rounded-full">
        <div className="font-normal text-xs">{data.label}</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
}

export default memo(NodeTileStyle);
