import { createContext, useReducer } from "react";
import { initialState, reducer } from "../hooks/UseReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import {
  Login,
  Navbar,
  Footer,
  Home,
  Register,
  ResetPasswordScreen,
} from "../components/Open";

export const UserContext = createContext();

const MainSwitcher = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/home">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
            <Footer />
          </Route>
          <Route path="/register">
            <Navbar />
            <Register />
            <Footer />
          </Route>
          <Route path="/resetpassword:resetToken">
            <Navbar />
            <ResetPasswordScreen />
            <Footer />
          </Route>
          <Route path="/dashboard">
            <Navbar />
            <Dashboard />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const Routing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <MainSwitcher />
      </UserContext.Provider>
    </>
  );
};

export { Routing };
