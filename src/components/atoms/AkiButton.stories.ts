import AkiButton from "./AkiButton.vue";
export default {
  title: "Atoms/AkiButton",
  component: AkiButton,
  parameters: { actions: { argTypesRegex: ".*" } },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["basic", "primary", "error"],
      },
    },
    click: {
      action: "click",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AkiButton },
  setup() {
    return {
      ...args,
    };
  },
  template: `
    <AkiButton :color="color" @click="click">あきボタン</AkiButton>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  color: "basic",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
};
