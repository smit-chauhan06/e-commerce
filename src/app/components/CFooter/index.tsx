import React from "react";

const CFooter = () => {
  return (
    <section className="bg-black w-[100%] flex justify-center items-center pt-[20px] pb-[20px]">
      <div className="content-div text-whiteColor grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="flex flex-col">
          <span className="font-medium text-[16px]">Support</span>
          <div className="mt-[5px] text-[14px]">
            <p>367, Aradhana Street, Bhavanipura</p>
            <p>Petlad, Anand, Gujarat, India</p>
          </div>
          <div className="mt-[5px] text-[14px]">
            <p>shop@gmail.com</p>
          </div>
          <div className="mt-[5px] text-[14px]">
            <p>+91 9876543210</p>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-[16px]">Account</span>
          <div className="mt-[5px] text-[14px]">
            <a href="#" className="hover:underline">
              My Account
            </a>
          </div>
          <div className="mt-[5px] text-[14px]">
            <a href="#" className="hover:underline">
              Login / Register
            </a>
          </div>
          <div className="mt-[5px] text-[14px]">
            <a href="#" className="hover:underline">
              Cart
            </a>
          </div>
          <div className="mt-[5px] text-[14px]">
            <a href="#" className="hover:underline">
              Whistlist
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-[16px]">Quick Links</span>
          <div className="mt-[5px] text-[14px]">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="mt-[5px] text-[14px]">
            <a href="#" className="hover:underline">
              Terms of use
            </a>
          </div>
          <div className="mt-[5px] text-[14px]">
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </div>
          <div className="mt-[5px] text-[14px]">
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-[16px]">Newsletter</span>
          <div className="mt-[5px] text-[14px]">
            <p>
              Subscribe to our newsletter to get the update news related to our
              latest properties and time-limited discounts.
            </p>
          </div>
          <div className="mt-[10px] text-[14px] w-[100px]">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className="bg-whiteColor p-[10px] text-[13px]  text-blackColor focus:outline-none font-extralight"
              />
              <button className="px-4  py-2 bg-blackColor text-white font-bold border border-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFooter;
