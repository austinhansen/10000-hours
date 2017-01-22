import React, { Component } from 'react';
import { Link } from 'react-router';
import Timer from '../../components/Timer';
import styles from './Home.css';

class Home extends Component {
  static defaultProps = {
  }

  render() {
    return (
      <div className={styles.base}>
        <h1>Countdown Timer</h1>
        <Timer />
        <Link to="/settings">Settings</Link>
      </div>
    );
  }
}

export default Home;
