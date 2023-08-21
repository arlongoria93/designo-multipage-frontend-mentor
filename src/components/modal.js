import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactDOM from "react-dom";

const Modal = ({ show, close }) => {
  const router = useRouter();

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (show) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [show, close]);

  if (!show) {
    return null; // Don't render anything if 'show' is false
  }

  const modalContent = (
    <>
      {/* Semi-transparent overlay */}
      <div
        className="fixed bottom-0 left-0 right-0 top-[96px] z-40 bg-black opacity-50"
        onClick={close}
      ></div>

      {/* Modal content */}
      <div
        className="fixed bottom-0 left-0 right-0 top-[96px] z-50 mb-[200px] flex h-[235px] w-full flex-col justify-center bg-[#1D1C1E]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-start justify-center gap-[42px] px-6 py-12 text-2xl leading-6 tracking-[2px] text-white">
          <button
            onClick={() => {
              router.push("/about");
              close();
            }}
          >
            <h1 className="text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline">
              OUR COMPANY
            </h1>
          </button>
          <button
            onClick={() => {
              router.push("/locations");
              close();
            }}
          >
            <h1 className="text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline">
              LOCATIONS
            </h1>
          </button>
          <button
            onClick={() => {
              router.push("/contact");
              close();
            }}
          >
            <h1 className="text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline">
              CONTACT
            </h1>
          </button>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
