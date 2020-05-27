import React, { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  const [active, setActive] = useState(true);
  const closeSheet = () => {
    setActive(false);
  };
  const openSheet = () => {
    setActive(true);
  };
  return (
    <div className={`container ${styles.relative}`}>
      <button onClick={openSheet}> order</button>
      {active ? (
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
            <button onClick={closeSheet}>주문</button>
            <button onClick={closeSheet}>취소</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
