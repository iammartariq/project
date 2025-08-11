import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Pagination from '../Commen/Pagination';
import ProtectedRoute from "@/components/ProtectedRoute";
import Track from "../Commen/Track";
import { fetchTracks } from '@/services/meditation-albums-service';
import SubscriptionModal from '../subscription/SubscriptionModal';
import { useAuthStore } from '@/stores/authStore';

const Confidence = () => {
  const [confidencesData, setConfidencesData] = useState([]);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const { user } = useAuthStore();

  useEffect(() => {
    async function fetchData() {
      await fetchTracks('RenewMe', 'Boost Confidence', currentPage, limit).then((result)=>{
        if(result.collection){
          setConfidencesData(result.collection);
        }
        if(result.metadata?.totalPages){
          setTotalPages(result.metadata?.totalPages);
        }
      });
    };
    fetchData();
  },[currentPage, limit]);

  return (
    <ProtectedRoute>
      <div>
        <h2 className="text-white sm:text-[40px] text-[24px] font-semibold leading-[48px]">Confidence</h2>
        <div className="mt-[54px] flex flex-col gap-[21px]">
          {confidencesData.map((data, index) => (
            <Track item={data} key={index} needVolumes={false} subscriptionStatus={user.subscriptionStatus} onLock={()=> { setIsSubscriptionModalOpen(true); }} />
            ))}
        </div>
        <SubscriptionModal
          isSubscriptionModalOpen={isSubscriptionModalOpen}
          setIsSubscriptionModalOpen={setIsSubscriptionModalOpen} />
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </ProtectedRoute>
      )
}

export default Confidence