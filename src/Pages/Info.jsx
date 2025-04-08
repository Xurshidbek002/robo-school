import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

function Info() {
  const { t } = useTranslation();

  const AnimatedCounter = ({ end, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible(true); // Element ko‘rinadigan bo‘lsa, animatsiyani ishga tushurish
          }
        },
        {
          threshold: 0.5, // Elementning 50% ko‘rinadigan bo‘lishini talab qilamiz
        }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current); // Counter elementni kuzatish
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current); // Component unmount bo‘lsa, observerni to‘xtatish
        }
      };
    }, []);

    return (
      <h3 ref={counterRef} className="text-5xl text-red-500 font-medium">
        {isVisible && <CountUp start={0} end={end} duration={2} delay={delay} />}
      </h3>
    );
  };

  return (
    <div id="about" className="py-17">
      <div className="container">
        <h2 className="text-2xl md:text-4xl mb-10 max-w-[700px]">
          <span className="font-bold">Robo School</span>
          {t("info.title")}
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-around items-center">
          <div className="max-w-[300px] text-center md:text-left">
          <AnimatedCounter end={10} delay={1.5} />
          <p className="text-gray-800">{t("info.text1")}</p>
          </div>
          <div className="max-w-[300px] text-center md:text-left">
            <AnimatedCounter end={20} delay={1.5} />
            <p className="text-gray-800">{t("info.text2")}</p>
          </div>
          <div className="max-w-[300px] text-center md:text-left">
            <AnimatedCounter end={100} delay={1.5} />
            <p className="text-gray-800">{t("info.text3")}</p>
          </div>
          <div className="max-w-[300px] text-center md:text-left">
            <AnimatedCounter end={10000} delay={1.5} />
            <p className="text-gray-800">{t("info.text4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
