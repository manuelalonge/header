import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Link from './Link';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img className="Logo" src={logo} alt="Logo"/>
                <ul className="Menu-ul-left">
                    <li><Link name="Docs" href="https://google.com"></Link></li>
                    <li><Link name="Tutorial" href="https://facebook.com"></Link></li>
                    <li><Link name="Blog" href="https://youtube.com"></Link></li>
                    <li><Link name="Community" href="https://twitter.com"></Link></li>
                </ul>

                <ul className="Menu-ul-right">
                    <li><Link name="v16.13.1" href="https://linkedin.com"></Link></li>
                    <li><Link name="Languages" href="https://translate.google.it/?hl=it&tab=rT"></Link></li>
                    <li><Link name="Github" href="https://github.com"></Link></li>
                </ul>
            </div>
        );
    }
}


