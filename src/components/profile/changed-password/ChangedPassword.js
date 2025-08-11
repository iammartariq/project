import React from 'react'

const ChangedPassword = () => {
    return (

        <>
            <div className="flex flex-col items-center justify-center mt-[97px] text-white">
                <h2 className="sm:text-[36px] text-[24px] font-semibold sm:mb-[33px] mb-[15px] leading-[43px]">
                    Change Your Password
                </h2>
                <p className="text-white sm:text-[24px] text-[16px] font-medium leading-[29px] w-full max-w-[471px] text-center">
                    Enter a new password below to change your password.
                </p>
                <div className="sm:mt-[83px] mt-[47px] flex flex-col w-full max-w-[550px] justify-center items-center">
                    <input
                        type="password"
                        placeholder="New Password"
                        className=" w-full max-w-[550px] bg-black/15 border border-white py-[20px] px-[20px] text-white placeholder:text-white text-[18px] font-semibold focus:outline-none rounded-[10px] mb-4 "
                    />
                    <input
                        type="password"
                        placeholder="Re-enter new password*"
                        className=" w-full max-w-[550px] bg-black/15 border border-white py-[20px] px-[20px] text-white placeholder:text-white text-[20px] font-semibold focus:outline-none rounded-[10px] mb-6 leading-[24px]"
                    />
                    <button
                        onClick={() => {
                            setShowResetPassword(false);
                            setShowChangePassword(true);
                        }}
                        className=" w-full max-w-[550px] bg-white text-black rounded-full text-[20px] font-semibold py-[18px] sm:mt-[65px]">
                        Reset password
                    </button>
                    <button
                        onClick={() => setShowResetPassword(false)}
                        className=" w-full max-w-[550px] mt-[22px] text-white text-[22px] font-semibold leading-[26px]"
                    >
                        Cancel
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center xl:mt-[184px] mt-[100px]">
                <div className="text-center px-6 py-10 rounded-lg">
                    <CheckCircle className="mx-auto w-16 h-16 text-white" strokeWidth={1.5} />
                    <h2 className="text-white md:text-[48px] sm:text-[40px] text-[30px] leading-[58px] font-semibold mt-[30px]">Password Changed!</h2>
                    <p className="text-white md:text-[32px] sm:text-[24px] text-[16px] font-medium md:leading-[38px] leading-[19px] md:mt-[30px] mt-[12px] w-full sm:max-w-[647px] max-w-[310px]">Your password has been changed successfully.</p>
                    <button className="bg-white text-[20px] text-black font-semibold sm:py-[18px] py-[12px] px-6 rounded-full w-full max-w-[550px] md:mt-[79px] sm:mt-[50px] mt-[30px]">
                        Go Back
                    </button>
                </div>
            </div>

        </>
    )
}

export default ChangedPassword