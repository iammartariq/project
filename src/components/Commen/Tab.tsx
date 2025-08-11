import React, { useState } from "react";
import ManageSubscription from "../profile/manage-subscription/ManageSubscription";
import AccountDetails from "../profile/account-details/AccountDetails";
import { useRouter } from "next/router";

const Tab: React.FC = () => {
   const router = useRouter();
   const [tab, setTab] = useState<string>("Manage Subscription");

   return (
      <>
         <div className="flex flex-wrap items-center gap-[30px] overflow-auto">
            {/* <button onClick={() => setTab('Profile')} className={`${tab === 'Profile' ? 'text-black bg-white' : 'text-white bg-black/14'} px-[29px] py-[10px] rounded-4xl text-[17px] leading-[20px] font-medium cursor-pointer`}>Profile</button> */}
            <button
               onClick={() => setTab("Manage Subscription")}
               className={`${
                  tab === "Manage Subscription"
                     ? "text-black bg-white"
                     : "text-white bg-black/14"
               } px-[29px] py-[10px] rounded-4xl text-[17px] leading-[20px] font-medium cursor-pointer`}
            >
               Manage Subscription
            </button>
            <button
               onClick={() => setTab("Account Details")}
               className={`${
                  tab === "Account Details"
                     ? "text-black bg-white"
                     : "text-white bg-black/14"
               } px-[29px] py-[10px] rounded-4xl text-[17px] leading-[20px] font-medium cursor-pointer`}
            >
               Account Details
            </button>
            <button
               onClick={() => {
                  setTab("Logout");
                  router.push("/logout");
               }}
               className={`${
                  tab === "Logout"
                     ? "text-black bg-white"
                     : "text-white bg-black/14"
               } px-[29px] py-[10px] rounded-4xl text-[17px] leading-[20px] font-medium cursor-pointer`}
            >
               Logout
            </button>
         </div>
         <div>
        
            {tab === "Manage Subscription" && <ManageSubscription />}
            {tab === "Account Details" && <AccountDetails />}
            {tab === "Logout" && <div>dfdgf</div>}
         </div>
      </>
   );
};

export default Tab;