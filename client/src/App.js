import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import { loadUserAppellant } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Home from './components/frontend/Home';
import FormC from './components/frontend/FormC';
import AppellantLogin from './components/frontend/auth/appellant/Login';
import Register from './components/frontend/auth/appellant/Register';
import Login from './components/frontend/auth/official/Login';
// import MasterLayout from './layouts/official/MasterLayout';
import AdminPrivateRoute from './components/routing/AdminPrivateRoute';
import AppellantPrivateRoute from './components/routing/AppellantPrivateRoute';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        if (localStorage.token) {
            const decoded = jwt_decode(localStorage.token);

            if (decoded.user.type === 'GOVT') {
                store.dispatch(loadUser());
            }

            if (decoded.user.type === 'APPELLANT') {
                store.dispatch(loadUserAppellant());
            }
        }
    }, []);

    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/appellant/login"
                            component={AppellantLogin}
                        />
                        <Route
                            exact
                            path="/appellant/register"
                            component={Register}
                        />
                        {/* <Route
                            exact
                            path="/appellant/formC"
                            component={FormC}
                        /> */}
                        <Route exact path="/official/login" component={Login} />

                        <AppellantPrivateRoute
                            exact
                            path="/appellant/formC"
                            component={FormC}
                        />
                        {/* <Route
                            path="/official/admin"
                            name="Admin"
                            render={(props) => <MasterLayout {...props} />}
                        ></Route> */}
                        <AdminPrivateRoute
                            path="/official/admin"
                            name="Admin"
                        />
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
};

export default App;
