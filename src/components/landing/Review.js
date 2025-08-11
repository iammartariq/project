import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const TESTIMONIALS = [
   {
      author: "Mark Victor Hanson",
      title: `Author of “Chicken Soup for the Soul”`,
      place: "",
      message: `Dr. Lisa Palmer has emerged as an architect of breakthroughs. She brilliantly unearths
      intimate and precious core characteristics of your individual blueprint into believing
      all things are possible`,
      image: "/assets/images/landing/svg/t-qoute-gray.svg",
      BgColor: "#F2EAF2",
      top: "14px"
   },
   {
      author: "Daniel",
      title: "",
      place: "New York",
      message: `I feel Dr. Palmer's soulful energy coming through RenewMe. There is so much truth and
      honesty in the audio tracks. It speaks to me, and is just what I needed to hear at this
      time in my life!`,
      image: "/assets/images/landing/svg/t-qoute.svg",
      BgColor: "#ECF4E8",
      top: "42px"
   },
   {
      author: "Lynn",
      title: "",
      place: "Florida",
      message: `So far, RenewMe is awesome! It has a unique quality. There is a great honesty that
      comes across. It speaks to you. I trust Dr. Palmer's work, love the stories, and love
      the sound of Dr. Palmer's voice!`,
      image: "/assets/images/landing/svg/t-qoute-gray.svg",
      BgColor: "#FFFFFF",
      top: "14px"
   },
   {
      author: "Laura",
      title: "",
      place: "Pennsylvania",
      message: `Dr. Palmer's voice is wonderful and very relaxing! I love listening and I learn so much
      that helps me improve my self-esteem. I am coping better in life in general and am more
      productive!`,
      image: "/assets/images/landing/svg/t-qoute.svg",
      BgColor: "#F2EAF2",
      top: "42px"
   },
   {
      author: "Cynthia Kersey",
      title: `Author of “Unstoppable”`,
      place: "",
      message: `Dr. Lisa Palmer brilliantly reveals how anyone can move beyond their current
        circumstances to living an extraordinary and unstoppable life!`,
      image: "/assets/images/landing/svg/t-qoute.svg",
      BgColor: "#ECF4E8",
      top: "14px"
   },
   {
      author: "Kay Allenbaugh",
      title: `Author of “Chocolate for a Woman's Soul”`,
      place: "",
      message: `Dr. Lisa is passionate about sharing how you can make your dreams come true one step at
        a time. Let her inspire you to be all you were meant to be!`,
      image: "/assets/images/landing/svg/t-qoute.svg",
      BgColor: "#FFFFFF",
      top: "42px"
   }
];

const Review = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3.6,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 2.6
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1.6
            }
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 1.3
            }
         },
         {
            breakpoint: 425,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   };
   return (
      <div className="bg-[#F07E58]">
         <div className="relative flex flex-col bg-[radial-gradient(111.91%_157.37%_at_50%_157.37%,rgba(255,255,255,0)0%,rgba(234,234,234,0.8)100%)] xl:py-[160px] sm:py-[100px] py-[60px]">
            <div className="bg"></div>
            <div className="isolate flex justify-center">
               <h1 className="max-w-[250px] text-center !font-['Gilroy'] text-3xl font-[500] text-[#3A3A3B] md:max-w-full md:text-4xl lg:text-5xl xl:text-6xl md:leading-[72px] leading-[40px]">
                  What People Are Saying...
               </h1>
            </div>
            <div className="lg:mt-[80px] mt-[40px] review-slider">
               <Slider {...settings}>
                  {TESTIMONIALS.map((testimonial, testimonialIdx) => (
                     <div>
                        <div
                           key={testimonialIdx}
                           className="relative rounded-xl shadow-[0px_16px_24px_rgba(0,0,0,0.12)]"
                           style={{ backgroundColor: testimonial.BgColor }}
                        >
                           <div className="sm:p-[100px_40px_80px_32px] p-[80px_20px_50px_20px]">
                              <Image
                                 src={testimonial.image}
                                 alt="t-quete"
                                 width={206}
                                 height={154}
                                 className="absolute left-[20px]"
                                 style={{ top: testimonial.top }}
                              />
                              <p className="text-center !font-['Gilroy'] leading-[26px] text-[#3A3A3B] md:leading-relaxed md:text-[20px] text-base md:text-justify relative z-[1]">
                                 "{testimonial.message}"
                              </p>
                           </div>
                           <div className="mx-[32px] border-t-[#9AC17E] border-t py-[24px] flex justify-between">
                              <div>
                                 <div className="text-[#3A3A3B] !font-['Gilroy'] font-medium text-[20px] leading-[32px]">
                                    {testimonial.author}
                                 </div>
                                 <p className="text-[#3A3A3B] !font-['Gilroy'] text-base mt-1 leading-[16px]">
                                    {testimonial.title}
                                 </p>
                              </div>
                              <div className="text-[#3A3A3B] !font-['Gilroy'] text-[20px] leading-[32px]">
                                 {testimonial.place}
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>

            <div className="container isolate mx-auto flex flex-col items-center gap-[40px] px-6 sm:mt-[137px] mt-[48px]">
               <h1 className="text-center !font-['Gilroy'] text-3xl font-medium text-[#3A3A3B] md:text-4xl lg:text-5xl xl:text-6xl leaing-[72px]">
                  Never miss an update <br />
                  Join our mailing list.
               </h1>
               <div className="relative w-full max-w-[730px]">
                  <input
                     placeholder="Email Address"
                     className="placeholder:text-[#4F4F4F] text-[#3A3A3B] bg-white rounded-[100px] sm:h-[84px] h-[64px] sm:pl-[50px] pl-[30px] text-[20px] w-full"
                  />
                  <button className="bg-[#F07F57] sm:w-[59px] w-[49px] sm:h-[59px] h-[49px] rounded-full flex justify-center items-center absolute top-1/2 sm:right-[12px] right-[8px] -translate-y-1/2">
                     {" "}
                     <Image
                        src={"assets/images/landing/svg/arrow-right.svg"}
                        alt="arrow-right"
                        width={32}
                        height={32}
                     />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Review;
