import { Button, Input, Select } from "antd";
import React from "react";
const httpData = {
  defaultDomain: "https://sandboxurl.com/dev7-zsddls.com/signup",
  isCustomDomain: true,
  triggerType: [
    "HTTP based trigger",
    "SMTP based trigger",
    "FTP based trigger",
  ],
  customDomain: {
    appEnv: ["Dev", "Staging", "Prod"],
    url: "https://test.dev.com",
    urlPath: "",
    params: [
      { key: "plan", value: "standerd" },
      { key: "search", value: "true" },
    ],
  },
};
const HttpForm = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <label htmlFor=''>Sandbox URL</label>
        <Input
          type='text'
          value=''
        />
      </div>
      <div className='flex gap-10 justify-between'>
        <label htmlFor=''>Trigger Type</label>
        <Select
          className='w-full'
          defaultValue='HTTP based trigger'
          style={{ width: 120 }}
          options={[
            { value: "HTTP based trigger", label: "HTTP based trigger" },
            { value: "API based trigger", label: "API based trigger" },
            {
              value: "Message based trigger",
              label: "Message based trigger",
            },
          ]}
        />
      </div>
      <div className='flex'>
        <div></div>
        <div>
          <Button>Connfigure Custom domain</Button>
        </div>
      </div>
      <div className='custom-domain-settings flex flex-col gap-4 border border-black'>
        <div className='flex justify-between'>
          <h3 className='text-lg'>
            Configure Custom domain for your environment
          </h3>{" "}
          <span>X</span>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-row'>
            <label htmlFor=''>Your App Environment</label>
            <Select
              className='w-full'
              defaultValue='HTTP based trigger'
              style={{ width: 120 }}
              options={[
                { value: "Dev", label: "Dev" },
                { value: "Staging", label: "Staging" },
                {
                  value: "Production",
                  label: "Production",
                },
              ]}
            />
          </div>
          <div className='flex'>
            <label htmlFor=''>Custom Domain URL</label>
            <Input type='text' />
          </div>
        </div>
        <div>
          <label htmlFor=''>Path</label>
          <Input type='text' />
        </div>
        <div>
          <label htmlFor=''>Query Parameter</label>
          <div className='flex'>
            <Input
              placeholder='Enter key'
              type='text'
            />

            <span>=</span>
            <Input
              placeholder='Enter value'
              type='text'
            />

            <span>+</span>
          </div>
          <div>
            <p>To configure your custom domain, complete the DNS setup</p>
            <input type='checkbox' />
            <span>I,acknowledge to have the completed the setup</span>
          </div>
          <Button>Verify & Save</Button>
        </div>
      </div>
      <footer className='panel-footer flex'>
        <Button>Test with sandbox URL</Button>
        <Button>Test with Custom Domain</Button>
      </footer>
    </div>
  );
};
