import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Link className={styles.logo} to={`/`}>
            <img
              src={process.env.PUBLIC_URL + "/logo.svg"}
              alt="testtask"
              width={104}
              height={26}
            />
          </Link>
          <div className={styles.block}>
            <button className="button button_yellow button_s" type="button">
              Users
            </button>
            <button className="button button_yellow button_s" type="button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
