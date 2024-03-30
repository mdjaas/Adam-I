import React from 'react';
import styles from './ImportExport.module.css';

function ImportExport() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2> Imports and Exports</h2>
        <br />
        <h5 className={styles.heading}> Nigeria&apos;s Robust Trade Growth</h5>
        <br />
        <div className={styles.desc}>
          In 2021, Nigeria&apos;s intra-African trade surged by 21.7% to US$9.65 billion, elevating
          its its its status as the 3rd largest intra-African trading nation. Despite crude oil
          dominating exports to African partners, only 3.3% of Nigeria&apos;s total imports came
          from the continent.
        </div>
        <br />
        <button type="submit" className={styles.learnMore}>
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
export default ImportExport;
