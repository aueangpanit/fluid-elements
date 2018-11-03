import React, { Component } from 'react';
import './App.css';

import { Motion, spring } from 'react-motion';

class App extends Component {
  constructor(props) {
    super(props);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.getLocation = this.getLocation.bind(this);

    this.state = {
      mouse: { x: null, y: null }
    };
  }

  onMouseMove(e) {
    this.setState({ mouse: { x: e.clientX, y: e.clientY } });
  }

  getLocation(defaultLocation, mouse) {
    let factor = { x: null, y: null };
    if (
      Math.abs(defaultLocation.x - mouse.x) < 100 &&
      Math.abs(defaultLocation.y - mouse.y) < 100
    ) {
      factor.x = 1;
      factor.y = 1;
    } else {
      factor.x = Math.exp(-0.01 * Math.abs(defaultLocation.x - mouse.x));
      factor.y = Math.exp(-0.01 * Math.abs(defaultLocation.y - mouse.y));
    }

    /*if (mouse.x - defaultLocation.x < 0) preFactor.x = -1;
    if (mouse.y - defaultLocation.y < 0) preFactor.y = -1;*/

    return {
      x: defaultLocation.x + (mouse.x - defaultLocation.x) * factor.x,
      y: defaultLocation.y + (mouse.y - defaultLocation.y) * factor.y
    };
  }

  render() {
    const { mouse } = this.state;

    const defaultLocation1 = { x: 500, y: 0 };
    const defaultLocation2 = { x: 0, y: 200 };

    const location1 = this.getLocation(defaultLocation1, mouse);
    const location2 = this.getLocation(defaultLocation2, mouse);

    return (
      <div
        className="App"
        style={{ height: '100vh' }}
        onMouseMove={this.onMouseMove}
      >
        <Motion
          defaultStyle={{ x: defaultLocation1.x, y: defaultLocation1.y }}
          style={{
            x: spring(location1.x),
            y: spring(location1.y)
          }}
        >
          {value => (
            <div
              style={{
                position: 'absolute',
                width: 100,
                height: 100,
                left: value.x,
                top: value.y,
                backgroundColor: 'red'
              }}
            />
          )}
        </Motion>
        <Motion
          defaultStyle={{ x: defaultLocation2.x, y: defaultLocation2.y }}
          style={{
            x: spring(location2.x),
            y: spring(location2.y)
          }}
        >
          {value => (
            <div
              style={{
                position: 'absolute',
                width: 100,
                height: 100,
                left: value.x,
                top: value.y,
                backgroundColor: 'red'
              }}
            />
          )}
        </Motion>
      </div>
    );
  }
}

export default App;
