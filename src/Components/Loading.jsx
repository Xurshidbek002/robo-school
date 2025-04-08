import React from "react";
import { useTranslation } from "react-i18next";

const Loading = () => {
  const {t} = useTranslation();
  return (
    <div className="fixed inset-0 bg-[#141024]/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative w-50 h-50">
        <div className="absolute inset-2 rounded-full border-5 border-transparent border-t-red-600 border-r-red-600 animate-spin"></div>
        <div className="absolute inset-5 rounded-full border-5 border-transparent border-b-red-500 border-l-red-500 animate-spin animation-delay-200"></div>
        <div className="absolute inset-8 rounded-full border-5 border-transparent border-t-red-400 border-r-red-400 animate-spin animation-delay-400"></div>
        <div className="absolute inset-2 flex items-center justify-center">
          <span className="text-red-600 font-medium">{t("header.loding")}</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
