import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: '#FEF8E2',
        light: 'white'
      },
      secondary: {
        main: '#B1DBED',
      },
    },
    typography: {
      "fontFamily": "Outfit, sans-serif",
    "color":'rgb(68 86 108)'
  }
  });

  export { theme }