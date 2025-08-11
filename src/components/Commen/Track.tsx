import React, { useState } from 'react'
import Image from 'next/image';
import { AudioPlayer } from './AudioPlayer';

const Track = ({item, needControls = true, needVolumes = true, classNames = 'default', subscriptionStatus, onLock}) => {

    const trackSrc = () => {
        if(subscriptionStatus !== 'active' && item.premium && item.preview){
            return item.preview;
        }else{
            return item.track;
        }
    };

    return (
        <>
            <AudioPlayer
                src={trackSrc()}
                className="flex items-center justify-between rounded-[19px] bg-black/15 border border-white/20 backdrop-blur-md text-white sm:px-[30px] px-[24px] sm:py-[24px] py-[21px]"
                color="white"
                item={item}
                subscriptionStatus={subscriptionStatus}
                needControls={needControls}
                needVolumes={needVolumes}
                onLock={onLock}
                classNames={classNames}
            />
        </>
    )
}

export default Track;