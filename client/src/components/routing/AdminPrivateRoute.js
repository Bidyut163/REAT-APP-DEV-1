import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MasterLayout from '../../layouts/official/MasterLayout';

const AdminPrivateRoute = ({
    auth: { isAuthenticated, loading, user },
    ...rest
}) => {
    if (!isAuthenticated && !loading) {
        return <Redirect to="/official/login" />;
    }

    if (user && user.role !== 'ADMIN') {
        return <Redirect to="/official/login" />;
    }

    return <Route {...rest} render={(props) => <MasterLayout {...props} />} />;
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(AdminPrivateRoute);
