import { ThemeProvider } from '@emotion/react';
import * as React from 'react';
import { withTheme } from '@twilio/flex-ui';
import { CustomizationProvider } from '@twilio-paste/core/customization';

const ThemeProviderWrapper = ({ theme, children }) => (
  <CustomizationProvider theme={theme.tokens}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </CustomizationProvider>
);

ThemeProviderWrapper.displayName = 'ThemeProviderWrapper';

export default withTheme(ThemeProviderWrapper);
