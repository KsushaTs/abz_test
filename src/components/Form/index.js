import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Form.module.scss";
import { CssTextField } from "../../muiCustom.js";
import { PHONE_CODE, PhoneFormatCustom } from "../../utils";
import { positionListAction } from "../../actions/positionAction";
import { register, userListAction } from "../../actions/userActions";
import { USER_LIST_RESET } from "../../constants/userConstants";

const FILE_SIZE = 5 * 2 ** 20;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg"];

const validation = yup.object({
  name: yup
    .string("Enter your name")
    .required("Name is required")
    .min(2, "Name min 2 characters length")
    .max(60, "Name max 60 characters length"),
  phone: yup
    .string("Enter your phone")
    .min(9, "Phone min 9 characters length")
    .required("Phone is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  photo: yup
    .mixed()
    .required("File is required")
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});

const Form = () => {
  const dispatch = useDispatch();

  const {
    loading: loadingPositionList,
    success: successPositionList,
    error: errorPositionList,
    positions,
  } = useSelector((state) => state.positionList);

  const {
    loading: loadingRegister,
    success: successRegister,
    error: errorRegister,
  } = useSelector((state) => state.userRegister);

  const formik = useFormik({
    initialValues: {
      position_id: 1,
      name: "",
      email: "",
      phone: "",
      photo: null,
    },
    validationSchema: validation,
    onSubmit: (values) => {
      let formData = new FormData();

      for (let value in values) {
        formData.append(value, values[value]);
      }
      formData.set("phone", `${PHONE_CODE}${values.phone}`);

      dispatch(register(formData));
    },
  });

  useEffect(() => {
    dispatch(positionListAction());
  }, [dispatch]);

  useEffect(() => {
    if (successRegister) {
      dispatch({ type: USER_LIST_RESET });
      dispatch(userListAction({ page: 1, count: 6 }));
    }
  }, [dispatch, successRegister]);

  return (
    <section className="section">
      <div className="container">
        {(loadingRegister || (!loadingRegister && !successRegister)) && (
          <>
            <h2 className="title">Working with POST request</h2>

            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <div className={styles.input_group}>
                <div className={styles.input_wrap}>
                  <CssTextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Your name"
                    variant="outlined"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </div>
                <div className={styles.input_wrap}>
                  <CssTextField
                    fullWidth
                    id="email"
                    name="email"
                    label="email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </div>
                <div className={styles.input_wrap}>
                  <CssTextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="phone"
                    variant="outlined"
                    InputProps={{
                      inputComponent: PhoneFormatCustom,
                    }}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </div>
              </div>

              {loadingPositionList ? (
                <div>loading...</div>
              ) : successPositionList ? (
                <div className={styles.select_block}>
                  <div className={styles.select_title}>
                    Select your position
                  </div>
                  <div className={styles.radio_group}>
                    {positions.map((item, index) => (
                      <div key={index} className={styles.radio_wrap}>
                        <div className={styles.input_custom}>
                          <input
                            type="radio"
                            name="position_id"
                            id={item.id}
                            value={item.id}
                            onChange={formik.handleChange}
                            defaultChecked={index === 0 ? true : false}
                          />
                          <div className={styles.mark}></div>
                        </div>
                        <label htmlFor={item.id} className={styles.radio_label}>
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="error-message"> {errorPositionList} </div>
              )}

              <div className={styles.file_wrap}>
                <div
                  className={classNames(styles.file_custom, {
                    [styles.file_error]:
                      formik.touched.photo && formik.errors.photo,
                  })}
                >
                  <input
                    id="photo"
                    className={styles.file_input}
                    name="photo"
                    type="file"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "photo",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <label htmlFor="photo" className={styles.file_button}>
                    Upload
                  </label>

                  <div
                    className={classNames(styles.file_field, {
                      [styles.file_value]: formik.values.photo,
                    })}
                  >
                    {formik.values.photo
                      ? formik.values.photo.name
                      : "Upload your photo"}
                  </div>

                  {formik.touched.photo && formik.errors.photo && (
                    <div className={styles.file_label}>
                      {formik.errors.photo}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.button_block}>
                <button
                  className="button button_yellow button_s"
                  type="submit"
                  //   disabled
                >
                  Sign up
                </button>
              </div>
            </form>
          </>
        )}

        {!loadingRegister && !successRegister && (
          <div className={styles.error_block}>
            <div className="error-message"> {errorRegister} </div>
          </div>
        )}

        {!loadingRegister && successRegister && (
          <>
            <h2 className="title">User successfully registered</h2>
            <img
              className={styles.img}
              src={process.env.PUBLIC_URL + "/img/success-image.svg"}
              alt=""
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Form;
