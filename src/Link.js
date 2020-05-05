import React from 'react';
import './App.css';

export default function Link(props) {
  console.log(props);
  return (
    <a href={props.href} target="_blank">{props.name}</a>
  );
}