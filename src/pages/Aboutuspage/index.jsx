import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutuspagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-black-900_0c border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 h-[506px] md:px-5 relative w-full">
          <Img
            className="h-[506px] m-auto object-cover w-full"
            src="images/img_bedsmedicaleq.png"
            alt="bedsmedicaleq"
          />
          <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-6 items-start justify-center my-[19px] w-auto sm:w-full">
              <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                  <Text
                    className="leading-[120.00%] max-w-[524px] md:max-w-full md:text-5xl text-[62px] text-white-A700"
                    size="txtMulishRomanExtraBold62WhiteA700"
                  >
                    We use half the space we build
                  </Text>
                </div>
              </div>
              <Text
                className="leading-[160.00%] max-w-[589px] md:max-w-full text-white-A700_cc text-xl"
                size="txtMulishRomanRegular20"
              >
                Connecting people or medically challenged individuals to the
                right hospitals both locally and internationally to receive the
                best possible Connecting people or medically challenged{" "}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-auto md:w-full">
          <div className="flex flex-col items-center justify-start md:px-5 w-[51%] md:w-full">
            <Img
              className="h-[598px] md:h-auto object-cover w-full"
              src="images/img_handsunrecogni.png"
              alt="handsunrecogni"
            />
          </div>
          <div className="bg-gray-100_01 flex flex-col items-center justify-start p-[95px] md:px-5 w-1/2 md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start mb-[51px] w-auto sm:w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                    size="txtMulishRomanBold32"
                  >
                    Founded in 2014
                  </Text>
                </div>
              </div>
              <Text
                className="leading-[190.00%] max-w-[452px] md:max-w-full text-base text-black-900_cc"
                size="txtMulishRomanRegular16Black900cc"
              >
                We looked for technology that could do this and found hundreds
                of products—stereoscopic, ultrasound, thermal, PIR, AIR, low-res
                cameras, wifi tracking, bluetooth, etc. We bought them all and
                experimented. We learned each technology had trade-offs—they
                were unreliable, inaccurate, expensive, invasive, inaccessible,
                high latency, and so on. We decided to build it ourselves.What
                began as a weekend project has become the better part of a
                decade working to build the standard platform for counting
                people. There’s so much left to do.
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-start justify-start max-w-[1240px] mt-[50px] mx-auto px-10 md:px-5 py-[100px] rounded-lg w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 w-auto"
              size="txtMulishRomanBold42"
            >
              Our principles
            </Text>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-64 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtMulishRomanBold24"
                      >
                        Question the standards
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[452px] md:max-w-full text-base text-black-900_cc"
                    size="txtMulishRomanRegular16Black900cc"
                  >
                    Connecting people or medically challenged individuals to the
                    right hospitals both locally and internationally to receive
                    the best possible Connecting people or medically challenged{" "}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtMulishRomanBold24"
                      >
                        The details matter
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[452px] md:max-w-full text-base text-black-900_cc"
                    size="txtMulishRomanRegular16Black900cc"
                  >
                    Connecting people or medically challenged individuals to the
                    right hospitals both locally and internationally to receive
                    the best possible Connecting people or medically challenged{" "}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtMulishRomanBold24"
                      >
                        Hiring is for everyone
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[452px] md:max-w-full text-base text-black-900_cc"
                    size="txtMulishRomanRegular16Black900cc"
                  >
                    Connecting people or medically challenged individuals to the
                    right hospitals both locally and internationally to receive
                    the best possible Connecting people or medically challenged{" "}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtMulishRomanBold24"
                      >
                        Start with simple
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[452px] md:max-w-full text-base text-black-900_cc"
                    size="txtMulishRomanRegular16Black900cc"
                  >
                    Connecting people or medically challenged individuals to the
                    right hospitals both locally and internationally to receive
                    the best possible Connecting people or medically challenged{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end p-[55px] md:px-10 sm:px-5 w-full">
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

export default AboutuspagePage;
