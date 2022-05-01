import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from '../../../../actions/user';

import UserItem from './UserItem';

const Users = ({ getUsers, user: { users, loading } }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return loading ? (
        <div>loading</div>
    ) : (
        <div>
            <div className="container-fluid px-4">
                <h1 className="mt-4">All Users</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Users</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>
                        All users
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user) => (
                                    <UserItem key={user.id} user={user} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { getUsers })(Users);
