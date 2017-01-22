import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.tick = this.tick.bind(this);
  }
  componentWillMount() {
    const localStorageTime = localStorage.getItem('secondsRemaining');

    if (localStorageTime) {
      this.setState({
        secondsRemaining: JSON.parse(localStorageTime),
      });
    } else {
      this.setState({
        secondsRemaining: '36000000',
      });
    }

    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1,
    });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    const time = () => {
      const secNum = parseInt(this.state.secondsRemaining, 10);
      const hours = Math.floor(secNum / 3600);
      const minutes = Math.floor(secNum / 60) % 60;
      const seconds = secNum % 60;
      return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== '00' || i > 0)
        .join(':');
    };

    return (
      <div>
        <h1>Hours remaining</h1>
        {time()}
      </div>
    );
  }
}

export default Timer;
