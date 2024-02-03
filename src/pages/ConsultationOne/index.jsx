import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ConsultationOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-black-900_0c border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-8 items-center justify-start mt-[100px] md:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
            <Img
              className="h-[273px] w-[273px]"
              src="images/img_httpslottief.svg"
              alt="httpslottief"
            />
            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-center w-auto md:w-full">
                <div className="flex flex-col items-center justify-center w-auto md:w-full">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-black-900 w-auto"
                    size="txtMulishRomanBold38"
                  >
                    Consultation booked successfully
                  </Text>
                </div>
              </div>
              <Text
                className="leading-[160.00%] max-w-[670px] md:max-w-full text-base text-black-900_cc text-center"
                size="txtMulishRomanRegular16Black900cc"
              >
                Connecting people or medically challenged individuals to the
                right hospitals both locally and internationally to receive the
                best possible Connecting people or medically challenged{" "}
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-sm w-[530px]"
            shape="round"
            color="blue_600"
            size="xs"
            variant="fill"
          >
            Back home
          </Button>
        </div>
        <Footer className="bg-blue_gray-900 flex gap-2.5 items-center justify-center mt-[184px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ConsultationOnePage;
