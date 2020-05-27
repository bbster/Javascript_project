import React from "react";
import styles from "../Menu.module.css";

export default function BottomSheet({ onPositive, onNegative }) {
  return (
    <div className={styles.bottomSheet}>
      <h3>bottomSheet</h3>
      <div>
        <div className={styles.flex}>
          <label htmlFor="">option</label>
          <select name="" id="">
            <option value="">opt1</option>
          </select>
        </div>
        <div className={styles.flex}>
          <label htmlFor="">size</label>
          <select name="" id="">
            <option value="">size1</option>
          </select>
        </div>
      </div>
      <div className={`${styles.flex} ${styles.btnWrapper}`}>
        <button onClick={onPositive}>주문</button>
        <button onClick={onNegative}>취소</button>
      </div>
    </div>
  );
}
