import React from "react";
import classNames from "classnames";

import styles from "./TitleBlock.module.scss";

const TitleBlock = () => {
  return (
    <div className={styles.container}>
      <picture className={styles.img}>
        <source
          srcSet={process.env.PUBLIC_URL + "/img/main_img_m.webp"}
          type="image/webp"
          media="(max-width: 1023.98px)"
        />
        <source
          srcSet={process.env.PUBLIC_URL + "/img/main_img_l.webp"}
          type="image/webp"
          media="(min-width: 1024px)"
        />
        <source
          srcSet={process.env.PUBLIC_URL + "/img/main_img_m.jpeg"}
          type="image/jpeg"
          media="(max-width: 1023.98px)"
        />
        <source
          srcSet={process.env.PUBLIC_URL + "/img/main_img_l.jpeg"}
          type="image/jpeg"
          media="(min-width: 1024px)"
        />
        <img srcSet={process.env.PUBLIC_URL + "/img/main_img_l.jpeg"} alt="title" />
      </picture>
      <div className={styles.block}>
        <div className={styles.text_block}>
          <h1 className={classNames("title", styles.title)}>
            Test assignment for front-end developer
          </h1>
          <div className="text">
            <p>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
          </div>
        </div>

        <button
          className={classNames(
            "button",
            "button_yellow",
            "button_s",
            styles.button
          )}
          type="button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default TitleBlock;
