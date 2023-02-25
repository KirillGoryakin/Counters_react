import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from 'store';
import { Counter } from '../Counter';

export default {
  title: 'Counter',
  component: Counter,
  parameters: {
    docs: {
      description: {
        component: 'Counter can change its title and count with Redux.',
      },
    },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  argTypes: {
    counter: {
      description: 'Counter data',
      control: { type: 'object' },
    },
  },
} as ComponentMeta<typeof Counter>;

export const Playground: ComponentStory<typeof Counter> = (args) => 
  <Counter {...args} />;

Playground.args = {
  counter: {
    id: '1',
    title: 'Counter changable title',
    count: 0,
  },
};