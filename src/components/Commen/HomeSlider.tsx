import React, { useRef, useState } from "react";
import { LockKeyhole, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Track from "../Commen/Track";
import SubscriptionModal from "../subscription/SubscriptionModal";
import { useAuthStore } from "@/stores/authStore";

const HomeSlider = ({ data, swiperRef }) => {
   const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] =
      useState(false);
   const { user } = useAuthStore();

   const groupItems = (array = []) => {
      const grouped = [];
      for (let i = 0; i < array.length; i += 2) {
         grouped.push(array.slice(i, i + 2));
      }
      return grouped;
   };

   const groupedItems = groupItems(data);

   return (
      <>
         <div className="mt-[54px] block ">
            <Swiper
               onSwiper={(swiper) => {
                  swiperRef.current = swiper;
               }}
               spaceBetween={22}
               slidesPerView={1}
               autoplay={{
                  delay: 1000,
               }}
               breakpoints={{
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                  1440: { slidesPerView: 3 },
               }}
            >
               {groupedItems.map((group, groupIndex) => (
                  <SwiperSlide>
                     <div className="flex-col flex gap-[22px] w-full">
                        {group.map((item, itemIndex) => (
                           <Track
                              item={item}
                              key={itemIndex}
                              needControls={false}
                              needVolumes={false}
                              classNames={"slider"}
                              subscriptionStatus={user.subscriptionStatus}
                              onLock={() => {
                                 setIsSubscriptionModalOpen(true);
                              }}
                           />
                        ))}
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <SubscriptionModal
            isSubscriptionModalOpen={isSubscriptionModalOpen}
            setIsSubscriptionModalOpen={setIsSubscriptionModalOpen}
         />
      </>
   );
};

export default HomeSlider;
