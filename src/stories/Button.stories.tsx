import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: 'outlined',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
};
