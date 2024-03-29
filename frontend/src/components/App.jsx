import { plPL } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { selectAuthState } from '../store/auth/auth.selectors';
import Login from './Login/Login';
import StatusLogin from './Login/StatusLogin';
import ProtectedContainer from './ProtectedContainer';

const theme = createMuiTheme({}, plPL);

const App = ({ authState }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {authState.isAuthenticated ? (
          <ProtectedRoutes authState={authState} />
        ) : (
          <Switch>
            <Route exact path="/status" component={StatusLogin} />
            <Route exact path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

const ProtectedRoutes = ({ authState }) => {
  return (
    <Route
      render={() => {
        return authState.isAuthenticated ? (
          <ProtectedContainer authState={authState} />
        ) : (
          <Route exact path="/login" component={Login} />
        );
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  authState: selectAuthState(state),
});

export default connect(mapStateToProps, null)(App);
