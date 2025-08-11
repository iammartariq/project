import { X } from "lucide-react";
import React, { ReactNode } from "react";

interface CreateAccountModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: ReactNode;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({ isOpen, onClose, children }) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-[#00000034] z-30 p-[100px_20px_20px_20px] lg:p-[48px] 2xl:p-[65px_79px_57px_86px] flex justify-center items-center">
         <div className="bg-[#F8F8F8] rounded-[20px] border border-[#00000047] relative w-full h-full overflow-auto">
            <button
               onClick={onClose}
               className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px] bg-[#D9D9D9] rounded-full size-[24px] lg:size-[30px] xl:size-[50px] flex justify-center items-center cursor-pointer"
            >
               <X className="text-black size-[14px] lg:size-[18px] xl:size-auto" />
            </button>
            {children}
         </div>
      </div>
   );
};

export default CreateAccountModal;