import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import ThemeToggler from "./components/ThemeToggler";
import Sign from "./pages/signup";
import Second from "./pages/second";
import Upload from "./pages/upload";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <Router>
          <Routes>
            <Route key="router-login" path="/" element={<Sign />} />
            <Route path="/second" element={<Second />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
