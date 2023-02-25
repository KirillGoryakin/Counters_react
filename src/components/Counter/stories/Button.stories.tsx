import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      description: 'Button label',
      table: { type: { summary: 'string' } },
    },
    color: {
      options: ['purple', 'red', 'green'],
      description: 'Button color',
      defaultValue: 'purple',
      control: { type: 'radio' },
      table: { defaultValue: { summary: '"purple"' } },
    },
    className: {
      type: 'string',
      description: 'Button class name',
    },
    buttonProps: {
      description: 'Button props',
      table: { type: { summary: 'object' } },
    },
    onClick: {
      description: 'Click event handler',
      control: false,
      table: { type: { summary: '(event: MouseEventHandler) => void' } },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = { children: 'Click Me' };

export const Plus = Template.bind({});
Plus.args = { children: '+', color: 'green' };

export const Minus = Template.bind({});
Minus.args = { children: '−', color: 'red' };