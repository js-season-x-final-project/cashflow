import React from 'react';
import { Link } from "react-router-dom";
import CreateDialog from '../../Components/CreateDialog';

const header = () => (
    <ul>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
            <Link to="/analytics">Analytics</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
        <li>
            <Link to="/records">Records</Link>
        </li>
        <li>
            <Link to="/settings">Settings</Link>
        </li>
        <CreateDialog />
    </ul>
)

export default header;