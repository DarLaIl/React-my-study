import './Info.css';
import styles from './Info.module.css';

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the info component</h1>
      <button className='my-button'>Click me</button>
      <button className={styles.myOtherButton}>Click me again</button>
    </div>
  );
}

export default Info;
