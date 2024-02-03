import React from "react";

import { Button, CheckBox, Img, Line, Text } from "components";
import ContactUsPageButton from "components/ContactUsPageButton";
import Footer from "components/Footer";
import Header from "components/Header";

const SerivicespageReportTranslationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto pb-[25px] w-full">
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
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="bg-gray-100_01 flex flex-col items-center justify-start p-[65px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[151px] items-center justify-between max-w-[1240px] mx-auto w-full">
              <div className="flex sm:flex-1 flex-col items-center justify-center w-auto sm:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="leading-[130.00%] max-w-[583px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                    size="txtMulishRomanBold42"
                  >
                    Save more on your medical procedures and overall expenses
                    with healing ways
                  </Text>
                  <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="max-w-[527px] md:max-w-full text-base text-black-900"
                      size="txtMulishRomanRegular16"
                    >
                      We are committed to making your medical tourism journey a
                      success, from initial consultation to post-treatment
                      follow-up
                    </Text>
                    <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
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
                </div>
              </div>
              <div className="md:h-[510px] h-[530px] relative w-[41%] md:w-full">
                <div className="absolute bg-blue_gray-900 h-[510px] inset-y-[0] left-[0] my-auto w-[95%]"></div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[95%]">
                  <Img
                    className="h-[510px] md:h-auto object-cover rounded-bl rounded-br w-full"
                    src="images/img_medicalspecial.png"
                    alt="medicalspecial"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-end p-[67px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[158px] items-center justify-between max-w-[1240px] mt-[9px] mx-auto w-full">
              <div className="md:h-[510px] h-[536px] relative w-[42%] md:w-full">
                <div className="absolute bg-blue_gray-900 bottom-[0] h-[510px] left-[0] w-[94%]"></div>
                <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[94%]">
                  <Img
                    className="h-[510px] md:h-auto object-cover rounded-bl rounded-br w-full"
                    src="images/img_backgroundblac.png"
                    alt="backgroundblac"
                  />
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[130.00%] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtMulishRomanBold42"
                >
                  <>
                    Experience Affordable, <br />
                    World-Class Medical Care{" "}
                  </>
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="max-w-[573px] md:max-w-full text-base text-black-900"
                    size="txtMulishRomanRegular16"
                  >
                    We are committed to making your medical tourism journey a
                    success, from initial consultation to post-treatment
                    follow-up. Let us help you achieve your healthcare goals
                    while exploring the world and expanding your horizons.
                  </Text>
                  <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <CheckBox
                          className="leading-[normal] text-base text-black-900 text-left"
                          inputClassName="mr-[5px]"
                          name="8yearsexperienc_One"
                          id="8yearsexperienc_One"
                          label="8 years experience"
                          size="xs"
                        ></CheckBox>
                        <CheckBox
                          className="leading-[normal] text-base text-black-900 text-left"
                          inputClassName="mr-[5px]"
                          name="over30hospitals_One"
                          id="over30hospitals_One"
                          label="Over 30 hospitals around the world"
                          size="xs"
                        ></CheckBox>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <CheckBox
                          className="leading-[normal] text-base text-black-900 text-left"
                          inputClassName="mr-[5px]"
                          name="247medicalservi_One"
                          id="247medicalservi_One"
                          label="24/7 Medical services"
                          size="xs"
                        ></CheckBox>
                        <CheckBox
                          className="leading-[normal] text-base text-black-900 text-left"
                          inputClassName="mr-[5px]"
                          name="ateamofprofessi_Three"
                          id="ateamofprofessi_Three"
                          label="A team of professionals"
                          size="xs"
                        ></CheckBox>
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

export default SerivicespageReportTranslationPage;
