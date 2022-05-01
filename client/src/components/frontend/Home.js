import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/appellant/login" className="btn btn-primary">
                Appellant Login
            </Link>
            <Link to="/official/login" className="btn btn-primary">
                Govt Login
            </Link>
        </div>
    );
};

export default Home;
