import mixins from './mixins';

const color = {
  background: {
    white: '#FFFFFF',
  },
  font: {
    primary: '#565963',
    secondary: '#B3B5C6',
    teriary: '#FFFFFF',
    special: '#5E75EC',
  },
  button: {
    primary: '#5E75EC',
    secondary: '#596DD8',
    teriary: '#8494EA',
  },
};

export const theme = {
  color,
  mixins,
};
export type Theme = typeof theme;
