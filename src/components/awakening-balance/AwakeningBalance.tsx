import { CirclePlay, Clock5 } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Pagination from "../Commen/Pagination";
import AwakenLife from "./AwakenLife";
import Track from "../Commen/Track";
import SubscriptionModal from "../subscription/SubscriptionModal";
import ProtectedRoute from "@/components/ProtectedRoute";
import { fetchAlbum } from "@/services/meditation-albums-service";
import { useAuthStore } from "@/stores/authStore";

const AwakeningBalance = () => {
  const router = useRouter();
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const { user } = useAuthStore();
  const [balanceData, setBalanceData] = useState({
    title: "",
    duration: 0,
    author: "",
    narrator: "",
    tracks: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    async function fetchData() {
      await fetchAlbum(router.query.slug).then((result) => {
        setBalanceData(result);
      });
    }
    if (router.query.slug) {
      fetchData();
    }
  }, [router.query]);

  const handlePlayAll = (tracks) => {
    if (!tracks) {
      return;
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="text-white leading-[34px] font-bold sm:text-[49px] text-[24px]">
            {balanceData?.title}
          </h2>
          {/* <div className="flex items-center gap-[18px] lg:mt-[31px] sm:mt-5 mt-[4px]">
            <div className="flex items-end gap-[11px]">
              <Clock5 className="text-white" />
              <p className="md:text-[20px] font-medium text-white leading-[24px]">
                {`${Math.floor(balanceData?.duration / 60)}:${
                  balanceData?.duration % 60
                }`}{" "}
                min
              </p>
            </div>
            <div className="flex items-end gap-[11px]">
              <CirclePlay className="text-white" />
              <p className="text-[20px] font-medium text-white leading-[24px]">
                {balanceData?.tracks?.length} tracks
              </p>
            </div>
          </div> */}
          <div className="flex items-center gap-[18px] lg:mt-[31px] sm:mt-5 mt-[4px]">
            <div className="flex items-end gap-[11px]">
              <Clock5 className="text-white" />
              {typeof balanceData?.duration === "number" ? (
                <p className="md:text-[20px] font-medium text-white leading-[24px]">
                  {`${Math.floor(balanceData.duration / 60)}:${String(
                    balanceData.duration % 60
                  ).padStart(2, "0")} min`}
                </p>
              ) : (
                <p className="md:text-[20px] font-medium text-white leading-[24px]">
                  0:00 min
                </p>
              )}
            </div>

            <div className="flex items-end gap-[11px]">
              <CirclePlay className="text-white" />
              <p className="text-[20px] font-medium text-white leading-[24px]">
                {balanceData?.tracks?.length || 0} tracks
              </p>
            </div>
          </div>
        </div>
        <button
          className="bg-white rounded-full sm:w-[102px] w-[56px] sm:h-[102px] h-[56px] flex justify-center items-center text-center p-[30xp]"
          onClick={() => {
            handlePlayAll(balanceData?.tracks);
          }}
        >
          <Image
            src={"/assets/images/sleep/svg/Frame 1196.svg"}
            alt="play"
            width={39}
            height={42}
            className="sm:w-[39px] w-[26px] sm:h-[42px] h-[26px]"
          />
        </button>
      </div>
      <div className="sm:mt-[22px] mt-[16px] flex items-center gap-[19px]">
        <div>
          <p className="sm:text-[18px] text-[14px] leading-[27px] text-white">
            Author
          </p>
          <p className="sm:text-[18px] text-[14px] leading-[27px] text-white font-medium w-full sm:min-w-[149px] min-w-[94px]">
            {balanceData?.author}
          </p>
        </div>
        <div>
          <p className="sm:text-[18px] text-[14px] leading-[27px] text-white">
            Narrator
          </p>
          <p className="sm:text-[18px] text-[14px] leading-[27px] text-white font-medium  w-full sm:min-w-[149px] min-w-[94px]">
            {balanceData?.narrator}
          </p>
        </div>
      </div>
      <div className="mt-[54px] flex flex-col gap-[21px]">
        {balanceData?.tracks?.map((data, index) => (
          <Track
            item={data}
            key={index}
            needVolumes={false}
            subscriptionStatus={user.subscriptionStatus}
            onLock={() => {
              setIsSubscriptionModalOpen(true);
            }}
          />
        ))}
      </div>
      {/*<AwakenLife/>*/}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <SubscriptionModal
        isSubscriptionModalOpen={isSubscriptionModalOpen}
        setIsSubscriptionModalOpen={setIsSubscriptionModalOpen}
      />
    </ProtectedRoute>
  );
};

export default AwakeningBalance;
