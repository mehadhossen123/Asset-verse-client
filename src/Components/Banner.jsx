import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import slides from "./SlideData";


const Banner = () => {
  return (
    <div className="h-[500px] ">
      <Swiper
        direction="horizontal"
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
       
        pagination={{ clickable: true }}
        modules={[ Pagination, Autoplay]}
        className="h-[500px]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <section className="h-[500px] flex items-center bg-slate-900 text-white px-6">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-20  gap-10 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                    {slide.title} <br /> Empower Your Workforce.
                  </h1>
                  <p className="mt-6 text-gray-300 max-w-lg">{slide.desc}</p>
                </motion.div>

                {/* Right Image */}
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={slide.image} alt={slide.title} className="w-full " />
                </motion.div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
