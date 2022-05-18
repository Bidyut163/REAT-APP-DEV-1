import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import '../../../assets/official/css/styles.css';
import '../../../assets/official/js/scripts';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import Alert from './Alert';

import routes from '../../../routes/receptionist/routes';

const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                );
                            })}

                            <Redirect
                                from="/official/receptionist"
                                to="/official/receptionist/panel"
                            />
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;
