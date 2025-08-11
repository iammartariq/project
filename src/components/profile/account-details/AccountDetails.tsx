import Link from "next/link";
import React, { useState } from "react";
import { Mail, CheckCircle, Lock, ChevronRight } from "lucide-react";
import NameSavedModal from "./NameSavedModal";
import { useAuthStore } from '@/stores/authStore';
import { capitalize } from '@/lib/utils';
import { updateUser } from '@/services/user-service';
import { toast } from 'react-toastify';

const AccountDetails = () => {
    const { user, login } = useAuthStore();
    const [showNewDesign, setShowNewDesign] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(false);
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);

    const [form, setForm] = useState({ firstName: user?.firstName, lastName: user?.lastName, email: user?.email, password: '', code: '' });
    const [errors, setErrors] = useState<{
        firstName?: string;
        lastName?: string;
        email?: string;
        password?: string;
        passwordConfirmation?: string;
        errors?: string;
        code?: string;
      }>({});

    const updateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateUser(form).then((result) => {
            if(result.errors){
                toast.error(result.errors);
            }else{
                login(result.user);
                toast.success('User successfully Updated!');
                setName(true);
                setShowResetPassword(false);
                setShowChangePassword(true);
            }
        })
    };

    const verifyEmail = async (e: React.FormEvent) => {
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'passwordConfirmation'){
            setPasswordConfirmation(e.target.value);
            if(e.target.value !== form.password){
                setErrors(prev => ({ ...prev, [e.target.name]: 'Password didnt match!' }));
            }else if(errors.passwordConfirmation === 'Password didnt match!'){
                setErrors(prev => ({ ...prev, [e.target.name]: '' }));
            }
            return;
        }
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
        // Clear errors when user starts typing
        setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    };

    const sendVerifyCode = () => {
    };



    if (showNewDesign) {
        if (showResetPassword) {
            return (
                <div className="flex flex-col items-center justify-center mt-[97px] text-white">
                    <h2 className="sm:text-[36px] text-[24px] font-semibold sm:mb-[33px] mb-[15px] leading-[43px]">
                        Change Your Password
                    </h2>
                    <p className="text-white sm:text-[24px] text-[16px] font-medium leading-[29px] w-full max-w-[471px] text-center">
                        Enter a new password below to change your password.
                    </p>
                    <form  onSubmit={updateProfile} className="sm:mt-[83px] mt-[47px] flex flex-col w-full max-w-[550px] justify-center items-center">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            placeholder="New Password"
                            onChange={handleChange}
                            className=" w-full max-w-[550px] bg-black/15 border border-white py-[20px] px-[20px] text-white placeholder:text-white text-[18px] font-semibold focus:outline-none rounded-[10px] mb-4 "
                        />
                        <input
                            type="password"
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            onBlur={ (e) => {
                                if(e.target.value !== form.password){
                                    setErrors(prev => ({ ...prev, [e.target.name]: 'Password didnt match!' }));
                                }else if(errors.passwordConfirmation === 'Password didnt match!'){
                                    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
                                }
                            }}
                            onChange={handleChange}
                            placeholder="Re-enter new password*"
                            className={`w-full max-w-[550px] bg-black/15 border ${errors.passwordConfirmation === 'Password didnt match!' ? 'border-red-500' : 'border-white'} py-[20px] px-[20px] text-white placeholder:text-white text-[20px] font-semibold focus:outline-none rounded-[10px] mb-6 leading-[24px]`}
                        />
                        <button
                            disabled={errors.passwordConfirmation === 'Password didnt match!'}
                            className=" w-full max-w-[550px] bg-white text-black rounded-full text-[20px] font-semibold py-[18px] sm:mt-[65px]">
                            Reset password
                        </button>
                        <button
                            onClick={() => setShowResetPassword(false)}
                            type="button"
                            className=" w-full max-w-[550px] mt-[22px] text-white text-[22px] font-semibold leading-[26px]"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            );
        }

        if (showChangePassword) {
            return (
                <div className="flex items-center justify-center xl:mt-[184px] mt-[100px]">
                    <div className="text-center px-6 py-10 rounded-lg">
                        <CheckCircle className="mx-auto w-16 h-16 text-white" strokeWidth={1.5} />
                        <h2 className="text-white md:text-[48px] sm:text-[40px] text-[30px] leading-[58px] font-semibold mt-[30px]">Password Changed!</h2>
                        <p className="text-white md:text-[32px] sm:text-[24px] text-[16px] font-medium md:leading-[38px] leading-[19px] md:mt-[30px] mt-[12px] w-full sm:max-w-[647px] max-w-[310px]">Your password has been changed successfully.</p>
                        <button className="bg-white text-[20px] text-black font-semibold sm:py-[18px] py-[12px] px-6 rounded-full w-full max-w-[550px] md:mt-[79px] sm:mt-[50px] mt-[30px]" 
                            onClick={()=>{
                                setShowChangePassword(false);
                            }}
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex flex-col justify-center items-center mt-[34px]">
                {!isEditing ? (
                    <>
                        <div className="relative w-full xl:max-w-[733px] lg:max-w-[571px] mt-[34px] h-40 bg-gradient-to-b from-[#003447] to-[#003447] flex items-center justify-center">
                            <div
                                className="absolute top-[28px] right-[20px] text-white text-[18px] font-semibold cursor-pointer"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </div>
                            <div className="flex flex-col items-center py-[39px]">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-pink-300 to-purple-500 flex items-center justify-center text-white text-lg font-semibold">
                                    {user?.lastName}
                                </div>
                                <p className=" text-white text-[24px] font-semibold mt-[21px]">
                                    {user?.firstName}
                                </p>
                            </div>
                        </div>
                        <div className="w-full xl:max-w-[733px] lg:max-w-[571px] bg-gradient-to-b from-[#003447] to-[#003447] text-white px-[28px] py-[20px] mt-[63px]">
                            <div className="flex justify-between items-center border-b border-b-[#7F7A7A] pb-[12px]">
                                <div className="flex items-center gap-[23px]">
                                    <Mail size={40} className="text-white" />
                                    <div>
                                        <p className="sm:text-[24px] text-[18px] leading-[29px] font-semibold mb-[7px]">
                                            Logged In With Email
                                        </p>
                                        <div className="flex items-center space-x-1">
                                            <CheckCircle className="w-4 h-4 text-blue-400" />
                                            <p className="sm:text-[16px] text-[13px] font-medium leading-[19px] text-[#DCDCDC]">
                                                {user?.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight size={24} className="text-[#979797]" />
                            </div>
                            <div className="flex justify-between items-center py-[13px] cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <Lock className="w-6 h-6 text-white" />
                                    <p className="sm:text-[24px] text-[18px] leading-[29px] font-semibold">
                                        Reset Password
                                    </p>
                                </div>
                                <button onClick={() => {
                                    setShowNewDesign(true);
                                    setShowResetPassword(true);
                                }}>
                                    <ChevronRight size={24} className="text-[#979797]" />
                                </button>
                            </div>
                        </div>
                        <p className="mt-[70px] text-white text-[20px] font-semibold leading-[24px]">
                            Copyrights © 2025 RenewMe. All Rights Reserved.
                        </p>
                    </>
                ) : (
                    <>
                        <form  onSubmit={updateProfile}>
                            <div className=" flex items-center justify-center mt-[45px]">
                                <div className="text-center w-full">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-400 text-white flex items-center justify-center text-xl font-bold">
                                        {capitalize(user?.firstName.split('')[0])}
                                    </div>
                                    <h2 className="sm:text-[32px] text-[25px] leading-[38px] font-bold text-white mt-[11px]">
                                        Edit Name
                                    </h2>
                                    <p className="sm:text-[20px] text-[18px] text-white sm:mt-[45px] mt-[21px] leading-[24px] mb-[41px]">
                                        It’s how we refer to you throughout your journey.
                                    </p>

                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={form.firstName}
                                        placeholder="First Name (Required)"
                                        className="w-full bg-black/15 border border-white py-[24px] pl-[24px] text-white placeholder:text-white sm:text-[22px] text-[18px] font-semibold focus:outline-none rounded-[10px]"
                                        defaultValue={form.firstName}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={form.lastName}
                                        placeholder="Last Name"
                                        className="mt-[16px] w-full bg-black/15 border border-white py-[24px] pl-[24px] text-white placeholder:text-white sm:text-[22px] text-[18px] font-semibold focus:outline-none rounded-[10px]"
                                        defaultValue={form.lastName}
                                        onChange={handleChange}
                                    />

                                    <button
                                        className="w-full bg-white text-black rounded-full text-[20px] font-semibold mt-[41px] py-[18px]"
                                    >
                                        Save
                                    </button>
                                    <button type="button" onClick={() => setIsEditing(false)} className="w-full text-white underline text-[20px] mt-[30px] font-semibold">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                        <NameSavedModal name={name} setName={setName} />
                    </>
                )}
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="sm:mt-[46px] mt-[75px]">
                <h2 className="text-white sm:text-[32px] text-[24px] font-semibold leading-[38px] text-center">
                    Verify your identity. Enter the code sent to:
                </h2>
            </div>
            <form onSubmit={verifyEmail}>
                <div className="sm:px-[27px] mt-[56px]">
                    <div className="bg-[#00000054] text-white rounded-[10px] flex gap-12 justify-center  items-center px-3 w-full sm:min-w-[550px] min-w-[367px]">
                        <Mail size={32} />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            className=" text-white text-sm sm:text-[20px] font-semibold focus:outline-none py-[25px]"
                            readOnly
                        />
                    </div>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={form.code}
                        placeholder="6-digit Access Code (Required)"
                        className="sm:mt-[44px] mt-[24px] bg-[#00000054] text-[#DBDBDB] rounded-[10px] flex gap-12 justify-center items-center pl-[34px] w-full sm:min-w-[550px] min-w-[367px] text-[20px] font-semibold focus:outline-none py-[25px]"
                    />
                    <div className="w-full">
                        <p className="text-white mt-[9px] text-[14px] leading-[17px] text-left">
                            Tip: If you do not see this email, check your spam folder.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowNewDesign(true)}
                        className="sm:mt-[56px] mt-[23px] rounded-full bg-white text-black text-[20px] font-semibold leading-[24px] w-full py-[18px]"
                    >
                        Continue
                    </button>
                </div>
                <div className="text-center">
                    <button
                        type="button"
                        className="hover:underline text-[22px] font-semibold leading-[26px] sm:py-[47px] py-[27px] text-white text-center"
                    >
                        Resend Code
                    </button>
                </div>
            </form>
            <div>
                <p className="text-white sm:font-semibold font-medium sm:text-[22px] text-[17px] text-center leading-[26px] border-t border-t-[#9B9595] sm:pt-[58px] pt-[27px]">
                    Contact support@renewme.com to update your email address.
                </p>
            </div>
        </div>
    );
};

export default AccountDetails;
