import React, { useState } from "react";
import styles from "./Menu.module.css";
import BottomSheet from "./components/BottomSheet";

export default function Menu() {
  const [active, setActive] = useState(false);
  const closeSheet = () => {
    setActive(false);
  };
  const openSheet = () => {
    setActive(true);
  };
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.top}>
        <p>Slide</p>
      </div>
      <div className={styles.bottom}>
        <button onClick={openSheet}> order</button>
      </div>
      {active ? (
        <BottomSheet onPositive={closeSheet} onNegative={closeSheet} />
      ) : null}
    </div>
  );
}
