import React from 'react';
import { Link } from "react-router-dom";

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
    </ul>
)

export default header;