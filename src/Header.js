import React, { Component } from 'react';
import './App.css';

import {
    Link
} from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img className="Logo" src="http://localhost:8080/logo.png" alt="Logo"/>              
                <ul className="Menu-ul-left">
                    <li><Link to ="/docs">Docs</Link></li>
                    <li><Link to ="/tutorial">Tutorial</Link></li>
                    <li><Link to ="/blog">Blog</Link></li>
                    <li><Link to ="/community">Community</Link></li>
                </ul>
               
                <ul className="Menu-ul-right">
                    <li><Link to ="/version">v16.13.1</Link></li>
                    <li><Link to ="/languages">Languages</Link></li>
                    <li><Link to ="/github">Github</Link></li>
                </ul>
            </div>
        );
    }
}


