import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Text
          className="common-pointer mb-[39px] md:ml-[0] ml-[100px] md:mt-0 mt-[34px] text-teal-800 text-xl"
          size="txtCeoruseRegular20Teal800"
          onClick={() => navigate("/landingpage")}
        >
          Healing ways
        </Text>
        <ul className="flex sm:flex-col flex-row gap-[41px] sm:hidden items-start justify-start md:ml-[0] ml-[213px] md:mt-0 my-8 w-auto sm:w-full common-row-list">
          <li>
            <Text
              className="common-pointer text-base text-black-900 text-center"
              size="txtMulishRomanMedium16"
              onClick={() => navigate("/landingpage")}
            >
              Home
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-black-900 text-center"
              size="txtMulishRomanMedium16"
            >
              About us
            </Text>
          </li>
          <li>
            <div className="flex flex-row gap-2 items-start justify-start">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtMulishRomanMedium16"
              >
                Services
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </li>
          <li>
            <Text
              className="common-pointer text-base text-black-900 text-center"
              size="txtMulishRomanMedium16"
              onClick={() => navigate("/contactuspage")}
            >
              Contact us
            </Text>
          </li>
        </ul>
        <Button
          className="common-pointer cursor-pointer font-mulish font-semibold h-[50px] leading-[normal] md:ml-[0] ml-[188px] mr-[100px] md:mt-0 my-5 text-center text-sm w-[227px]"
          onClick={() => navigate("/consultation")}
          shape="round"
          color="blue_600"
          size="xs"
          variant="fill"
        >
          Book an appointment
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
