import {StyledEngineProvider} from '@mui/material/styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(Story) => (<StyledEngineProvider injectFirst><Story /></StyledEngineProvider>)];
