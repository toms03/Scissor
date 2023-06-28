import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Account from "./components/Account";
import Home from "./components/Home";
import LinkRedirect from "./components/LinkRedirect";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path=":shortCode" element={<LinkRedirect />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
