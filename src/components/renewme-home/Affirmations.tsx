
import { ChevronLeft, ChevronRight, LockKeyhole, Play } from "lucide-react";
import React, { useEffect, useState, useRef } from 'react';
import HomeTitle from "../Commen/HomeTitle";
import HomeSlider from "../Commen/HomeSlider";
import { fetchTracks } from '../../services/meditation-albums-service';

const Affirmations = () => {
    const swiperRef = useRef(null);
    const [affirmationsData, setAffirmationsData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        try {
          await fetchTracks('RenewMe', 'Affirmations', 1, 10).then((result)=>{
            if(result.collection){
              setAffirmationsData(result.collection);
            }
          });
       } catch (error) {
          console.error("Failed to fetch affirmations:", error);
          // Optionally set some error state
        }
      };
      fetchData();
    },[]);

    return (
        <div>
            {" "}
            <HomeTitle text="Affirmations" link="/affirmations" swiperRef={swiperRef} />
            <HomeSlider data={affirmationsData} swiperRef={swiperRef} />
        </div>
    )
}

export default Affirmations