import React, { Component } from 'react';
import { Base, Item } from '../../components';

class SimpleDemo extends Component {
  render() {
    return (
      <Base>
        <Item position={{ default: { x: 500, y: 200 } }}>
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red'
            }}
          />
        </Item>
        <Item position={{ default: { x: 200, y: 500 } }}>
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red'
            }}
          />
        </Item>
        <Item position={{ default: { x: 1000, y: 500 } }}>
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red'
            }}
          />
        </Item>
      </Base>
    );
  }
}

export { SimpleDemo };
