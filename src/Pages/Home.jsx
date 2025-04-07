import React from "react";
import { useTranslation } from "react-i18next";
import img from "../assets/home-img.png";

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[#141024] ">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-center justify-start gap-15 h-[90vh] md:h-auto">
          <div className="flex flex-col items-center gap-5 md:pl-20 text-center md:items-start md:max-w-[500px] pt-15">
            <h1 data-aos="fade-down" className="text-3xl md:text-5xl font-bold md:text-left text-white ">ROBO SCHOOL</h1>
            <p data-aos="flip-up" className="max-w-[80%] text-md md:text-left text-gray-400 ">
              {t("home.text")}
            </p>
            <a href="#form" className="hidden md:block bg-red-500 px-6 text-xl font-bold text-white py-2 rounded-md">
              {t("home.link")}
            </a>
          </div>
          <div data-aos="fade-up" className="relative flex justify-center md:justify-start">
            <img src={img} alt="" className=" w-[80%]"/>
            <a href="#form" className="block md:hidden absolute bottom-0 left-[50%] translate-x-[-50%] bg-red-500 w-[80%] py-5 text-xl font-bold text-white rounded-lg text-center"> 
              {t("home.link")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
