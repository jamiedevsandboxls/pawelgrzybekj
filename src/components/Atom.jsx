import React, { Component } from 'react';

class Atom extends Component {
  render() {
    return (
      <pre className="pre">
        atom logic here

        {this.props.snippet}
      </pre>
    );
  }
}

export default Atom;
