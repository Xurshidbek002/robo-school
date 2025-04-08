import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; //bu bo'lmasa ishlamaydi!!!
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMenu3 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-[#141024] py-6">
      <div className="container flex justify-between items-center text-white">
        <a href="#" className="text-2xl font-bold">
          ROBO.SCHOOL
        </a>
        <nav className="hidden md:flex gap-5 items-center">
          <a href="#about" className="">
            {t("header.nav1")}
          </a>
          <a href="#coaches" className="">
            {t("header.nav2")}
          </a>
          <a href="#pricing" className="">
            {t("header.nav3")}
          </a>
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e?.target?.value)}
            className="focus:outline-none"
          >
            <option className="text-black" value="uz">
              Uz
            </option>
            <option className="text-black" value="eng">
              Eng
            </option>
            <option className="text-black" value="ru">
              Ru
            </option>
          </select>
        </nav>
        <div className="flex items-center gap-5">
          <a href="tel:+78000001122" className="">
            <span className="flex md:hidden bg-[#19132e] p-2 rounded-xl border-t border-l border-r border-[#ffffff34]">
              <BsFillTelephoneFill size={23} />
            </span>
            <span className="hidden md:block text-xl font-bold">+7 800 000 11 22</span>
          </a>
          <button
            onClick={toggleModal}
            className="md:hidden bg-[#19132e] p-2 rounded-xl border-t border-l border-r border-[#ffffff34]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={modal ? "close" : "menu"}
                initial={{ rotate: -180, opacity: 0, scale: 0.3 }}
                animate={{ rotate: 0, opacity: 20, scale: 1.5 }}
                exit={{ rotate: 180, opacity: 0, scale: 0.2 }}
                transition={{ duration: 0.1 }}
              >
                {modal ? <IoClose size={23} /> : <TbMenu3 size={23} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
      {modal && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="bg-[#141024] md:hidden h-[100vh] flex flex-col gap-5 text-center py-5"
        >
          <nav className="flex mt-50 flex-col items-center gap-7 text-center">
            <a href="#about" className=" text-3xl font-bold text-white">
              {t("header.nav1")}
            </a>
            <a href="#coaches" className=" text-3xl font-bold text-white">
              {t("header.nav2")}
            </a>
            <a href="#pricing" className=" text-3xl font-bold text-white">
              {t("header.nav3")}
            </a>
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e?.target?.value)}
              className="focus:outline-none text-3xl font-bold text-white"
            >
              <option className="text-black" value="uz">
                Uz
              </option>
              <option className="text-black" value="eng">
                Eng
              </option>
              <option className="text-black" value="ru">
                Ru
              </option>
            </select>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export default Header;
