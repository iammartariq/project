import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Pagination from '../Commen/Pagination';
import Link from 'next/link';
import ProtectedRoute from "@/components/ProtectedRoute";
import { fetchMeditationAlbums } from '@/services/meditation-albums-service';


const Balance = () => {
    const [balanceData, setBalanceData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        async function fetchData() {
            await fetchMeditationAlbums('RenewMe', 'Living in Balance', currentPage, limit).then((result)=>{
                if(result.collection){
                  setBalanceData(result.collection);
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
            <h2 className='text-[48px] font-bold text-white leading-[58px]'>Balance</h2>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-[34px] mt-[54px]">
                {balanceData.map((data, index) => (
                    <Link href={`/${encodeURIComponent(data.slug)}`} key={index}>
                        <div key={index} className="flex flex-col justify-center items-center xl:items-start">
                            <Image
                                src={data.coverSmallLandscape}
                                alt={`Balance${index + 1}`}
                                width={368}
                                height={267}
                                loading="lazy"
                                className="md:w-[368px] md:h-[267px] w-[130px] h-[130px] rounded-2xl"
                            />
                            <p className="mt-[25px] leading-[29px] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[15px] text-white text-left">
                                {data.title}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </ProtectedRoute>
    )
}

export default Balance