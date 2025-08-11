
import { ChevronLeft, ChevronRight, LockKeyhole, Play } from "lucide-react";
import React, { useEffect, useState, useRef } from 'react';
import HomeTitle from "../Commen/HomeTitle";
import HomeSlider from "../Commen/HomeSlider";
import { fetchTracks } from '../../services/meditation-albums-service';

const Sleep = () => {
    const swiperRef = useRef(null);
    const [sleepData, setSleepData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetchTracks('RenewMe', 'Bedtime Stories', 1, 10).then((result)=>{
                if(result.collection){
                    setSleepData(result.collection);
                }
            });
        };
        fetchData();
    },[]);

    return (
        <div>
            {" "}
            <HomeTitle text="Sleep" link="/sleep" swiperRef={swiperRef} />
            <HomeSlider data={sleepData} swiperRef={swiperRef}/>
        </div>
    );
};

export default Sleep;
