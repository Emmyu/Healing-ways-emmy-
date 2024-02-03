import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import ContactUsPageButton from "components/ContactUsPageButton";
import Footer from "components/Footer";
import Header from "components/Header";

const SerivicespageTourismPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-black-900_0c border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 md:h-[555px] h-[556px] md:px-5 relative w-full">
          <Img
            className="h-[555px] m-auto object-cover w-full"
            src="images/img_bedsmedicaleq_555x1440.png"
            alt="bedsmedicaleq"
          />
          <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-6 items-start justify-center my-[7px] w-auto sm:w-full">
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
              <ContactUsPageButton
                className="bg-blue-600 flex flex-col gap-1 h-[50px] md:h-auto items-center justify-start px-4 py-[7px] rounded-[10px] w-[272px]"
                submitbutton="Book a medical report consult"
              />
            </div>
          </div>
        </div>
        <div className="border border-blue_gray-900_33 border-solid flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-end max-w-[1240px] mt-20 mx-auto pt-0.5 px-0.5 md:px-5 rounded-[16px] w-full">
          <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[110.00%] max-w-[524px] md:max-w-full md:text-4xl sm:text-[34px] text-[38px] text-blue_gray-900"
                  size="txtMulishRomanExtraBold38"
                >
                  Review your state of PCI DSS compliance
                </Text>
                <Text
                  className="leading-[140.00%] max-w-[499px] md:max-w-full text-base text-blue_gray-900"
                  size="txtMulishRomanRegular16Bluegray900"
                >
                  Secureframe supports Level 1 merchants and service providers
                  who need a Report on Compliance (RoC), as well as
                  organizations that need to complete a PCI DSS SAQ.
                </Text>
              </div>
              <Line className="bg-blue_gray-900_19_01 h-px w-full" />
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtMulishRomanSemiBold18"
                >
                  Key benefits
                </Text>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <CheckBox
                      className="leading-[normal] text-base text-black-900 text-left"
                      inputClassName="mr-[5px]"
                      name="adequatecompreh_One"
                      id="adequatecompreh_One"
                      label="Adequate & comprehensive diagnosis"
                      size="xs"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] text-base text-black-900 text-left"
                      inputClassName="mr-[5px]"
                      name="weconnectyouto"
                      id="weconnectyouto"
                      label="We connect you to the right doctors for best treatment."
                      size="xs"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <CheckBox
                      className="leading-[normal] text-base text-black-900 text-left"
                      inputClassName="mr-[5px]"
                      name="over8yearsexper_One"
                      id="over8yearsexper_One"
                      label="over 8 years experience please add these to the list"
                      size="xs"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] text-base text-black-900 text-left"
                      inputClassName="mr-[5px]"
                      name="ateamofprofessi_One"
                      id="ateamofprofessi_One"
                      label="A team of professionals"
                      size="xs"
                    ></CheckBox>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
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
            </div>
          </div>
          <div className="bg-blue_gray-100_01 h-[532px] rounded-br-lg rounded-tr-lg w-[46%]"></div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[100px] w-auto md:w-full">
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
        <div className="flex flex-col gap-5 items-start justify-start max-w-[1240px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
              size="txtMulishRomanBold32"
            >
              Ready to get started?
            </Text>
            <Text
              className="leading-[140.00%] max-w-[499px] md:max-w-full text-base text-black-900_cc"
              size="txtMulishRomanRegular16Black900cc"
            >
              Secureframe supports Level 1 merchants and service providers who
              need a Report on Compliance (RoC), as well as organizations{" "}
            </Text>
          </div>
          <List
            className="flex flex-col gap-[17px] items-start w-auto"
            orientation="vertical"
          >
            <div className="sm:h-52 h-[189px] my-0 relative w-full">
              <div className="flex sm:flex-col flex-row gap-[17px] h-full items-start justify-center ml-8 mt-5 w-auto">
                <div className="bg-blue_gray-100_01 h-[75px] rounded-[37px] w-[75px]"></div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtMulishRomanSemiBold20Black900"
                  >
                    Ready to get started?
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[434px] md:max-w-full text-black-900_cc text-sm"
                    size="txtMulishRomanRegular14"
                  >
                    Secureframe supports Level 1 merchants and service providers
                    who need a Report on Compliance (RoC), as well as
                    organizations that need to complete a PCI DSS SAQ.
                  </Text>
                </div>
              </div>
              <div className="absolute border border-blue_gray-900_33 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-5 rounded-[10px] w-full">
                <div className="bg-blue_gray-100_01 h-[149px] mr-5 w-[17%]"></div>
              </div>
            </div>
            <div className="sm:h-52 h-[189px] my-0 relative w-full">
              <div className="flex sm:flex-col flex-row gap-[17px] h-full items-start justify-center ml-8 mt-5 w-auto">
                <div className="bg-blue_gray-100_01 h-[75px] rounded-[37px] w-[75px]"></div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtMulishRomanSemiBold20Black900"
                  >
                    Ready to get started?
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[434px] md:max-w-full text-black-900_cc text-sm"
                    size="txtMulishRomanRegular14"
                  >
                    Secureframe supports Level 1 merchants and service providers
                    who need a Report on Compliance (RoC), as well as
                    organizations that need to complete a PCI DSS SAQ.
                  </Text>
                </div>
              </div>
              <div className="absolute border border-blue_gray-900_33 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-5 rounded-[10px] w-full">
                <div className="bg-blue_gray-100_01 h-[149px] mr-5 w-[17%]"></div>
              </div>
            </div>
            <div className="sm:h-52 h-[189px] my-0 relative w-full">
              <div className="flex sm:flex-col flex-row gap-[17px] h-full items-start justify-center ml-8 mt-5 w-auto">
                <div className="bg-blue_gray-100_01 h-[75px] rounded-[37px] w-[75px]"></div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtMulishRomanSemiBold20Black900"
                  >
                    Ready to get started?
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[434px] md:max-w-full text-black-900_cc text-sm"
                    size="txtMulishRomanRegular14"
                  >
                    Secureframe supports Level 1 merchants and service providers
                    who need a Report on Compliance (RoC), as well as
                    organizations that need to complete a PCI DSS SAQ.
                  </Text>
                </div>
              </div>
              <div className="absolute border border-blue_gray-900_33 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-5 rounded-[10px] w-full">
                <div className="bg-blue_gray-100_01 h-[149px] mr-5 w-[17%]"></div>
              </div>
            </div>
            <div className="sm:h-52 h-[189px] my-0 relative w-full">
              <div className="flex sm:flex-col flex-row gap-[17px] h-full items-start justify-center ml-8 mt-5 w-auto">
                <div className="bg-blue_gray-100_01 h-[75px] rounded-[37px] w-[75px]"></div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtMulishRomanSemiBold20Black900"
                  >
                    Ready to get started?
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[434px] md:max-w-full text-black-900_cc text-sm"
                    size="txtMulishRomanRegular14"
                  >
                    Secureframe supports Level 1 merchants and service providers
                    who need a Report on Compliance (RoC), as well as
                    organizations that need to complete a PCI DSS SAQ.
                  </Text>
                </div>
              </div>
              <div className="absolute border border-blue_gray-900_33 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-5 rounded-[10px] w-full">
                <div className="bg-blue_gray-100_01 h-[149px] mr-5 w-[17%]"></div>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end mt-4 p-[55px] md:px-10 sm:px-5 w-full">
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

export default SerivicespageTourismPage;
