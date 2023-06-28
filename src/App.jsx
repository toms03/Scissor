import { BrowserRouter, Route, Routes } from "react-router-dom";

import Account from "./components/Account";
import Home from "./components/Home";
import LinkRedirect from "./components/LinkRedirect";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path=":shortCode" element={<LinkRedirect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
