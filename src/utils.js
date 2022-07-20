import React from "react";

import NumberFormat from "react-number-format";

export const PHONE_CODE = "+380";

export const PhoneFormatCustom = React.forwardRef(function PhoneFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format="+38 (0##) ### ## ##"
      mask="_"
    />
  );
});
