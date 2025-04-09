// import { CssBaseline } from '@mui/material';
// import { ThemeProvider } from '@emotion/react';
// import { Preview } from '@storybook/react';
// import React from 'react';
// //import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { theme } from '../src/themes';

// interface PreviewType{
//   decorators: React.JSX.Element[];
// }
// const preview: Preview = {
//   decorators: [
//     (Story) => (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Story />
//     </ThemeProvider>
//   )
// ]
// };
// export default preview;

import { createElement } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//import theme from '../src/themes/theme'; // Adjust path as needed

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) =>
      createElement(
        ThemeProvider,
        { theme },
        createElement(CssBaseline, null),
        createElement(Story, null)
      )
  ]
};

export default preview;
