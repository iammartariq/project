"use client";
import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import ConnectAudience from "./ConnectAudience";
import { X } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ Fixed import
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

const Auth = ({ open, setOpen }: { open: boolean; setOpen: (val: boolean) => void }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const router = useRouter();
  const { login } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    termsIsChecked?: string;
  }>({});
  const [termsIsChecked, setTermsIsChecked] = useState(false);

  // Validation
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
      newErrors.termsIsChecked = "You must agree to the terms and conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  // Signup handler
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const result = await registerUser(form);
      setLoading(false);

      if (result.errors) {
        toast.error(result.errors);
      } else {
        toast.success("Signed up successfully, Please login!");
        setForm(initialState);
        setOpen(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Registration failed. Please try again.");
    }
  };

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const result = await signInUser(form);
      setLoading(false);

      if (result.errors) {
        toast.error(result.errors);
      } else if (result.user) {
        toast.success("Welcome back!");
        login(result.user);
        setForm(initialState);
        setOpen(false);
        router.push("/renewme-home");
      } else {
        toast.error("Login failed - no user data received");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Login failed. Please try again.");
    }
  };

  // Password reset handler
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await forgotPassword(form);
      setLoading(false);

      if (result.link && !result.emailSent) {
        toast.error(result.link);
      } else {
        toast.success("Reset link sent to your email. Please check!");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Reset password failed. Please try again.");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[1563px] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-[#F8F8F8] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-[25px] lg:gap-[20px] 2xl:gap-[32.5px] py-[66px] lg:py-[0px] px-[23px] 2xl:px-[0px] 2xl:pl-[92px] 2xl:pr-[98px] h-full 2xl:h-auto">
                  {/* Close button */}
                  <button
                    onClick={() => {
                      setOpen(false);
                      setTermsIsChecked(true);
                    }}
                    className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px] bg-[#D9D9D9] rounded-full size-[24px] lg:size-[30px] xl:size-[50px] flex justify-center items-center cursor-pointer"
                  >
                    <X className="text-black size-[14px] lg:size-[18px] xl:size-auto" />
                  </button>

                  {/* Left side content */}
                  <ConnectAudience />

                  {/* Right side form */}
                  <div className="order-1 lg:order-2 flex items-center lg:w-1/2 2xl:w-auto">
                    <div className="bg-white rounded-[28px] pt-[50px] pb-[23px] xl:py-[60px] 2xl:py-[126px] px-[23px] xl:px-[30px] 2xl:px-[47px] flex flex-col gap-[30px] sm:gap-[41px]">
                      <div className="flex flex-col items-center gap-[5px] sm:gap-[12px] xl:gap-[17px]">
                        <div className="text-[20px] sm:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold leading-[28px] text-center">
                          Create a free account to save your preferences
                        </div>
                        <div className="sm:text-[20px] xl:leading-[28px]">
                          Have a Renewme account?{" "}
                          <span
                            onClick={() => {
                              toast.info("Switch to login form here");
                            }}
                            className="text-[#0066FF] cursor-pointer underline"
                          >
                            Log in
                          </span>
                        </div>
                      </div>

                      {/* Sign Up button */}
                      <button
                        onClick={() => {
                          toast.info("Open signup modal here");
                          setTermsIsChecked(true);
                        }}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "Sign Up"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {/* Terms and Privacy Modals */}
      <TermsModal open={isTermsOpen} setOpen={setIsTermsOpen} />
      <PrivacyModal open={isPrivacyOpen} setOpen={setIsPrivacyOpen} />
    </>
  );
};

export default Auth;
