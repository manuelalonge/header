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
                    <li><Link name="Docs"></Link></li>
                    <li><Link name="Tutorial"></Link></li>
                    <li><Link name="Blog"></Link></li>
                    <li><Link name="Community"></Link></li>
                </ul>

                <ul className="Menu-ul-right">
                    <li><Link name="v16.13.1"></Link></li>
                    <li><Link name="Languages"></Link></li>
                    <li><Link name="Github"></Link></li>
                </ul>
            </div>
        );
    }
}


