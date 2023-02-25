import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangableTitle } from '../ChangableTitle';

export default {
  title: 'ChangableTitle',
  component: ChangableTitle,
  argTypes: {
    children: {
      description: 'Initial title',
      table: { type: { summary: 'string' } },
    },
    className: {
      description: 'Span and Input class name',
      table: { type: { summary: 'string' } },
    },
    onChangeFinish: {
      description: 'Title change handler',
      table: { type: { summary: '(newTitle: string) => void' } },
      control: false,
    },
    spanProps: {
      description: 'Props for span element',
      table: { type: { summary: 'object' } },
    },
    inputProps: {
      description: 'Props for input element',
      table: { type: { summary: 'object' } },
    },
  },
} as ComponentMeta<typeof ChangableTitle>;

const Template: ComponentStory<typeof ChangableTitle> = (args) =>
  <ChangableTitle {...args} />;

export const Playground = Template.bind({});
Playground.args = { children: 'Some Title' };