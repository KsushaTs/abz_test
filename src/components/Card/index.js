import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Tooltip from "@mui/material/Tooltip";

import styles from "./Card.module.scss";

const Card = ({ user }) => {
  let phone = user?.phone.replace(
    /^\+{0,1}(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/,
    "+$1 ($2) $3 $4 $5"
  );

  return (
    <div className={styles.card}>
      <Link className={styles.photo} to={`/users/${user?.id}`}>
        <img src={user?.photo} alt="user" />
      </Link>
      <Link className={classNames("text", styles.name)} to={`/users/${user?.id}`}>
        {user?.name}
      </Link>

      <div className={classNames("text", styles.position)}>
        {user?.position}
      </div>

      <Tooltip title={user?.email} followCursor>
        <a
          href={`mailto:${user?.email}`}
          className={classNames("text", styles.email)}
        >
          {user?.email}
        </a>
      </Tooltip>
      <a
        href={`tel:${user?.phone}`}
        className={classNames("text", styles.phone)}
      >
        {phone}
      </a>
    </div>
  );
};

export default Card;
