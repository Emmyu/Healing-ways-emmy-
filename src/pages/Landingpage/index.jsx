import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";

const aboutHealingWaysOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whatMakesHealingDifferentFromOtherPlatformsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whatMakesHealingDifferentFromOtherPlatformsOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whatMakesHealingDifferentFromOtherPlatformsOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whatMakesHealingDifferentFromOtherPlatformsOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whatMakesHealingDifferentFromOtherPlatformsOptionsList4 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whatMakesHealingDifferentFromOtherPlatformsOptionsList5 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LandingpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto pb-[76px] w-full">
        <Header className="bg-white-A700 border-b border-black-900_0c border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-gray-100 flex md:flex-col flex-row gap-10 items-start justify-end md:pl-10 sm:pl-5 pl-[100px] w-full">
          <div className="flex md:flex-1 flex-col gap-6 items-start justify-start md:mt-0 mt-[150px] w-auto md:w-full">
            <Text
              className="leading-[100.00%] max-w-[602px] md:max-w-full md:text-5xl text-[62px] text-black-900"
              size="txtMulishRomanExtraBold62"
            >
              Your compass to a healthy life
            </Text>
            <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <Text
                className="max-w-[557px] md:max-w-full text-black-900_b2 text-lg"
                size="txtMulishRomanRegular18"
              >
                Connecting people or medically challenged individuals to the
                right hospitals both locally and internationally to receive the
                best possible care geared towards restoring health.
              </Text>
              <Button
                className="common-pointer cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[227px]"
                onClick={() => navigate("/consultation")}
                shape="round"
                color="blue_600"
                size="xs"
                variant="fill"
              >
                Book a consultation
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
            <Img
              className="h-[634px] md:h-auto object-cover w-full"
              src="images/img_pexelstimamir.png"
              alt="pexelstimamir"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-start justify-between p-[13px] w-full">
          <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start md:ml-[0] ml-[87px] md:mt-0 mt-[106px] md:px-5 w-auto sm:w-full">
            <Text
              className="leading-[100.00%] max-w-[517px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
              size="txtMulishRomanBold42"
            >
              Your compass to a healthy life
            </Text>
            <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <Text
                className="max-w-[527px] md:max-w-full text-base text-black-900"
                size="txtMulishRomanRegular16"
              >
                Connecting people or medically challenged individuals to the
                right hospitals both locally and internationally to receive the
                best possible care geared towards restoring health.
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
                      name="ateamofprofessi_One"
                      id="ateamofprofessi_One"
                      label="A team of professionals"
                      size="xs"
                    ></CheckBox>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-auto sm:w-full">
                  <Button
                    className="common-pointer cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[227px]"
                    onClick={() => navigate("/consultation")}
                    shape="round"
                    color="blue_600"
                    size="xs"
                    variant="fill"
                  >
                    Book a consultation
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[227px]"
                    onClick={() => navigate("/aboutuspage")}
                    shape="round"
                    color="blue_600_19"
                    size="xs"
                    variant="fill"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[510px] h-[536px] mr-[87px] md:mt-0 mt-[68px] md:px-5 relative w-[36%] md:w-full">
            <div className="absolute bg-blue_gray-900 bottom-[0] h-[510px] left-[0] w-[94%]"></div>
            <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[94%]">
              <Img
                className="h-[510px] md:h-auto object-cover rounded-bl rounded-br w-full"
                src="images/img_backgroundblac.png"
                alt="backgroundblac"
              />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start p-[45px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 w-auto"
              size="txtMulishRomanBold42"
            >
              Our Services
            </Text>
            <Text
              className="max-w-[517px] md:max-w-full text-base text-black-900 text-center"
              size="txtMulishRomanRegular16"
            >
              Connecting people or medically challenged individuals to the right
              hospitals both locally and internationally to receive the best
              possible .
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1240px] mb-7 mx-auto w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-100 flex sm:flex-1 flex-col items-start justify-start px-[19px] py-6 rounded w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Button
                  className="flex h-16 items-center justify-center w-16"
                  shape="circle"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </Button>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-center w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtMulishRomanBold24"
                    >
                      Medical Report Translation
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[362px] md:max-w-full text-black-900_cc text-sm"
                      size="txtMulishRomanRegular14"
                    >
                      Connecting people or medically challenged individuals to
                      the right hospitals both locally and internationally to
                      receive the best possible Connecting people or medically
                      challenged individuals to the right hospitals both locally
                      and internationally to receive the best possible
                      Connecting people or medically challenged individuals to
                      the right hospitals both locally and internationally to
                      receive the best possible .
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="common-pointer text-blue-600 text-center text-xl w-auto"
                      size="txtMulishRomanSemiBold20"
                      onClick={() => navigate("/consultation")}
                    >
                      Learn more
                    </Text>
                    <Img
                      className="common-pointer h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                      onClick={() => navigate("/consultation")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 flex sm:flex-1 flex-col items-start justify-start px-[19px] py-6 rounded w-auto sm:w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                <Button
                  className="flex h-16 items-center justify-center w-16"
                  shape="circle"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </Button>
                <div className="flex flex-col md:gap-10 gap-[82px] items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-center w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtMulishRomanBold24"
                    >
                      Medical Consultancy/Tourism
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[362px] md:max-w-full text-black-900_cc text-sm"
                      size="txtMulishRomanRegular14"
                    >
                      Connecting people or medically challenged individuals to
                      the right hospitals both locally and internationally to
                      receive the best possible Connecting people or medically
                      challenged individuals to the right hospitals both locally
                      and internationally to receive
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="common-pointer text-blue-600 text-center text-xl w-auto"
                      size="txtMulishRomanSemiBold20"
                      onClick={() => navigate("/consultation")}
                    >
                      Learn more
                    </Text>
                    <Img
                      className="common-pointer h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                      onClick={() => navigate("/consultation")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 flex sm:flex-1 flex-col items-start justify-start px-[19px] py-6 rounded w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Button
                  className="flex h-16 items-center justify-center w-16"
                  shape="circle"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </Button>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-center w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtMulishRomanBold24"
                    >
                      Accommodation and logistics
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[362px] md:max-w-full text-black-900_cc text-sm"
                      size="txtMulishRomanRegular14"
                    >
                      Connecting people or medically challenged individuals to
                      the right hospitals both locally and internationally to
                      receive the best possible Connecting people or medically
                      challenged individuals to the right hospitals both locally
                      and internationally to receive the best possible
                      Connecting people or medically challenged individuals to
                      the right hospitals both locally and internationally to
                      receive the best possible .
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="common-pointer text-blue-600 text-center text-xl w-auto"
                      size="txtMulishRomanSemiBold20"
                      onClick={() => navigate("/consultation")}
                    >
                      Learn more
                    </Text>
                    <Img
                      className="common-pointer h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                      onClick={() => navigate("/consultation")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end p-[33px] sm:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1240px] mt-1.5 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 w-auto"
                size="txtMulishRomanBold42"
              >
                Why choose us
              </Text>
              <Text
                className="max-w-[517px] md:max-w-full text-base text-black-900 text-center"
                size="txtMulishRomanRegular16"
              >
                Connecting people or medically challenged individuals to the
                right hospitals both locally and internationally to receive the
                best possible .
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start md:mt-0 mt-[9px] w-auto sm:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="font-bold text-black-900 text-left text-xl"
                    inputClassName="mr-[5px]"
                    name="safelycollabora_One"
                    id="safelycollabora_One"
                    label="Safely collaborate with others"
                  ></CheckBox>
                  <Text
                    className="max-w-[517px] md:max-w-full text-base text-black-900_cc"
                    size="txtMulishRomanRegular16Black900cc"
                  >
                    Connecting people or medically challenged individuals to the
                    right hospitals both locally and internationally to receive
                    the best possible .
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="font-bold text-black-900 text-left text-xl"
                    inputClassName="mr-[5px]"
                    name="safelycollabora_Three"
                    id="safelycollabora_Three"
                    label="Safely collaborate with others"
                  ></CheckBox>
                  <Text
                    className="max-w-[517px] md:max-w-full text-base text-black-900_cc"
                    size="txtMulishRomanRegular16Black900cc"
                  >
                    Connecting people or medically challenged individuals to the
                    right hospitals both locally and internationally to receive
                    the best possible .
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="font-bold text-black-900 text-left text-xl"
                    inputClassName="mr-[5px]"
                    name="safelycollabora_Five"
                    id="safelycollabora_Five"
                    label="Safely collaborate with others"
                  ></CheckBox>
                  <Text
                    className="max-w-[517px] md:max-w-full text-base text-black-900_cc"
                    size="txtMulishRomanRegular16Black900cc"
                  >
                    Connecting people or medically challenged individuals to the
                    right hospitals both locally and internationally to receive
                    the best possible .
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="font-bold text-black-900 text-left text-xl"
                    inputClassName="mr-[5px]"
                    name="safelycollabora_Seven"
                    id="safelycollabora_Seven"
                    label="Safely collaborate with others"
                  ></CheckBox>
                  <Text
                    className="max-w-[517px] md:max-w-full text-base text-black-900"
                    size="txtMulishRomanRegular16"
                  >
                    Connecting people or medically challenged individuals to the
                    right hospitals both locally and internationally to receive
                    the best possible .
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-auto sm:w-full">
                  <Button
                    className="common-pointer cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[227px]"
                    onClick={() => navigate("/consultation")}
                    shape="round"
                    color="blue_600"
                    size="xs"
                    variant="fill"
                  >
                    Book a consultation
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[227px]"
                    onClick={() => navigate("/consultation")}
                    shape="round"
                    color="blue_600_19"
                    size="xs"
                    variant="fill"
                  >
                    Learn more
                  </Button>
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
        </div>
        <div className="bg-gray-100_01 flex flex-col items-center justify-start p-[62px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[197px] items-start justify-between max-w-[1240px] mx-auto w-full">
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <a href="javascript:" className="text-base text-blue-600 w-auto">
                <Text size="txtMulishRomanBold16">SUPPORT</Text>
              </a>
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 w-auto"
                size="txtMulishRomanBold42"
              >
                Frequently asked questions
              </Text>
              <Text
                className="leading-[100.00%] max-w-[370px] md:max-w-full text-base text-black-900"
                size="txtMulishRomanRegular16"
              >
                We won’t leave you wondering; all your questions - answered
                below.
              </Text>
              <Button
                className="common-pointer cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[227px]"
                onClick={() => navigate("/contactuspage")}
                shape="round"
                color="blue_600"
                size="xs"
                variant="fill"
              >
                Get in touch
              </Button>
            </div>
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <SelectBox
                  className="font-bold text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_blue_gray_900_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame1000002609"
                  options={aboutHealingWaysOptionsList}
                  isSearchable={false}
                  placeholder="About Healing ways"
                />
                <Line className="bg-black-900_33 h-px w-full" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <SelectBox
                  className="font-bold text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_blue_gray_900_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame1000002611"
                  options={
                    whatMakesHealingDifferentFromOtherPlatformsOptionsList
                  }
                  isSearchable={false}
                  placeholder="What makes healing different from other platforms?"
                />
                <Line className="bg-black-900_33 h-px w-full" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <SelectBox
                  className="font-bold text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_blue_gray_900_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame1000002611_One"
                  options={
                    whatMakesHealingDifferentFromOtherPlatformsOptionsList1
                  }
                  isSearchable={false}
                  placeholder="What makes healing different from other platforms?"
                />
                <Line className="bg-black-900_33 h-px w-full" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <SelectBox
                  className="font-bold text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_blue_gray_900_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame1000002611_Two"
                  options={
                    whatMakesHealingDifferentFromOtherPlatformsOptionsList2
                  }
                  isSearchable={false}
                  placeholder="What makes healing different from other platforms?"
                />
                <Line className="bg-black-900_33 h-px w-full" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <SelectBox
                  className="font-bold text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_blue_gray_900_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame1000002611_Three"
                  options={
                    whatMakesHealingDifferentFromOtherPlatformsOptionsList3
                  }
                  isSearchable={false}
                  placeholder="What makes healing different from other platforms?"
                />
                <Line className="bg-black-900_33 h-px w-full" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <SelectBox
                  className="font-bold text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_blue_gray_900_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame1000002611_Four"
                  options={
                    whatMakesHealingDifferentFromOtherPlatformsOptionsList4
                  }
                  isSearchable={false}
                  placeholder="What makes healing different from other platforms?"
                />
                <Line className="bg-black-900_33 h-px w-full" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <SelectBox
                  className="font-bold text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_blue_gray_900_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame1000002611_Five"
                  options={
                    whatMakesHealingDifferentFromOtherPlatformsOptionsList5
                  }
                  isSearchable={false}
                  placeholder="What makes healing different from other platforms?"
                />
                <Line className="bg-black-900_33 h-px w-full" />
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
                  className="common-pointer cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[227px]"
                  onClick={() => navigate("/consultation")}
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
        <footer className="bg-blue_gray-900 flex items-center justify-center md:px-5 w-full">
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
                  right hospitals both locally and internationally to receive
                  the best possible care geared towards restoring health.
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
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_95"
                      >
                        <Text size="txtMulishRomanRegular16WhiteA70095">
                          Testimonial
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_95"
                      >
                        <Text size="txtMulishRomanRegular16WhiteA70095">
                          Services
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_95"
                      >
                        <Text size="txtMulishRomanRegular16WhiteA70095">
                          About us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_95"
                      >
                        <Text size="txtMulishRomanRegular16WhiteA70095">
                          Contact us
                        </Text>
                      </a>
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
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_95"
                      >
                        <Text size="txtMulishRomanRegular16WhiteA70095">
                          Privacy policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_95"
                      >
                        <Text size="txtMulishRomanRegular16WhiteA70095">
                          Terms of use
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_95"
                      >
                        <Text size="txtMulishRomanRegular16WhiteA70095">
                          Data protection policy
                        </Text>
                      </a>
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
      </div>
    </>
  );
};

export default LandingpagePage;
