import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ConsultationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-black-900_0c border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex md:flex-col flex-row gap-[37px] items-start justify-start max-w-[1240px] mt-[65px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-[50px] items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtMulishRomanBold32"
                >
                  Book a consultation online
                </Text>
                <Text
                  className="text-base text-black-900_b2 w-auto"
                  size="txtMulishRomanRegular16Black900b2"
                >
                  Connecting people or medically challenged individuals to the
                  right hospitals{" "}
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[11px] items-start justify-end w-full">
                  <Text
                    className="text-blue_gray-900_01 text-sm"
                    size="txtMulishRomanBold14"
                  >
                    Full name
                  </Text>
                  <Input
                    name="frame1000002588"
                    placeholder="Placeholder"
                    className="font-librefranklin leading-[normal] p-0 placeholder:text-gray-300 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-900_19 border-solid w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-end w-full">
                  <Text
                    className="text-blue_gray-900_01 text-sm"
                    size="txtMulishRomanBold14"
                  >
                    Email
                  </Text>
                  <Input
                    name="frame1000002588_One"
                    placeholder="Placeholder"
                    className="font-librefranklin leading-[normal] p-0 placeholder:text-gray-300 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-900_19 border-solid w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-end w-full">
                  <Text
                    className="text-blue_gray-900_01 text-sm"
                    size="txtMulishRomanBold14"
                  >
                    Phone number
                  </Text>
                  <Input
                    name="frame1000002588_Two"
                    placeholder="Enter your phone number"
                    className="font-librefranklin leading-[normal] p-0 placeholder:text-gray-300 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-900_19 border-solid w-full"
                    type="number"
                    size="md"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-end w-full">
                  <Text
                    className="text-blue_gray-900_01 text-sm"
                    size="txtMulishRomanBold14"
                  >
                    Address
                  </Text>
                  <Input
                    name="frame1000002588_Three"
                    placeholder="Placeholder"
                    className="font-librefranklin leading-[normal] p-0 placeholder:text-gray-300 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-900_19 border-solid w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start pt-1.5 w-full">
                  <Text
                    className="text-blue_gray-900_01 text-sm"
                    size="txtMulishRomanBold14"
                  >
                    Medical history
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-900_19 border-solid flex flex-col font-librefranklin h-[127px] md:h-auto items-start justify-start p-[23px] sm:px-5 rounded-[10px] w-[530px] sm:w-full">
                    <Text
                      className="text-gray-300 text-sm w-auto"
                      size="txtLibreFranklinRomanRegular14"
                    >
                      Placeholder
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start py-0.5 w-full">
                  <Text
                    className="text-blue_gray-900_01 text-sm"
                    size="txtMulishRomanBold14"
                  >
                    Choose Service
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
                <div className="flex flex-col gap-[9px] items-start justify-end py-1 w-full">
                  <Text
                    className="text-blue_gray-900_01 text-sm"
                    size="txtMulishRomanBold14"
                  >
                    Country of residence
                  </Text>
                  <Input
                    name="frame1000002591_One"
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
                <div className="flex flex-col font-librefranklin gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtLibreFranklinRomanSemiBold14"
                  >
                    Upload medical report
                  </Text>
                  <div className="bg-blue_gray-200_0c border border-blue_gray-200 border-dashed flex flex-col items-start justify-start p-[18px] rounded-[10px] w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-[282px]">
                      <Img
                        className="h-12 w-12"
                        src="images/img_uploadimage1.svg"
                        alt="uploadimageOne"
                      />
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900_01 w-auto"
                          size="txtLibreFranklinRomanMedium16"
                        >
                          Tap here to upload
                        </Text>
                        <Text
                          className="text-blue_gray-900_01 text-xs w-auto"
                          size="txtLibreFranklinRomanRegular12"
                        >
                          Max. File size: 5MB
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[530px]"
              shape="round"
              color="blue_600"
              size="xs"
              variant="fill"
            >
              Book a consultation
            </Button>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
            <div className="h-[1053px] relative w-full">
              <Img
                className="h-[1053px] m-auto object-cover w-full"
                src="images/img_mediumshotdoc.png"
                alt="mediumshotdoc"
              />
              <div className="absolute bg-black-900_66 h-[1053px] inset-[0] justify-center m-auto w-full"></div>
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-900 flex gap-2.5 items-center justify-center mt-[46px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ConsultationPage;
