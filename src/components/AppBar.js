import React from 'react';
import {Link} from 'react-router-dom';
import isDev from '../CheckIfDev';

function AppBar() {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <span>  </span>
            {isDev() && <Link to='/dev'>Development</Link>}
        </div>
    );
}

export default AppBar;