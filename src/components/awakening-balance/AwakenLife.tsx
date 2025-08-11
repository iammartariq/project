import React, { useState } from 'react'
import SubscriptionModal from '../subscription/SubscriptionModal';
import Image from 'next/image';

const AwakenLife = () => {
    const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
    return (
        <div>
            <div className="mt-[54px] flex flex-col gap-[21px]">
                <div className="flex items-center justify-between rounded-[19px] bg-black/15 border border-white/20 backdrop-blur-md text-white sm:px-[30px] px-[24px] sm:py-[24px] py-[21px]">
                    <div className="flex items-center gap-[24px]">
                        <div className="sm:min-w-[93px] min-w-[44px] sm:min-h-[93px] min-h-[44px] bg-white/15 rounded-full flex justify-center items-center text-center">
                            <Image src="/assets/images/sleep/svg/Group.svg" alt="" width={32} height={36} className='sm:w-[36px] w-[15px] sm:h-[36px] h-[17]' />
                        </div>
                        <div>
                            <div className="font-bold sm:text-[32px] text-[14px] leading-[22px] sm:mb-[21px] mb-[3px]">Awaken Life Force</div>
                            <div className="sm:text-[24px] text-[14px] text-[#D6D6D6] leading-[14px]">Meditate & Unwind</div>
                        </div>
                    </div>
                    <div className="sm:text-[20px] text-[14px] text-white leading-[22px]">02:15</div>
                </div>
                <div className="flex items-center justify-between rounded-[19px] bg-black/15 border border-white/20 backdrop-blur-md text-white sm:px-[30px] px-[24px] sm:py-[24px] py-[21px]">
                    <div className="flex items-center gap-[24px]">
                        <div className="sm:min-w-[93px] min-w-[44px] sm:min-h-[93px] min-h-[44px] bg-white/15 rounded-full flex justify-center items-center text-center">
                            <Image src="/assets/images/sleep/svg/Group.svg" alt="" width={32} height={36} className='sm:w-[36px] w-[15px] sm:h-[36px] h-[17]' />
                        </div>
                        <div>
                            <div className="font-bold sm:text-[32px] text-[14px] leading-[22px] sm:mb-[21px] mb-[3px]">Awaken Life Force</div>
                            <div className="sm:text-[24px] text-[14px] text-[#D6D6D6] leading-[14px]">Meditate & Unwind</div>
                        </div>
                    </div>
                    <div className="sm:text-[20px] text-[14px] text-white leading-[22px]">02:15</div>
                </div>
                <div className="flex items-center justify-between rounded-[19px] bg-black/15 border border-white/20 backdrop-blur-md text-white sm:px-[30px] px-[24px] sm:py-[24px] py-[21px]">
                    <div className="flex items-center gap-[24px]">
                        <div className="sm:min-w-[93px] min-w-[44px] sm:min-h-[93px] min-h-[44px] bg-white/15 rounded-full flex justify-center items-center text-center">
                            <Image src="/assets/images/sleep/svg/Group.svg" alt="" width={32} height={36} className='sm:w-[36px] w-[15px] sm:h-[36px] h-[17]' />
                        </div>
                        <div>
                            <div className="font-bold sm:text-[32px] text-[14px] leading-[22px] sm:mb-[21px] mb-[3px]">Awaken Life Force</div>
                            <div className="sm:text-[24px] text-[14px] text-[#D6D6D6] leading-[14px]">Meditate & Unwind</div>
                        </div>
                    </div>
                    <div className="sm:text-[20px] text-[14px] text-white leading-[22px]">02:15</div>
                </div>
                <div
                    onClick={() => {
                        setIsSubscriptionModalOpen(true);
                    }}
                    className="flex items-center justify-between rounded-[19px] bg-black/15 border border-white/20 backdrop-blur-md text-white sm:px-[30px] px-[24px] sm:py-[24px] py-[21px]">
                    <div className="flex items-center gap-[24px]">
                        <div className="sm:min-w-[93px] min-w-[44px] sm:min-h-[93px] min-h-[44px] bg-white/15 rounded-full flex justify-center items-center text-center">
                            <Image src="/assets/images/sleep/svg/lock.svg" alt="" width={32} height={36} className='sm:w-[36px] w-[15px] sm:h-[36px] h-[17]' />
                        </div>
                        <div>
                            <div className="font-bold sm:text-[32px] text-[14px] leading-[22px] sm:mb-[21px] mb-[3px]">Awaken Life Force</div>
                            <div className="sm:text-[24px] text-[14px] text-[#D6D6D6] leading-[14px]">Meditate & Unwind</div>
                        </div>
                    </div>
                    <div className="sm:text-[20px] text-[14px] text-white leading-[22px]">02:15</div>
                </div>
                <div className="flex items-center justify-between rounded-[19px] bg-black/15 border border-white/20 backdrop-blur-md text-white sm:px-[30px] px-[24px] sm:py-[24px] py-[21px]">
                    <div className="flex items-center gap-[24px]">
                        <div className="sm:min-w-[93px] min-w-[44px] sm:min-h-[93px] min-h-[44px] bg-white/15 rounded-full flex justify-center items-center text-center">
                            <Image src="/assets/images/sleep/svg/lock.svg" alt="" width={32} height={36} className='sm:w-[36px] w-[15px] sm:h-[36px] h-[17]' />
                        </div>
                        <div>
                            <div className="font-bold sm:text-[32px] text-[14px] leading-[22px] sm:mb-[21px] mb-[3px]">Awaken Life Force</div>
                            <div className="sm:text-[24px] text-[14px] text-[#D6D6D6] leading-[14px]">Meditate & Unwind</div>
                        </div>
                    </div>
                    <div className="sm:text-[20px] text-[14px] text-white leading-[22px]">02:15</div>
                </div>
            </div>
            <SubscriptionModal
                isSubscriptionModalOpen={isSubscriptionModalOpen}
                setIsSubscriptionModalOpen={setIsSubscriptionModalOpen} />
        </div>
    )
}

export default AwakenLife