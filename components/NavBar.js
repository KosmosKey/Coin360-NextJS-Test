import React from "react";
import styles from "../styles/styles.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <img src="https://coin360.com/assets/logo.svg" alt="logo" />
      <div>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
