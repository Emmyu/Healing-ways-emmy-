import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const PrivacypolicypagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-black-900_0c border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-gray-100 h-[611px] w-full"></div>
        <Footer className="bg-blue_gray-900 flex gap-2.5 items-center justify-center mt-[1012px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default PrivacypolicypagePage;
