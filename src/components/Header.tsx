import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
    return <div className="header">
        <span className="logo">Logixboard</span>
        <span className="header-link">
            <Link to="/dashboard">Dashboard</Link>
        </span>
        <span className="header-link">
            <Link to="/all">All Shipments</Link>
        </span>
    </div>
}