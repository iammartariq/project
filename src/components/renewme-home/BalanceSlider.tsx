import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import HomeTitle from "../Commen/HomeTitle";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchMeditationAlbums } from "../../services/meditation-albums-service";

const BalanceSlider = () => {
   const swiperRef = useRef(null);
   const [balanceData, setBalanceData] = useState([]);
   useEffect(() => {
      async function fetchData() {
         await fetchMeditationAlbums(
            "RenewMe",
            "Living in Balance",
            1,
            10
         ).then((result) => {
            if (result.collection) {
               setBalanceData(result.collection);
            }
         });
      }
      fetchData();
   }, []);
   return (
      <div className=" gap-[39px]">
         <HomeTitle text="Balance" link="balance" swiperRef={swiperRef} />

         <div className="mt-[39px]">
            <Swiper
               className="mySwiper"
               spaceBetween={20}
               slidesPerView={3.5}
               grabCursor={true}
               breakpoints={{
                  320: { slidesPerView: 2.3 },
                  768: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 2.5 },
                  1440: { slidesPerView: 3.5 },
               }}
               onSwiper={(swiper) => {
                  swiperRef.current = swiper;
               }}
            >
               {balanceData.map((data, index) => (
                  <SwiperSlide className="w-full" key={index}>
                     <Link
                        href={`/${encodeURIComponent(data.slug)}`}
                        key={index}
                     >
                        <Image
                           src={data.coverSmallLandscape}
                           alt="Balance1"
                           loading="lazy"
                           width={368}
                           height={267}
                           className="md:w-[368px] md:h-[267px] w-auto h-auto rounded-2xl"
                        />
                        <p className="mt-[25px] leading-[29px] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[15px]">
                           {data.title}
                        </p>
                     </Link>
                  </SwiperSlide>
               ))}
               ;
            </Swiper>
         </div>
      </div>
   );
};

export default BalanceSlider;
