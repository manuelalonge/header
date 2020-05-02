import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Link from './Link';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img className="Logo" src={logo} alt="Logo" />
                <ul className="Menu-ul-left">
                    <li><Link name="Docs" ></Link></li>
                </ul>               
            </div>
        );
    }
}


