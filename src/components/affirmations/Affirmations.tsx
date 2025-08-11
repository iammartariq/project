import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Pagination from '../Commen/Pagination';
import ProtectedRoute from "../../components/ProtectedRoute";
import Track from "../Commen/Track";
import { fetchTracks } from '../../services/meditation-albums-service';
import SubscriptionModal from '../subscription/SubscriptionModal';
import { useAuthStore } from '@/stores/authStore';

const Affirmations = () => {
  const [affirmationsData, setAffirmationsData] = useState([]);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const { user } = useAuthStore();

  useEffect(() => {
    async function fetchData() {
      await fetchTracks('RenewMe', 'Affirmations', currentPage, limit).then((result)=>{
        if(result.collection){
          setAffirmationsData(result.collection);
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
        <h2 className="text-white sm:text-[40px] text-[24px] font-semibold leading-[48px]">Affirmations</h2>
        <div className="mt-[54px] flex flex-col gap-[21px]">
          {affirmationsData.map((data, index) => (
            <Track item={data} key={index} needVolumes={false} subscriptionStatus={user?.subscriptionStatus} onLock={()=> { setIsSubscriptionModalOpen(true); }} />
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

export default Affirmations