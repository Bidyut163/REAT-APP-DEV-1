import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppealItem from './AppealItem';
import { getAppeals } from '../../../actions/appeal';
import { connect } from 'react-redux';

const ReceptionistPanel = ({ getAppeals, appeal: { appeals, loading } }) => {
    useEffect(() => {
        getAppeals();
    }, [getAppeals]);
    return loading ? (
        <div>loading</div>
    ) : (
        <div>
            <div className="container-fluid px-4">
                <h1 className="mt-4">All Appeals</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Appeals</li>
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
                                    <th scope="col">Name </th>
                                    <th scope="col">Address</th>
                                    <th scope="col">View</th>
                                </tr>
                            </thead>

                            <tbody>
                                {appeals.map((appeal) => (
                                    <AppealItem
                                        key={appeal.id}
                                        appeal={appeal}
                                    />
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
    return { appeal: state.appeal };
};

export default connect(mapStateToProps, { getAppeals })(ReceptionistPanel);
