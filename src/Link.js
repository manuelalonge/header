import React, { Component } from 'react';
import './App.css';

export default function Link(props) {
  console.log(props);
  return (
    <a>{props.name}</a>
  );
}