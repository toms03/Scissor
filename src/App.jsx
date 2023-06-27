import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Account from './components/Account';
import Home from './components/Home';
import LinkRedirect from './components/LinkRedirect';

const App = () => {
  const [user, setUser] = useState(null);

  setUser(null);

  <Routes>
    <Route exact path="/">
      {user ? <Navigate to="/account" /> : <Home />}
    </Route>
    <Route path="/account">{user ? <Account /> : <Navigate to="/" />}</Route>
    <Route path="/:shortCode">
      <LinkRedirect />
    </Route>
  </Routes>;
};

export default App;
