import React from "react";

const sizeClasses = {
  txtMulishRomanRegular20Black900b2: "font-mulish font-normal",
  txtMulishRomanSemiBold14: "font-mulish font-semibold",
  txtMulishRomanRegular16Black900b2: "font-mulish font-normal",
  txtMulishRomanRegular20: "font-mulish font-normal",
  txtLibreFranklinRomanMedium16: "font-librefranklin font-medium",
  txtMulishRomanRegular16Bluegray900: "font-mulish font-normal",
  txtMulishRomanSemiBold18: "font-mulish font-semibold",
  txtCeoruseRegular20: "font-ceoruse font-medium",
  txtMulishRomanLight14: "font-light font-mulish",
  txtMulishRomanRegular18WhiteA700: "font-mulish font-normal",
  txtMulishRomanRegular16WhiteA70095: "font-mulish font-normal",
  txtMulishRomanRegular14Bluegray90095: "font-mulish font-normal",
  txtCeoruseRegular20Teal800: "font-ceoruse font-medium",
  txtLibreFranklinRomanRegular14Black900: "font-librefranklin font-normal",
  txtMulishRomanSemiBold20Black900: "font-mulish font-semibold",
  txtMulishRomanMedium16: "font-medium font-mulish",
  txtMulishRomanBold14: "font-bold font-mulish",
  txtMulishRomanBold16: "font-bold font-mulish",
  txtMulishRomanBold38: "font-bold font-mulish",
  txtMulishRomanExtraBold42: "font-extrabold font-mulish",
  txtLibreFranklinRomanRegular12: "font-librefranklin font-normal",
  txtLibreFranklinRomanRegular14: "font-librefranklin font-normal",
  txtMulishRomanBold24WhiteA700: "font-bold font-mulish",
  txtMulishRomanBold32: "font-bold font-mulish",
  txtLibreFranklinRomanSemiBold14: "font-librefranklin font-semibold",
  txtMulishRomanRegular16WhiteA700: "font-mulish font-normal",
  txtMulishRomanExtraBold62WhiteA700: "font-extrabold font-mulish",
  txtMulishRomanExtraBold62: "font-extrabold font-mulish",
  txtMulishRomanRegular14: "font-mulish font-normal",
  txtMulishRomanRegular16: "font-mulish font-normal",
  txtMulishRomanSemiBold20: "font-mulish font-semibold",
  txtMulishRomanLight14WhiteA700b2: "font-light font-mulish",
  txtMulishRomanRegular20Bluegray900cc: "font-mulish font-normal",
  txtMulishRomanExtraBold38: "font-extrabold font-mulish",
  txtMulishRomanBold24: "font-bold font-mulish",
  txtMulishRomanRegular16Black900cc: "font-mulish font-normal",
  txtMulishRomanRegular16Black90099: "font-mulish font-normal",
  txtMulishRomanRegular18: "font-mulish font-normal",
  txtMulishRomanExtraBold62Bluegray900: "font-extrabold font-mulish",
  txtMulishRomanRegular14Black90099: "font-mulish font-normal",
  txtMulishRomanBold42: "font-bold font-mulish",
  txtMulishRomanBold20: "font-bold font-mulish",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
