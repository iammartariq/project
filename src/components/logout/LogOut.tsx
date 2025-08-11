import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../stores/authStore';
import Auth from "@/components/signup/Auth";
import { toast } from 'react-toastify';

const LogOut = () => {
    const { logout } = useAuthStore();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        logout();
        toast.success('Logout Successfully!')
    }, []);

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-white text-[24px] font-medium leading-[29px] w-full max-w-[517px] text-center'>Create an account to save your progress and see your stats</p>
            <button className='mt-[47px] py-[22px] text-black bg-white text-[24px] font-medium leading-[29px] rounded-full w-full max-w-[455px]' onClick={() => setOpen(true)} >Sign up or Log in</button>
            {open && <Auth open={open} setOpen={setOpen} />}
        </div>
    )
}

export default LogOut