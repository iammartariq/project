
import React, { useEffect, useState, useRef } from 'react';
import HomeTitle from "../Commen/HomeTitle";
import HomeSlider from "../Commen/HomeSlider";
import { fetchTracks } from '@/services/meditation-albums-service';

function Meditation() {
  const swiperRef = useRef(null);
  const [meditationData, setMeditationData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetchTracks('RenewMe', 'Meditations', 1, 10).then((result)=>{
                if(result.collection){
                  setMeditationData(result.collection);
                }
            });
        };
        fetchData();
    },[]);
  return (
    <div>
      {" "}
      <HomeTitle text="Meditation" link="/meditation" swiperRef={swiperRef} />
      <HomeSlider data={meditationData} swiperRef={swiperRef} />
    </div>
  );
}

export default Meditation;
