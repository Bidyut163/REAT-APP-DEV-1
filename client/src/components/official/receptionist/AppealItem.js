import React from 'react';

const AppealItem = ({
    appeal: { id, firstName, lastName, addressLine1, addressLine2 },
}) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{`${addressLine1} ${addressLine2}`}</td>
            <td>
                {' '}
                <button className="btn btn-primary">View</button>
            </td>
        </tr>
    );
};

export default AppealItem;
