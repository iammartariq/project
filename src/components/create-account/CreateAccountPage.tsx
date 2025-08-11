import React from "react";
import CreateAccountModal from "./CreateAccountModal";
import ConnectAudience from "./ConnectAudience";
import CreateFree from "./CreateFree";

interface CreateAccountPageProps {
   isOpen: boolean;
   onClose: () => void;
}

const CreateAccountPage: React.FC<CreateAccountPageProps> = ({ isOpen, onClose }) => {
   return (
      // <Loading>
      <CreateAccountModal isOpen={isOpen} onClose={onClose}>
         {/* <div className="grid grid-cols-2"> */}
         <div className="flex flex-col lg:flex-row items-center justify-between gap-[25px] lg:gap-[20px] 2xl:gap-[32.5px] py-[66px] lg:py-[0px] px-[23px] 2xl:px-[0px] 2xl:pl-[92px] 2xl:pr-[98px] h-full 2xl:h-auto">
            <ConnectAudience />
            <CreateFree />
         </div>
      </CreateAccountModal>
      // </Loading>
   );
};

export default CreateAccountPage;