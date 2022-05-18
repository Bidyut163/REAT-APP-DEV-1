import ReceptionistPanel from '../../components/official/receptionist/ReceptionistPanel';

const routes = [
    { path: '/official/receptionist', exact: true, name: 'Receptionist' },

    {
        path: '/official/receptionist/panel',
        exact: true,
        name: 'ReceptionistPanel',
        component: ReceptionistPanel,
    },

    {
        path: '/official/receptionist/appeals',
        exact: true,
        name: 'ReceptionistPanel',
        component: ReceptionistPanel,
    },
    {
        path: '/official/receptionist/appeal',
        exact: true,
        name: 'ReceptionistPanel',
        component: ReceptionistPanel,
    },
];

export default routes;
