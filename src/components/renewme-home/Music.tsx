
import React, { useEffect, useState, useRef } from 'react';
import HomeTitle from "../Commen/HomeTitle";
import HomeSlider from "../Commen/HomeSlider";
import { fetchMusics } from '../../services/meditation-albums-service';

const Music = () => {
    const swiperRef = useRef(null);
    const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetchMusics('RenewMe', 1, 10).then((result)=>{
        if(result.collection){
          setMusicData(result.collection);
        }
      });
    };
    fetchData();
  },[]);

    return (
        <div>
            {" "}
            <HomeTitle text="Music" link="/music" swiperRef={swiperRef} />
            <HomeSlider data={musicData} swiperRef={swiperRef} />
        </div>
    )
}

export default Music