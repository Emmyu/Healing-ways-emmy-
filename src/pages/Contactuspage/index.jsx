import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import ContactUsPageButton from "components/ContactUsPageButton";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactuspagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 border-b border-black-900_0c border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[62px] items-center justify-start max-w-[1240px] mt-[65px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtMulishRomanBold32"
                >
                  Contact Sales
                </Text>
                <Text
                  className="max-w-[522px] md:max-w-full text-base text-black-900_b2"
                  size="txtMulishRomanRegular16Black900b2"
                >
                  Ready to build the future of health tourism? Reach out to our
                  sales team and we’ll be in touch.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-[39px] w-full">
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-[48%] sm:w-full">
                    <Text
                      className="text-blue_gray-900_01 text-sm"
                      size="txtMulishRomanBold14"
                    >
                      First name
                    </Text>
                    <Input
                      name="frame1000002588"
                      placeholder="Placeholder"
                      className="font-librefranklin leading-[normal] p-0 placeholder:text-gray-300 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-900_19 border-solid w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[11px] items-start justify-start mb-[3px] w-[250px]">
                    <Text
                      className="text-blue_gray-900_01 text-sm w-auto"
                      size="txtMulishRomanBold14"
                    >
                      Last name
                    </Text>
                    <Input
                      name="frame1000002588_One"
                      placeholder="Placeholder"
                      className="font-librefranklin leading-[normal] p-0 placeholder:text-gray-300 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-900_19 border-solid w-full"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-start justify-end mt-5 w-full">
                <Text
                  className="text-blue_gray-900_01 text-sm"
                  size="txtMulishRomanBold14"
                >
                  Email
                </Text>
                <Input
                  name="frame1000002588_Two"
                  placeholder="Placeholder"
                  className="font-librefranklin leading-[normal] p-0 placeholder:text-gray-300 text-left text-sm w-full"
                  wrapClassName="border border-blue_gray-900_19 border-solid w-full"
                ></Input>
              </div>
              <Text
                className="mt-[22px] text-blue_gray-900_01 text-sm"
                size="txtMulishRomanBold14"
              >
                Phone number
              </Text>
              <div className="bg-white-A700 border border-blue_gray-900_19 border-solid flex flex-row font-librefranklin gap-2 items-center justify-start mt-[11px] p-[19px] rounded-[10px] w-full">
                <div className="flex flex-row gap-2 items-start justify-start ml-1 w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="bg-blue_gray-900_02 flex flex-col items-center justify-start w-[57%]">
                      <Img
                        className="h-[23px] md:h-auto object-cover w-full"
                        src="images/img_181651.png"
                        alt="181651"
                      />
                    </div>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtLibreFranklinRomanRegular14Black900"
                    >
                      +1
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_black_900_01.svg"
                    alt="arrowdown_One"
                  />
                </div>
                <Text
                  className="text-gray-300 text-sm"
                  size="txtLibreFranklinRomanRegular14"
                >
                  Phone number
                </Text>
              </div>
              <div className="flex flex-col font-mulish gap-2 items-start justify-start mt-[21px] pt-[5px] w-full">
                <Text
                  className="text-blue_gray-900_01 text-sm"
                  size="txtMulishRomanBold14"
                >
                  Comments
                </Text>
                <div className="bg-white-A700 border border-blue_gray-900_19 border-solid flex flex-col font-librefranklin h-[127px] md:h-auto items-start justify-start p-[23px] sm:px-5 rounded-[10px] w-[530px] sm:w-full">
                  <Text
                    className="text-gray-300 text-sm w-auto"
                    size="txtLibreFranklinRomanRegular14"
                  >
                    Details of specific questions will be helpful
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-end mt-5 py-1 w-full">
                <Text
                  className="text-blue_gray-900_01 text-sm"
                  size="txtMulishRomanBold14"
                >
                  Country of residence
                </Text>
                <Input
                  name="frame1000002591"
                  placeholder="Placeholder"
                  className="font-librefranklin p-0 placeholder:text-gray-300 text-left text-sm w-full"
                  wrapClassName="border border-blue_gray-900_19 border-solid flex md:h-auto w-[530px] sm:w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-auto"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                  }
                  size="xs"
                ></Input>
              </div>
              <ContactUsPageButton className="bg-blue-600 flex flex-col font-mulish gap-1 h-[50px] md:h-auto items-center justify-start mt-10 px-4 py-[7px] rounded-[10px] w-[530px] sm:w-full" />
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
              <div className="h-[841px] relative w-full">
                <Img
                  className="h-[841px] m-auto object-cover rounded-[9px] w-full"
                  src="images/img_mediumshotdoc_841x648.png"
                  alt="mediumshotdoc"
                />
                <div className="absolute bg-black-900_66 h-[841px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
              </div>
            </div>
          </div>
          <Footer className="bg-blue_gray-900 flex gap-2.5 items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactuspagePage;
