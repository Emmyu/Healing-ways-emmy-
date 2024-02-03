import React from "react";

import { Img, Text } from "components";

const ContactUsPageButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-center w-full">
          <Text
            className="flex-1 text-center text-sm text-white-A700 w-auto"
            size="txtMulishRomanSemiBold14"
          >
            {props?.submitbutton}
          </Text>
          <Img
            className="h-4 w-4"
            src="images/img_arrowright_white_a700.svg"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

ContactUsPageButton.defaultProps = { submitbutton: "Submit" };

export default ContactUsPageButton;
