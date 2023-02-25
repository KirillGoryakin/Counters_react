import { ComponentMeta } from '@storybook/react';
import { CountersChanger } from '../CountersChanger';
import { Provider } from 'react-redux';
import store from 'store';

export default {
  title: 'CountersChanger',
  component: CountersChanger,
  parameters: {
    docs: {
      description: {
        component: 'Adds and deletes counters',
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
} as ComponentMeta<typeof CountersChanger>;

export const Default = CountersChanger;