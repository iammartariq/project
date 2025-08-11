import React from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Check, CheckCircle } from 'lucide-react'
const NameSavedModal = ({ name, setName }) => {
    return (
        <Dialog open={name} onClose={setName} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden   text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 w-full sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className=" bg-gray-700 text-white px-6 py-[23px] rounded-[12px] flex flex-col items-center ">
                            <div className="w-[95px] h-[95px] rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mb-[34px]">
                                <Check size={50} className=" text-white" />
                            </div>
                            <p className="sm:text-[32px] text-[26px] font-semibold leading-[38px]">Name Saved</p>
                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default NameSavedModal