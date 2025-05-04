import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProvider } from "../context";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Create RTL cache for MUI
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  // Create theme with RTL direction
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "Vazirmatn, sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Vazirmatn';
            font-style: normal;
            font-weight: 400;
            src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Regular.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Vazirmatn';
            font-style: normal;
            font-weight: 700;
            src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Bold.woff2') format('woff2');
          }
        `,
      },
    },
  });
  return (
    <AppProvider>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </AppProvider>
  );
};

export default Layout;
