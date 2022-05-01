import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Home from './components/frontend/Home';
import AppellantLogin from './components/frontend/auth/appellant/Login';
import Login from './components/frontend/auth/official/Login';
// import MasterLayout from './layouts/official/MasterLayout';
import AdminPrivateRoute from './components/routing/AdminPrivateRoute';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
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
                        <Route exact path="/official/login" component={Login} />

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
