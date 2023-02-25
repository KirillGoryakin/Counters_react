import '!style-loader!css-loader!sass-loader!./style.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'dark800', value: '#282626' },
      { name: 'red', value: '#E9011D' },
      { name: 'green', value: '#4BB04E' },
      { name: 'purple', value: '#805AD5' },
      { name: 'purpleDark', value: '#510FF0' },
    ],
  },
};