import React from "react";
import styles from "./left-region.module.css"; // replace 'YourStylesheet' with the name of your CSS module

// Define the LeftRegion component
function LeftRegion() {
  return (
    <div className={styles.left}>
      <p>
        I am on the left. <br />
        One day you might be able to see uploaded documents up here.
        <br />
        The code separation really worked out.
      </p>
    </div>
  );
}

export default LeftRegion;
