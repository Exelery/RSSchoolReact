import React, { Component } from 'react';

export default class Notification extends Component<{ message: string }> {
  constructor(props: { message: string }) {
    super(props);
  }

  render() {
    const { message } = this.props;

    return (
      <div className="notification absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">
        {message}
      </div>
    );
  }
}
