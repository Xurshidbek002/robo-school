import { useState } from "react";
import bgImg from "../assets/bgm.png";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export default function PricingSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `✨${t("pricing.form.success")}:\n${t(
      "pricing.form.name"
    )}: ${form.name}\n${t("pricing.form.phone")}: ${form.phone}\n${t(
      "pricing.form.email"
    )}: ${form.email}\n${t("pricing.packages.package")}: ${
      selectedPackage || t("pricing.packages.notSelected")
    }`;

    try {
      await fetch(
        `https://api.telegram.org/bot7861410527:AAEhCBGXK51lPWyStsfYyXVd3nLC5GKHNCw/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "6873538625",
            text: message,
          }),
        }
      );

      Swal.fire({
        title: t("pricing.form.success"),
        text: t("pricing.form.successMessage"),
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#D52027",
      });

      setForm({ name: "", phone: "", email: "" });
      setSelectedPackage("");
    } catch (error) {
      Swal.fire({
        title: t("pricing.form.error"),
        text: t("pricing.form.errorMessage"),
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#D52027",
      });
    }
  };

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
  };

  return (
    <div id="pricing" className="bg-white text-center pt-12 font-sans">
      <h2 className="text-3xl font-bold mb-8">{t("pricing.title")}</h2>
      <div className="flex justify-center flex-wrap gap-6 mb-12">
        <div
          className="bg-white text-black relative p-6 rounded-xl w-64 h-75 border border-gray-200 transition-all duration-500 hover:bg-gray-700 hover:text-white hover:scale-103 hover:shadow-lg cursor-pointer"
          onClick={() => handlePackageSelect("PRO")}
        >
          <h3 className="text-lg font-semibold mb-6">
            {t("pricing.packages.pro.title")}
          </h3>
          <p className="text-4xl font-bold">
            {t("pricing.packages.pro.price")}
          </p>
          <p className="text-sm mt-5">
            {t("pricing.packages.pro.description")}
          </p>
          <a
            href="#form"
            className="mt-6 absolute left-[22%] bottom-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
          >
            {t("pricing.packages.pro.button")}
          </a>
        </div>

        <div
          className="bg-white text-black relative p-6 rounded-xl w-64 h-75 border border-gray-200 transition-all duration-500 hover:bg-gray-700 hover:text-white hover:scale-103 hover:shadow-lg cursor-pointer"
          onClick={() => handlePackageSelect("ROBO")}
        >
          <h3 className="text-lg font-semibold mb-6">
            {t("pricing.packages.robo.title")}
          </h3>
          <p className="text-4xl font-bold">
            {t("pricing.packages.robo.price")}
          </p>
          <p className="text-sm mt-5">
            {t("pricing.packages.robo.description")}
          </p>
          <a
            href="#form"
            className="mt-6 absolute left-[22%] bottom-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
          >
            {t("pricing.packages.robo.button")}
          </a>
        </div>

        <div
          className="bg-white text-black relative p-6 rounded-xl w-64 h-75 border border-gray-200 transition-all duration-500 hover:bg-gray-700 hover:text-white hover:scale-103 hover:shadow-lg cursor-pointer"
          onClick={() => handlePackageSelect("PROG")}
        >
          <h3 className="text-lg font-semibold mb-6">
            {t("pricing.packages.prog.title")}
          </h3>
          <p className="text-4xl font-bold">
            {t("pricing.packages.prog.price")}
          </p>
          <p className="text-sm mt-5">
            {t("pricing.packages.prog.description")}
          </p>
          <a
            href="#form"
            className="mt-6 absolute left-[22%] bottom-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
          >
            {t("pricing.packages.prog.button")}
          </a>
        </div>
      </div>

      <div
        id="form"
        className="bg-[#D52027] text-white flex justify-center py-12 px-4 bg-cover bg-no-repeat bg-center relative"
      >
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="absolute w-ful"
        ></div>
        <div className="flex flex-col md:flex-row gap-20 z-2">
          <div className="text-left max-w-80">
            <h3 className="text-2xl font-bold mb-2">
              {t("pricing.discount.title")}
            </h3>
            <p className="mb-6">{t("pricing.discount.valid")}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("pricing.form.name")}
              className="max-w-90 p-2 rounded text-black focus:outline-none bg-white"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder={t("pricing.form.phone")}
              className="p-2 rounded text-black focus:outline-none bg-white"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("pricing.form.email")}
              className="p-2 rounded text-black focus:outline-none bg-white"
              required
            />
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
            >
              {t("pricing.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
