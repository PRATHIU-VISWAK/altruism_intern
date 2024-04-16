import React from "react";

export const Footer = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fbcfe8" fill-opacity="1" d="M0,128L40,160C80,192,160,256,240,240C320,224,400,128,480,112C560,96,640,160,720,192C800,224,880,224,960,229.3C1040,235,1120,245,1200,261.3C1280,277,1360,299,1400,309.3L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    <div className="bg-pink-200 text-pink-900 py-8 bottom-0 w-full">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">SHE SHARE</h3>
          <div className="mb-2">About Us</div>
          <div className="mb-2">Careers</div>
          <div className="mb-2">Contact Us</div>
          <div className="mb-2">Follow Us</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <div className="mb-2">FAQs</div>
          <div className="mb-2">Cancellation Policy</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Become a Host</h3>
          <div className="mb-2">Hosting Resources</div>
          <div className="mb-2">Hosting Responsibility</div>
          <div className="mb-2">Share a Room</div>
          <div className="mb-2">Pets</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Terms & Privacy </h3>
          <div className="mb-2">Terms & Conditions</div>
          <div className="mb-2">Privacy Policy</div>
        </div>
      </div>
    </div>
    </>
  );
};
