import React from 'react';
import { connect } from 'react-redux';

const UserItem = ({ user: { firstName, lastName, id, email, role } }) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{role}</td>
            <td>{email}</td>
        </tr>
    );
};

export default connect(null, {})(UserItem);
