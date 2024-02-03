import React from "react";

import { Button, Img, Line, Text } from "components";
import ContactUsPageButton from "components/ContactUsPageButton";
import Footer from "components/Footer";
import Header from "components/Header";

const SerivicespageMedicalAccommodationLogisticsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-black-900_0c border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-start p-[60px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-start justify-between max-w-[1240px] mx-auto w-full">
              <div className="flex sm:flex-1 flex-col items-center justify-center w-auto sm:w-full">
                <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                  <Text
                    className="leading-[110.00%] max-w-[524px] md:max-w-full md:text-5xl text-[62px] text-blue_gray-900"
                    size="txtMulishRomanExtraBold62Bluegray900"
                  >
                    We use half the space we build
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[140.00%] max-w-[589px] md:max-w-full text-blue_gray-900_cc text-xl"
                  size="txtMulishRomanRegular20Bluegray900cc"
                >
                  Connecting people or medically challenged individuals to the
                  right hospitals both locally and internationally to receive
                  the best possible Connecting people or medically challenged{" "}
                </Text>
                <ContactUsPageButton
                  className="bg-blue-600 flex flex-col gap-1 h-[50px] md:h-auto items-center justify-start px-4 py-[7px] rounded-[10px] w-[272px]"
                  submitbutton="Book a medical report consult"
                />
              </div>
            </div>
          </div>
          <Img
            className="h-[473px] sm:h-auto object-cover w-[1440px] md:w-full"
            src="images/img_bedsmedicaleq_473x1440.png"
            alt="bedsmedicaleq"
          />
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[119px] items-center justify-between max-w-[1201px] mt-20 mx-auto md:px-5 w-full">
          <div className="md:h-[510px] h-[536px] relative w-[43%] md:w-full">
            <div className="absolute bg-blue_gray-900 bottom-[0] h-[510px] left-[0] w-[94%]"></div>
            <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[94%]">
              <Img
                className="h-[510px] md:h-auto object-cover rounded-bl rounded-br w-full"
                src="images/img_backgroundblac.png"
                alt="backgroundblac"
              />
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-center w-auto sm:w-full">
              <Text
                className="leading-[130.00%] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                size="txtMulishRomanBold42"
              >
                <>
                  Experience Affordable, <br />
                  World-Class Medical Care{" "}
                </>
              </Text>
              <Text
                className="max-w-[573px] md:max-w-full text-base text-black-900_b2"
                size="txtMulishRomanRegular16Black900b2"
              >
                We are committed to making your medical tourism journey a
                success, from initial consultation to post-treatment follow-up.
                Let us help you achieve your.
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtMulishRomanBold20"
                >
                  Access work orders anywhere, on any device
                </Text>
                <Text
                  className="max-w-[525px] md:max-w-full text-black-900_99 text-sm"
                  size="txtMulishRomanRegular14Black90099"
                >
                  We are committed to making your medical tourism journey a
                  success, from initial consultation to post-treatment
                  follow-up. Let us help you achieve your healthcare goals while
                  exploring the world and expanding your horizons.
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtMulishRomanBold20"
                >
                  Access work orders anywhere, on any device
                </Text>
                <Text
                  className="max-w-[525px] md:max-w-full text-black-900_99 text-sm"
                  size="txtMulishRomanRegular14Black90099"
                >
                  We are committed to making your medical tourism journey a
                  success, from initial consultation to post-treatment
                  follow-up. Let us help you achieve your healthcare goals while
                  exploring the world and expanding your horizons.
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtMulishRomanBold20"
                >
                  Access work orders anywhere, on any device
                </Text>
                <Text
                  className="max-w-[525px] md:max-w-full text-black-900_99 text-sm"
                  size="txtMulishRomanRegular14Black90099"
                >
                  We are committed to making your medical tourism journey a
                  success, from initial consultation to post-treatment
                  follow-up. Let us help you achieve your healthcare goals while
                  exploring the world and expanding your horizons.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1239px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-auto sm:w-full">
            <Text
              className="leading-[130.00%] sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center"
              size="txtMulishRomanBold42"
            >
              <>
                Experience Affordable, <br />
                World-Class Medical Care{" "}
              </>
            </Text>
            <Text
              className="max-w-[573px] md:max-w-full text-base text-black-900_b2"
              size="txtMulishRomanRegular16Black900b2"
            >
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up. Let us help
              you achieve your.
            </Text>
          </div>
          <Img
            className="h-[590px] w-[1239px]"
            src="images/img_frame1000008906.svg"
            alt="frame1000008906"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end mt-[43px] p-[55px] md:px-10 sm:px-5 w-full">
          <div className="bg-light_blue-100_66 flex flex-col items-start justify-start max-w-[1239px] mx-auto md:px-5 px-[53px] py-[17px] rounded-[10px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="leading-[120.00%] max-w-[664px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                    size="txtMulishRomanExtraBold42"
                  >
                    Health serivices or tips for healthy living, you can find
                    here.
                  </Text>
                  <Text
                    className="max-w-[527px] md:max-w-full text-base text-black-900_99"
                    size="txtMulishRomanRegular16Black90099"
                  >
                    Connecting people or medically challenged individuals to the
                    right hospitals both locally and internationally to receive
                    the best possible care geared towards restoring health.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[227px]"
                  shape="round"
                  color="blue_600"
                  size="xs"
                  variant="fill"
                >
                  Book a consultation
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[33%] md:w-full">
                <Img
                  className="h-[328px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_pexelsthirdman5327656.png"
                  alt="pexelsthirdmanFive"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-900 flex gap-2.5 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SerivicespageMedicalAccommodationLogisticsPage;
