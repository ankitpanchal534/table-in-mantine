import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import TablesHome from "./Tables/TablesHome";

const theme = createTheme({
  /** Your theme override here */
});
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <TablesHome />
    </MantineProvider>
  );
}
