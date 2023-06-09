export const mockConfig = {
  SET_HTTP_TRIGGER: {
    title: "HTTP Trigger",
    settings: [
      {
        sectionTitle: "Sandbox URL",
        sectionBlocks: [
          {
            componentType: "input",
            key: "sandboxUrl",
            label: "Sandbox URL",
            type: "text",
            value: "https://example.com/sandbox-url",
            isDisabled: true,
            placeholder: "Enter your custom domain URL",
          },
          {
            componentType: "select",
            key: "triggerType",
            label: "Trigger Type",
            type: "text",
            value: "HTTP Trigger",
            isDisabled: false,
            placeholder: "Enter your custom domain URL",
          },
        ],
      },
      {
        sectionTitle: "Custom Domain URL",
        isSectionZeroState: true,
        sectionZeroState: {
          componentType: "Alert",
          messageDetails: {
            type: "info",
            text: "Want to publish this to a custom domain?",
          },
          actionText: "Setup Custom Domain",
          action: true,
        },
        sectionType: "form",
        sectionActions: [
          { type: "button", isDisabled: false, text: "Verify & Save" },
        ],
        sectionBlocks: [
          {
            componentType: "select",
            key: "sandboxUrl",
            label: "Your App Environment",
            type: "select",
            value: "https://example.com/sandbox-url",
            isDisabled: true,
            options: ["Dev", "Staging", "Production"],
            placeholder: "Enter your custom domain URL",
          },
          {
            componentType: "input",
            key: "triggerType",
            label: "Custom Domain URL",
            type: "text",
            value: "HTTP Trigger",
            placeholder: "Enter your custom domain URL",
            isDisabled: false,
          },
          {
            componentType: "input",
            key: "triggerType",
            label: "path",
            type: "text",
            value: "",
            placeholder: "eg./signup",
            isDisabled: false,
            layoutType: "group",
            groupID: "123",
          },
          {
            componentType: "input",
            key: "triggerType",
            label: "Query Params",
            type: "text",
            value: "",
            placeholder: "eg.?name=abc",
            isDisabled: false,
            layoutType: "group",
            groupID: "123",
          },
          {
            componentType: "input",
            key: "triggerType",
            label: "Query Params",
            type: "text",
            value: "",
            placeholder: "eg.?name=abc",
            isDisabled: false,
            layoutType: "group",
            groupID: "123",
          },
          {
            componentType: "alert",
            key: "triggerType",
            label: "Query Params",
            type: "text",
            value: "",
            messageDetails: {
              type: "info",
              text: "To configure your custom domain, please contact your administrator.",
            },
            action: {
              type: "checkbox",
              isChecked: false,
              title: "I have contacted my administrator",
              titleLink: "https://example.com",
            },
            placeholder: "eg.?name=abc",
            isDisabled: false,
            layoutType: "group",
            groupID: "123",
          },
        ],
      },
    ],
    settingActions: [
      { type: "button", isDisabled: true, text: "Test sandbox URL" },
      {
        type: "button",
        isDisabled: true,
        text: "Test Custom Domain [DEV]",
      },
    ],
  },
  SET_AUTHENTICATE: {
    title: "Authenticate",
  },
  SET_CREATE_TENANT: {
    title: "Create tenant",
  },
  SET_USER_REDIRECT: {
    title: "User Redirect",
    settings: [
      {
        sectionTitle: "URL Settings",
        sectionBlocks: [
          {
            componentType: "input",
            key: "redirectURLInput",
            label: "Enter Redirect URL",
            type: "text",
            value: "",
            isDisabled: true,
            placeholder:
              "eg. app.companyname.com/onboarding?signup=workemailEnter your custom domain URL",
          },
        ],
      },
    ],
    settingActions: [{ type: "button", isDisabled: true, text: "Visit URL" }],
  },
};
