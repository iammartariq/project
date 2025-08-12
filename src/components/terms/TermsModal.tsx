import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";

interface TermsModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TermsModal = ({ open, setOpen }: TermsModalProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
        <div className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 relative w-full max-w-4xl max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Terms & Conditions
            </h2>
            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
              <p>
                <strong>Last Updated: January 2025</strong>
              </p>
              <p>
                Welcome to RenewMe. These Terms of Service ("Terms") govern your use of our wellness platform and services.
              </p>
              
              <h3 className="font-semibold text-lg">1. Acceptance of Terms</h3>
              <p>
                By accessing and using RenewMe services, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
              
              <h3 className="font-semibold text-lg">2. Description of Service</h3>
              <p>
                RenewMe provides wellness and meditation content, including audio tracks, guided meditations, and related wellness resources.
              </p>
              
              <h3 className="font-semibold text-lg">3. User Accounts</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>
              
              <h3 className="font-semibold text-lg">4. Subscription Terms</h3>
              <p>
                Premium features require a paid subscription. Subscriptions automatically renew unless cancelled. You may cancel at any time through your account settings.
              </p>
              
              <h3 className="font-semibold text-lg">5. Prohibited Uses</h3>
              <p>
                You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. You may not violate any local, state, national, or international law.
              </p>
              
              <h3 className="font-semibold text-lg">6. Limitation of Liability</h3>
              <p>
                RenewMe shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
              </p>
              
              <h3 className="font-semibold text-lg">7. Contact Information</h3>
              <p>
                For questions about these Terms, please contact us at support@myrenewme.com
              </p>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TermsModal;