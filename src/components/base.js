import React, { Component } from 'react';

class Base extends Component {
  constructor(props) {
    super(props);

    this.onMouseMove = this.onMouseMove.bind(this);

    this.state = {
      mouse: {
        x: null,
        y: null
      }
    };
  }

  onMouseMove(e) {
    this.setState({ mouse: { x: e.clientX, y: e.clientY } });
  }

  render() {
    const { children } = this.props;
    const { mouse } = this.state;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { mouse })
    );

    return (
      <div
        onMouseMove={this.onMouseMove}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        {childrenWithProps}
      </div>
    );
  }
}

export { Base };
