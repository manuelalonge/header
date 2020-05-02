import React, { Component } from 'react';
import './App.css';

export default function Link(props) {
  return (
    <a>{props.name}</a>,
    <a>{props.href}</a>
  );
}