import React, { useEffect, useState } from "react";
import Layout from "../layout";
import BalanceSlider from "@/components/renewme-home/BalanceSlider";
import Sleep from "@/components/renewme-home/Sleep";
import Affirmations from "@/components/renewme-home/Affirmations";
import Confidence from "@/components/renewme-home/Confidence";
import Music from "@/components/renewme-home/Music";
import Meditation from "@/components/renewme-home/Meditation";

const index = () => {
  return (
    <div>
      <div className="bg-[url(/assets/images/renewme-home/home-bg.png)]">
        <Layout>
          <div className="md:py-[88px] py-[27px] flex flex-col gap-[54px] text-[#ffffff] lg:pl-[44px]">
            <div className="md:text-[48px] text-[24px] font-bold">
              Soulscape
            </div>
            <div className="flex flex-col gap-[76px]">
              {/* <BalanceSlider /> */}
              <Sleep />
              <Meditation />
              <Affirmations />
              <Confidence />
              <Music />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default index;
