import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          {moment (). format ( ' MMMM Do YYYY, h: mm: ss a ' )}
        </div>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
