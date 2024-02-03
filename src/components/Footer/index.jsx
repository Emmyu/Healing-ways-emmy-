import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[194px] items-start justify-between w-auto md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtCeoruseRegular20"
              >
                Healing ways
              </Text>
              <Text
                className="leading-[130.00%] max-w-[359px] md:max-w-full text-base text-white-A700"
                size="txtMulishRomanRegular16WhiteA700"
              >
                Connecting people or medically challenged individuals to the
                right hospitals both locally and internationally to receive the
                best possible care geared towards restoring health.
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[86px] items-start justify-center w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtMulishRomanRegular18WhiteA700"
                >
                  Quick Links
                </Text>
                <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-white-A700_95"
                      size="txtMulishRomanRegular16WhiteA70095"
                    >
                      Testimonial
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700_95"
                      size="txtMulishRomanRegular16WhiteA70095"
                    >
                      Services
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700_95"
                      size="txtMulishRomanRegular16WhiteA70095"
                    >
                      About us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700_95"
                      size="txtMulishRomanRegular16WhiteA70095"
                    >
                      Contact us
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtMulishRomanRegular18WhiteA700"
                >
                  Legal
                </Text>
                <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-white-A700_95"
                      size="txtMulishRomanRegular16WhiteA70095"
                    >
                      Privacy policy
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700_95"
                      size="txtMulishRomanRegular16WhiteA70095"
                    >
                      Terms of use
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700_95"
                      size="txtMulishRomanRegular16WhiteA70095"
                    >
                      Data protection policy
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[27px] items-start justify-start w-[37%] sm:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtMulishRomanRegular18WhiteA700"
                >
                  Subscribe
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-row items-center justify-between outline outline-[0.5px] outline-indigo-900_33 pl-[15px] rounded-md w-full">
                    <Text
                      className="text-blue_gray-900_95 text-sm"
                      size="txtMulishRomanRegular14Bluegray90095"
                    >
                      Get product updates
                    </Text>
                    <div className="bg-blue-600 border border-blue_gray-100 border-solid flex flex-col h-[50px] items-center justify-start p-4 rounded-br-md rounded-tr-md w-[50px]">
                      <Img
                        className="h-[13px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
            <Line className="bg-white-A700_6c h-px outline outline-[0.5px] outline-white-A700_6c w-full" />
            <div className="flex flex-row md:gap-10 items-end justify-between w-full">
              <div className="flex flex-col items-center justify-start w-[11%]">
                <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[35px] items-center justify-start p-[11px] w-[35px]"
                    style={{
                      backgroundImage: "url('images/img_linkedin.svg')",
                    }}
                  >
                    <Img
                      className="h-[11px] w-[11px]"
                      src="images/img_link.svg"
                      alt="link"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[35px] items-center justify-start p-[11px] w-[35px]"
                    style={{
                      backgroundImage: "url('images/img_linkedin.svg')",
                    }}
                  >
                    <Img
                      className="h-3"
                      src="images/img_facebook_white_a700.svg"
                      alt="facebook"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[35px] items-center justify-start p-[11px] w-[35px]"
                    style={{
                      backgroundImage: "url('images/img_linkedin.svg')",
                    }}
                  >
                    <Img
                      className="h-2.5"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-0.5 mt-[11px]">
                <Text
                  className="text-base text-white-A700"
                  size="txtMulishRomanRegular16WhiteA700"
                >
                  © 2024All rights reserved
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
