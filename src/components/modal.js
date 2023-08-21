import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";

const Modal = ({ show, close }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (show) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";

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
        className="fixed bottom-0 left-0 right-0 top-[96px] z-40 bg-black opacity-50 md:hidden"
        onClick={close}
      ></div>

      {/* Modal content */}
      <div
        className="fixed bottom-0 left-0 right-0 top-[96px] z-50 mb-[200px] flex h-[235px] w-full flex-col justify-center bg-[#1D1C1E] md:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-start justify-center gap-[42px] px-6 py-12 text-2xl leading-6 tracking-[2px] text-white">
          <button
            onClick={() => {
              close();
            }}
          >
            <Link
              className="text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline"
              href="/about"
            >
              OUR COMPANY
            </Link>
          </button>
          <button
            onClick={() => {
              close();
            }}
          >
            <Link
              className="text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline"
              href="/locations"
            >
              LOCATIONS
            </Link>
          </button>
          <button
            onClick={() => {
              close();
            }}
          >
            <Link
              className="text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline"
              href="
            /contact"
            >
              CONTACT
            </Link>
          </button>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
