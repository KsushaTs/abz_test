import React, { useEffect } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userListAction } from "../../actions/userActions";
import styles from "./Cards.module.scss";
import Card from "../Card";
import LoadingBox from "../LoadingBox";

const Cards = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { loading, success, error, users, page, total_pages } = useSelector(
    (state) => state.userList
  );

  useEffect(() => {
    dispatch(userListAction({ page: 1, count: 6 }));
  }, [dispatch]);

  useEffect(() => {
    navigate(page > 1 ? `/users/page=${page}` : "/");
  }, [page, navigate]);

  const showMoreHandler = () => {
    if (page < total_pages) {
      dispatch(userListAction({ page: page + 1, count: 6 }));
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Working with GET request</h2>

        {loading && <LoadingBox />}

        {success ? (
          <>
            <div className={styles.cards}>
              {users.map((item, index) => (
                <Card key={index} user={item} />
              ))}
            </div>
            {page < total_pages && (
              <button
                className={classNames(
                  "button",
                  "button_yellow",
                  "button_m",
                  styles.button
                )}
                type="button"
                onClick={showMoreHandler}
              >
                Show more
              </button>
            )}
          </>
        ) : <div className="error-message"> {error} </div>}
      </div>
    </section>
  );
};

export default Cards;
