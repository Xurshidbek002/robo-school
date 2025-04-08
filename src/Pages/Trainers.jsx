import React, { useState } from "react";
import img1 from "../assets/tr-1.jpg";
import img2 from "../assets/tr-2.jpg";
import img3 from "../assets/tr-3.jpg";
import img4 from "../assets/tr-4.jpg";
import img5 from "../assets/tr-5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Modal from "../Components/Modal";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Trainers() {
  // Har bir tizim uchun alohida modal holati
  const [modals, setModals] = useState({
    irina: false,
    marina: false,
    maxim: false,
    konstantin: false,
    liza: false,
  });

  // Modalni ochish funksiyasi
  const openModal = (trainerKey) => {
    setModals({ ...modals, [trainerKey]: true });
  };

  // Modalni yopish funksiyasi
  const closeModal = (trainerKey) => {
    setModals({ ...modals, [trainerKey]: false });
  };
  const { t } = useTranslation();
  return (
    <div>
      <div className="px-5 container">
        <h1 className="text-[#141024] font-[600] text-3xl md:text-4xl lg:text-[50px]">
          {t("trainer.top")}
        </h1>
        <div className="mt-5">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5, // Mobil uchun (0px dan boshlab)
              },
              500: {
                slidesPerView: 2.5, // Mobil uchun (500px dan boshlab)
              },
              768: {
                slidesPerView: 3, // Planshetlar uchun (optional)
              },
              1024: {
                slidesPerView: 4, // Desktop uchun
              },
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="">
                <img
                  src={img1}
                  alt=""
                  className="w-60 h-80 object-cover rounded-2xl"
                />
                <div className="">
                  <h2 className="font-bold pb-2">{t("trainer.name1")}</h2>
                  <p className="text-sm pb-1">{t("trainer.text")}</p>
                  <button
                    onClick={() => openModal("irina")}
                    className="text-red-500 hover:text-red-400 cursor-pointer"
                  >
                    {t("trainer.btn")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src={img2}
                  alt=""
                  className="w-60 h-80 object-cover rounded-2xl"
                />
                <div className="">
                  <h2 className="font-bold pb-2">{t("trainer.name2")}</h2>
                  <p className="text-sm pb-1">{t("trainer.text")}</p>
                  <button
                    onClick={() => openModal("marina")}
                    className="text-red-500 hover:text-red-400 cursor-pointer"
                  >
                    {t("trainer.btn")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src={img3}
                  alt=""
                  className="w-60 h-80 object-cover rounded-2xl"
                />
                <div className="">
                  <h2 className="font-bold pb-2">{t("trainer.name3")}</h2>
                  <p className="text-sm pb-1">{t("trainer.text")}</p>
                  <button
                    onClick={() => openModal("maxim")}
                    className="text-red-500 hover:text-red-400 cursor-pointer"
                  >
                    {t("trainer.btn")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src={img4}
                  alt=""
                  className="w-60 h-80 object-cover rounded-2xl"
                />
                <div className="">
                  <h2 className="font-bold pb-2">{t("trainer.name4")}</h2>
                  <p className="text-sm pb-1">{t("trainer.text")}</p>
                  <button
                    onClick={() => openModal("konstantin")}
                    className="text-red-500 hover:text-red-400 cursor-pointer"
                  >
                    {t("trainer.btn")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src={img5}
                  alt=""
                  className="w-60 h-80 object-cover rounded-2xl"
                />
                <div className="">
                  <h2 className="font-bold pb-2">{t("trainer.name5")}</h2>
                  <p className="text-sm pb-1">{t("trainer.text")}</p>
                  <button
                    onClick={() => openModal("liza")}
                    className="text-red-500 hover:text-red-400 cursor-pointer"
                  >
                    {t("trainer.btn")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Modal uchun har bir tizimga alohida modal yaratish */}
          {modals.irina && (
            <Modal>
              <div className="px-5 ">
                <div className="bg-white p-4 rounded-xl w-full md:w-150 relative">
                  <button
                    onClick={() => closeModal("irina")}
                    className="absolute right-2 top-2"
                  >
                    <IoIosClose size={25} className="block md:hidden" />

                    <div className="hidden md:block">{t("trainer.btn2")}</div>
                  </button>
                  <div className="flex gap-4">
                    <img
                      src={img1}
                      alt=""
                      className="w-20 h-26 md:w-35 md:h-45 object-cover rounded-xl"
                    />
                    <div className="">
                      <h3 className="text-md md:text-xl font-bold">
                        {t("trainer.name1")}
                      </h3>
                      <p className="text-[8px] md:text-[13px] text-black/50">
                        {t("trainer.text")}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <FaFacebook className="text-2xl" />
                        <RiInstagramFill className="text-2xl" />
                      </div>
                    </div>
                  </div>
                  <select className="w-full mt-5 md:hidden focus:outline-none bg-red-500 py-1 px-4 text-white">
                    <option value="" className="">
                      {t("trainer.betwen1")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen2")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen3")}
                    </option>
                  </select>
                  <div className="hidden md:flex justify-between mt-4 md:pr-25 ">
                    <h4 className="text-red-500 text-[13px] md:text-[17px]">
                      {t("trainer.betwen1")}
                    </h4>
                    <h4 className=" text-[13px] md:text-[17px]">
                      {t("trainer.betwen2")}
                    </h4>
                    <h4 className="text-black/30 text-[13px] md:text-[17px]">
                      {t("trainer.betwen3")}
                    </h4>
                  </div>
                  <div className="md:pr-25 pt-5 h-50 overflow-y-scroll">
                    <p className="">{t("trainer.desc1")}</p>
                    <h2 className="my-5">{t("trainer.desc2")}</h2>
                    <p className="">{t("trainer.desc3")}</p>
                  </div>
                </div>
              </div>
            </Modal>
          )}

          {modals.marina && (
            <Modal>
              <div className="px-5 ">
                <div className="bg-white p-4 rounded-xl w-full md:w-150 relative">
                  <button
                    onClick={() => closeModal("marina")}
                    className="absolute right-2 top-2"
                  >
                    <IoIosClose size={25} className="block md:hidden" />

                    <div className="hidden md:block">{t("trainer.btn2")}</div>
                  </button>
                  <div className="flex gap-4">
                    <img
                      src={img2}
                      alt=""
                      className="w-20 h-26 md:w-35 md:h-45 object-cover rounded-xl"
                    />
                    <div className="">
                      <h3 className="text-md md:text-xl font-bold">
                        {t("trainer.name2")}
                      </h3>
                      <p className="text-[8px] md:text-[13px] text-black/50">
                        {t("trainer.text")}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <FaFacebook className="text-2xl" />
                        <RiInstagramFill className="text-2xl" />
                      </div>
                    </div>
                  </div>
                  <select className="w-full mt-5 md:hidden focus:outline-none bg-red-500 py-1 px-4 text-white">
                    <option value="" className="">
                      {t("trainer.betwen1")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen2")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen3")}
                    </option>
                  </select>
                  <div className="hidden md:flex justify-between mt-4 md:pr-25 ">
                    <h4 className="text-red-500 text-[13px] md:text-[17px]">
                      {t("trainer.betwen1")}
                    </h4>
                    <h4 className=" text-[13px] md:text-[17px]">
                      {t("trainer.betwen2")}
                    </h4>
                    <h4 className="text-black/30 text-[13px] md:text-[17px]">
                      {t("trainer.betwen3")}
                    </h4>
                  </div>
                  <div className="md:pr-25 pt-5 h-50 overflow-y-scroll">
                    <p className="">{t("trainer.desc1")}</p>
                    <h2 className="my-5">{t("trainer.desc2")}</h2>
                    <p className="">{t("trainer.desc3")}</p>
                  </div>
                </div>
              </div>
            </Modal>
          )}

          {modals.maxim && (
            <Modal>
              <div className="px-5 ">
                <div className="bg-white p-4 rounded-xl w-full md:w-150 relative">
                  <button
                    onClick={() => closeModal("maxim")}
                    className="absolute right-2 top-2"
                  >
                    <IoIosClose size={25} className="block md:hidden" />

                    <div className="hidden md:block">{t("trainer.btn2")}</div>
                  </button>
                  <div className="flex gap-4">
                    <img
                      src={img3}
                      alt=""
                      className="w-20 h-26 md:w-35 md:h-45 object-cover rounded-xl"
                    />
                    <div className="">
                      <h3 className="text-md md:text-xl font-bold">
                        {t("trainer.name3")}
                      </h3>
                      <p className="text-[8px] md:text-[13px] text-black/50">
                        {t("trainer.text")}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <FaFacebook className="text-2xl" />
                        <RiInstagramFill className="text-2xl" />
                      </div>
                    </div>
                  </div>
                  <select className="w-full mt-5 md:hidden focus:outline-none bg-red-500 py-1 px-4 text-white">
                    <option value="" className="">
                      {t("trainer.betwen1")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen2")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen3")}
                    </option>
                  </select>
                  <div className="hidden md:flex justify-between mt-4 md:pr-25 ">
                    <h4 className="text-red-500 text-[13px] md:text-[17px]">
                      {t("trainer.betwen1")}
                    </h4>
                    <h4 className=" text-[13px] md:text-[17px]">
                      {t("trainer.betwen2")}
                    </h4>
                    <h4 className="text-black/30 text-[13px] md:text-[17px]">
                      {t("trainer.betwen3")}
                    </h4>
                  </div>
                  <div className="md:pr-25 pt-5 h-50 overflow-y-scroll">
                    <p className="">{t("trainer.desc1")}</p>
                    <h2 className="my-5">{t("trainer.desc2")}</h2>
                    <p className="">{t("trainer.desc3")}</p>
                  </div>
                </div>
              </div>
            </Modal>
          )}

          {modals.konstantin && (
            <Modal>
              <div className="px-5 ">
                <div className="bg-white p-4 rounded-xl w-full md:w-150 relative">
                  <button
                    onClick={() => closeModal("konstantin")}
                    className="absolute right-2 top-2"
                  >
                    <IoIosClose size={25} className="block md:hidden" />

                    <div className="hidden md:block">{t("trainer.btn2")}</div>
                  </button>
                  <div className="flex gap-4">
                    <img
                      src={img4}
                      alt=""
                      className="w-20 h-26 md:w-35 md:h-45 object-cover rounded-xl"
                    />
                    <div className="">
                      <h3 className="text-md md:text-xl font-bold">
                        {t("trainer.name4")}
                      </h3>
                      <p className="text-[8px] md:text-[13px] text-black/50">
                        {t("trainer.text")}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <FaFacebook className="text-2xl" />
                        <RiInstagramFill className="text-2xl" />
                      </div>
                    </div>
                  </div>
                  <select className="w-full mt-5 md:hidden focus:outline-none bg-red-500 py-1 px-4 text-white">
                    <option value="" className="">
                      {t("trainer.betwen1")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen2")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen3")}
                    </option>
                  </select>
                  <div className="hidden md:flex justify-between mt-4 md:pr-25 ">
                    <h4 className="text-red-500 text-[13px] md:text-[17px]">
                      {t("trainer.betwen1")}
                    </h4>
                    <h4 className=" text-[13px] md:text-[17px]">
                      {t("trainer.betwen2")}
                    </h4>
                    <h4 className="text-black/30 text-[13px] md:text-[17px]">
                      {t("trainer.betwen3")}
                    </h4>
                  </div>
                  <div className="md:pr-25 pt-5 h-50 overflow-y-scroll">
                    <p className="">{t("trainer.desc1")}</p>
                    <h2 className="my-5">{t("trainer.desc2")}</h2>
                    <p className="">{t("trainer.desc3")}</p>
                  </div>
                </div>
              </div>
            </Modal>
          )}

          {modals.liza && (
            <Modal>
              <div className="px-5 ">
                <div className="bg-white p-4 rounded-xl w-full md:w-150 relative">
                  <button
                    onClick={() => closeModal("liza")}
                    className="absolute right-2 top-2"
                  >
                    <IoIosClose size={25} className="block md:hidden" />

                    <div className="hidden md:block">{t("trainer.btn2")}</div>
                  </button>
                  <div className="flex gap-4">
                    <img
                      src={img5}
                      alt=""
                      className="w-20 h-26 md:w-35 md:h-45 object-cover rounded-xl"
                    />
                    <div className="">
                      <h3 className="text-md md:text-xl font-bold">
                        {t("trainer.name5")}
                      </h3>
                      <p className="text-[8px] md:text-[13px] text-black/50">
                        {t("trainer.text")}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <FaFacebook className="text-2xl" />
                        <RiInstagramFill className="text-2xl" />
                      </div>
                    </div>
                  </div>
                  <select className="w-full mt-5 md:hidden focus:outline-none bg-red-500 py-1 px-4 text-white">
                    <option value="" className="">
                      {t("trainer.betwen1")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen2")}
                    </option>
                    <option value="" className="">
                      {t("trainer.betwen3")}
                    </option>
                  </select>
                  <div className="hidden md:flex justify-between mt-4 md:pr-25 ">
                    <h4 className="text-red-500 text-[13px] md:text-[17px]">
                      {t("trainer.betwen1")}
                    </h4>
                    <h4 className=" text-[13px] md:text-[17px]">
                      {t("trainer.betwen2")}
                    </h4>
                    <h4 className="text-black/30 text-[13px] md:text-[17px]">
                      {t("trainer.betwen3")}
                    </h4>
                  </div>
                  <div className="md:pr-25 pt-5 h-50 overflow-y-scroll">
                    <p className="">{t("trainer.desc1")}</p>
                    <h2 className="my-5">{t("trainer.desc2")}</h2>
                    <p className="">{t("trainer.desc3")}</p>
                  </div>
                </div>
              </div>
            </Modal>
          )}

          {/* Navigatsiya tugmalari pastga joylashtirilgan */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="custom-prev text-white bg-gray-800 rounded-full flex items-center justify-center p-[3px]">
              <GrFormPrevious />
            </button>
            <button className="custom-next text-white bg-gray-800 rounded-full flex items-center justify-center p-[3px]">
              <GrFormNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
