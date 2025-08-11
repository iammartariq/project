
import { ChevronLeft, ChevronRight, LockKeyhole, Play } from "lucide-react";
import React, { useEffect, useState, useRef } from 'react';
import HomeTitle from "../Commen/HomeTitle";
import HomeSlider from "../Commen/HomeSlider";
import { fetchTracks } from '../../services/meditation-albums-service';

const Confidence = () => {
    const swiperRef = useRef(null);
    const [confidencesData, setConfidencesData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetchTracks('RenewMe', 'Boost Confidence', 1, 10).then((result)=>{
                if(result.collection){
                  setConfidencesData(result.collection);
                }
            });
        };
        fetchData();
    },[]);

    return (
        <div>
            {" "}
            <HomeTitle text="Confidence" link="/confidence" swiperRef={swiperRef} />
            <HomeSlider data={confidencesData} swiperRef={swiperRef} />
        </div>
    )
}

export default Confidence