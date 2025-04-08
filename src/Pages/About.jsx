import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GoInfo } from "react-icons/go";

function About() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { t } = useTranslation();
  return (
    <div className="bg-black/5 py-20">
      <div className="container">
        <h1 className=" text-[25px] md:text-[50px] font-[700]">
          {t("about.title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div className="">
            <h3 className=" text-[18px] md:text-[24px] font-[600]">
              {t("about.text1")}
            </h3>
            <p className="text-[#141024B2] text-sm md:text-[16px]">{t("about.desc1")}</p>
          </div>
          <div className="">
            <h3 className=" text-[18px] md:text-[24px] font-[600]">
              {t("about.text2")}
            </h3>
            <p className="text-[#141024B2] text-sm md:text-[16px]">{t("about.desc2")}</p>
          </div>
          <div className="">
            <div className="flex relative items-center gap-2">
              <h3 className=" text-[18px] md:text-[24px] font-[600]">
                {t("about.text3")}
              </h3>
              <button onClick={toggleModal} className="">
                <GoInfo size={20} />
                {modal && (
                  <div className="absolute w-60 bg-white rounded-md shadow-md top-[-20px] left-10">
                    {t("about.info")}
                  </div>
                )}
              </button>
            </div>
            <p className="text-[#141024B2] text-sm md:text-[16px]">{t("about.desc3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
