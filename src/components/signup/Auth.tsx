"use client";
import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import ConnectAudience from "./ConnectAudience";
import Image from "next/image";
import { X } from "lucide-react";
import { useRouter } from "next/router";
import SignUpForm from "./SignUpForm";
import LoginAuth from "../login/LoginAuth";
import { registerUser, signInUser } from "../../services/auth-service";
import { forgotPassword } from "../../services/user-service";
import { useAuthStore } from "../../stores/authStore";
import { toast } from "react-toastify";
import TermsModal from "../terms/TermsModal";
import PrivacyModal from "../privacy/PrivacyModal";

const initialState = {
   fullName: "",
   email: "",
   password: "",
};

const Auth = ({ open, setOpen }: any) => {
      const [isTermsOpen, setIsTermsOpen] = useState(false);
      const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

   const router = useRouter();
   const { login, checkAuthenticate, isAuthenticated } = useAuthStore();

   const [auth, setAuth] = useState(false);
   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [isAuthModalOpen, setIsAuthModalOpen] = useState(open);
   const [form, setForm] = useState({ fullName: "", email: "", password: "" });
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
   const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
   const [isContinueModalOpen, setIsContinueModalOpen] = useState(false);
   const [errors, setErrors] = useState<{
      fullName?: string;
      email?: string;
      password?: string;
      termsIsChecked?: string;
   }>({});
   const [termsIsChecked, setTermsIsChecked] = useState(false);

   const validate = () => {
      const newErrors: typeof errors = {};
      if (form.fullName && form.fullName.trim().length < 3) {
         newErrors.fullName = "Full name must be at least 3 characters long";
      }
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
         newErrors.email = "Invalid email address";
      }
      if (!form.password.trim().length) {
         newErrors.password = "Password field must not be empty!";
      }
      if (!termsIsChecked) {
         newErrors.termsIsChecked =
            "You must agree to the terms and conditions";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value,
      });
      // Clear errors when user starts typing
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
   };

   const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("validate()", validate());
      console.log("newErrors", errors);
      if (!validate()) return;
      await registerUser(form).then((result) => {
         if (result.errors) {
            toast.error(result.errors);
         } else {
            toast.success("Signed Up successfully, Please Login!");
            setForm({ ...initialState });
            setIsSignupModalOpen(false);
            setIsAuthModalOpen(true);
         }
      });
   };

   const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Login form data:", { email: form.email, password: '[REDACTED]' });
      console.log("Validation result:", validate());
      console.log("Validation errors:", errors);
      
      if (!validate()) return;
      
      setLoading(true);
      await signInUser(form).then((result) => {
         console.log("Login result:", result);
         setLoading(false);
         if (result.errors) {
            console.error("Login failed with error:", result.errors);
            toast.error(result.errors);
         } else {
            toast.success("Logged in successfully!");
            login(result.user);
            setForm({ ...initialState });
            setIsSignupModalOpen(false);
            setIsAuthModalOpen(false);
            setOpen(false);
            router.push("/renewme-home");
         }
      });
   };

   const handleResetPassword = async (e: React.FormEvent) => {
      e.preventDefault();
      await forgotPassword(form).then((result) => {
         if (result.link && !result.emailSent) {
            toast.error(result.link);
         } else {
            toast.success("Reset Link sent to your email please check!");
            setIsForgotModalOpen(false);
            setIsContinueModalOpen(true);
            // setForm({ ...initialState });
         }
      });
   };

   return (
      <>
         <Dialog open={auth} onClose={setAuth} className="relative z-10">
            <DialogBackdrop
               transition
               className="fixed inset-0 bg-black-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
               <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <DialogPanel
                     transition
                     className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[1563px] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                  >
                     <div className="bg-[#F8F8F8] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-[25px] lg:gap-[20px] 2xl:gap-[32.5px] py-[66px] lg:py-[0px] px-[23px] 2xl:px-[0px] 2xl:pl-[92px] 2xl:pr-[98px] h-full 2xl:h-auto">
                           <button
                              onClick={() => {
                                 setOpen(false);
                                 setAuth(false);
                                 setTermsIsChecked(true);
                              }}
                              className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px] bg-[#D9D9D9] rounded-full size-[24px] lg:size-[30px] xl:size-[50px] flex justify-center items-center cursor-pointer"
                           >
                              <X className="text-black size-[14px] lg:size-[18px] xl:size-auto" />
                           </button>
                           <ConnectAudience />
                           <div className="order-1 lg:order-2 flex items-center lg:w-1/2 2xl:w-auto">
                              <div className="bg-[#ffffff] rounded-[28px] pt-[50px] pb-[23px] xl:py-[60px] 2xl:py-[126px] px-[23px] xl:px-[30px] 2xl:px-[47px] flex flex-col gap-[30px] sm:gap-[41px]">
                                 <div className="flex flex-col items-center gap-[5px] sm:gap-[12px] xl:gap-[17px]">
                                    <div className="text-[20px] sm:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold leading-[28px] text-center">
                                       Create a free account to save your
                                       preferences
                                    </div>
                                    <div className="sm:text-[20px] xl:leading-[28px]">
                                       Have a Renewme account?{" "}
                                       <span
                                          onClick={() => {
                                             setIsAuthModalOpen(true);
                                             setAuth(false);
                                          }}
                                          className="text-[#0066FF] cursor-pointer underline"
                                       >
                                          Log in
                                       </span>
                                    </div>
                                 </div>
                                 <button
                                    onClick={() => {
                                       setIsSignupModalOpen(true);
                                       setTermsIsChecked(true);
                                    }}
                                    className="bg-[#A850B2] rounded-full text-[#ffffff] py-[13px] xl:py-[16px] 2xl:py-[21.5px] flex items-center justify-center gap-[20px] cursor-pointer"
                                 >
                                    <div className="">
                                       <Image
                                          src={
                                             "/assets/images/renewme-home/svg/mail.svg"
                                          }
                                          alt="mail"
                                          width={24}
                                          height={24}
                                       />
                                    </div>
                                    <div className="text-[15px] sm:text-[20px] xl:text-[22px] font-semibold xl:leading-[26px]">
                                       Continue with Email
                                    </div>
                                 </button>
                                 <div className="text-[15px] xl:text-[17px] xl:leading-[24px] text-center">
                                    By clicking Continue, you agree to our{" "}
                                    <span
                                       className="text-[#0066FF] cursor-pointer underline"
                                       onClick={() => setIsTermsOpen(true)}
                                    >
                                       Terms
                                    </span>{" "}
                                    and acknowledge that you have read our{" "}
                                    <span
                                       className="text-[#0066FF] cursor-pointer underline"
                                       onClick={() => setIsPrivacyOpen(true)}
                                    >
                                       Privacy Policy
                                    </span>
                                    , which explains how to opt out of offers
                                    and promos
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </DialogPanel>
               </div>
            </div>
         </Dialog>
         <SignUpForm
            isSignupModalOpen={isSignupModalOpen}
            setIsSignupModalOpen={setIsSignupModalOpen}
            setIsAuthModalOpen={setIsAuthModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
            handleSignup={handleSignup}
            handleChange={handleChange}
            form={form}
            errors={errors}
            loading={loading}
            termsIsChecked={termsIsChecked}
            setTermsIsChecked={setTermsIsChecked}
         />
         <LoginAuth
            setIsSignupModalOpen={setIsSignupModalOpen}
            isLoginModalOpen={isLoginModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
            isAuthModalOpen={isAuthModalOpen}
            setIsAuthModalOpen={setIsAuthModalOpen}
            setAuth={setAuth}
            setOpen={setOpen}
            handleLogin={handleLogin}
            handleResetPassword={handleResetPassword}
            isForgotModalOpen={isForgotModalOpen}
            setIsForgotModalOpen={setIsForgotModalOpen}
            isContinueModalOpen={isContinueModalOpen}
            setIsContinueModalOpen={setIsContinueModalOpen}
            handleChange={handleChange}
            form={form}
            errors={errors}
            loading={loading}
            termsIsChecked={termsIsChecked}
            setTermsIsChecked={setTermsIsChecked}
         />
         <TermsModal
            isOpen={isTermsOpen}
            onClose={() => setIsTermsOpen(false)}
         />
         <PrivacyModal
            isOpen={isPrivacyOpen}
            onClose={() => setIsPrivacyOpen(false)}
         />
      </>
   );
};

export default Auth;
