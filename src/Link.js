import React, { Component } from 'react';
import './App.css';

export default function Link(props) {
  console.log(props);
  return (
    <a href="https://google.com" target="_blank">{props.name}</a>
  );
}