import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import { Motion, spring } from 'react-motion';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.position.default.x,
      y: props.position.default.y
    };
  }

  componentWillReceiveProps(nextProps) {
    const { mouse, position } = nextProps;

    let newPosition = this.getPosition(position.default, mouse);
    this.setState({ x: newPosition.x, y: newPosition.y });
  }

  render() {
    const { position, size, children } = this.props;
    const { x, y } = this.state;

    console.log(size);

    return (
      <Motion
        defaultStyle={{ x: position.default.x, y: position.default.y }}
        style={{
          x: spring(x),
          y: spring(y)
        }}
      >
        {value => (
          <div
            style={{
              position: 'absolute',
              top: value.y - size.height / 2,
              left: value.x - size.width / 2
            }}
          >
            {children}
          </div>
        )}
      </Motion>
    );
  }

  // ---

  getPosition(base, mouse) {
    let factor = { x: null, y: null };
    const distance = Math.sqrt(
      Math.pow(Math.abs(base.x - mouse.x), 2) +
        Math.pow(Math.abs(base.y - mouse.y), 2)
    );

    if (distance < 100) factor = 1;
    else factor = Math.exp(-0.01 * Math.abs(distance));

    return {
      x: base.x + (mouse.x - base.x) * factor,
      y: base.y + (mouse.y - base.y) * factor
    };
  }
}

Item = sizeMe({ monitorHeight: true })(Item);
export { Item };
