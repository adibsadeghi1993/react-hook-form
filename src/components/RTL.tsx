import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";

import { jssPreset } from "@mui/styles";
import { create } from "jss";
import rtl from "jss-rtl";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

type Props={
    children:React.ReactNode
}

function RTL(props:Props) {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </StylesProvider>
  );
}

export default RTL

