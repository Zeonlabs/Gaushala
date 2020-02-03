import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch, } from "react-router-dom";
import { getToken } from './LocalStorage';
import routes from './Routes';
// import { renderRoutes } from "react-router-config";
// import ScrollToTop from './ScrollTop';
// import Routes from "../routes";
// import routes from "./Routes";
// import AppD from "../app";
// import Home from "../containers/Home/Home";
import Home from '../Components/Dashboard/Home';
import CharityIncome from "../Components/CharityIncome/CharityIncome";
import Expences from "../Components/Expences/Expences";
import Cheques from "../Components/Cheques/Cheques";
import Animal from "../Components/Animal/Animal";
import Employees from "../Components/Employees/Employees";
import Notes from "../Components/Notes/Notes";
import TrustMembers from "../Components/TrustMembers/TrustMembers";
// import {
//   getCities,
// } from '../actions/global';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      getToken()

        ? <Component {...props} />
        : <Redirect to={{ pathname: '/' }} />
    )
        }
  />
);

const LoginRoute = ({ component: LoginComponent, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      getToken()
        ? <Redirect to={{ pathname: '/home' }} />
        : <LoginComponent {...props} />
    )
        }
  />
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <LoginRoute exact path={routes.login} component={Home} /> */}
        <Route path={routes.dashboard} component={Home} />
        <Route path={routes.charity} component={CharityIncome} />
        <Route path={routes.expences} component={Expences} />
        <Route path={routes.cheques} component={Cheques} />
        <Route path={routes.animal} component={Animal} />
        <Route path={routes.employees} component={Employees} />
        <Route path={routes.notes} component={Notes} />
        <Route path={routes.trustmembers} component={TrustMembers} />
        {/* <PrivateRoute path="/home" name="home" component={Home} />
        <Route path="/reset-password" component={ResetPassword} />
        <PrivateRoute path="/changepassword" component={ChangePassword} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;