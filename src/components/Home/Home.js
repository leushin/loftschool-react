import React, { Component } from 'react';
import styles from './Home.module.css';

class Home extends Component {
  render () {
    return (
        <div className={styles.content}>
            <h3 className={styles.title}>Home</h3>
            <div className={styles.container}>
                <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
            </div>
        </div>
    );
  }
}

export default Home;
