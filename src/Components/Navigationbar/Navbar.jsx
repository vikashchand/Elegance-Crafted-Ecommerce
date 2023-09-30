
import React from "react";
import Basket from "../../assets/navbarImages/basket.svg";
import Heart from "../../assets/navbarImages/heart.svg";
import Currency from "../../assets/navbarImages/currency.svg";
import Avatar from "../../assets/navbarImages/avatar.svg";
import { NavLink ,Link} from "react-router-dom";

// import { Link, useState } from "react";

export default function Navbar() {
  return (
    <div className="bg-[#0F172A] md:w-screen  w-[450px] " >
      {/* Top Section */}
      <div className="py-4 px-4 sm:px-20 flex justify-between items-center">
        <div className="text-white font-bold text-lg">Elegance Crafted 🥀</div>
        <div className="space-x-2 flex">
          <NavLink to="/Cart" className="text-white flex items-center space-x-2">
            <img src={Basket} alt="basket" />
           
            <span
              className="text-[var(--White, #FFF)] font-NotoSans text-[1.125rem] font-bold"
              style={{
                width: "1rem",
                height: "1rem",
                flexShrink: 0,
              }}
            >
              {/* Shopping */}
            </span>
            
          </NavLink>
          <button className="text-white flex items-center space-x-2">
            <img src={Heart} alt="heart.svg" />
            <span
              className="text-[var(--White, #FFF)] font-NotoSans text-[1.125rem] font-bold"
              style={{
                width: "1rem",
                height: "1rem",
                flexShrink: 0,
              }}
            >
              {/* Heart */}
            </span>
          </button>
          <button className="text-white flex items-center space-x-2">
            <img src={Currency} alt="currency" />
            <span
              className="text-[var(--White, #FFF)] font-NotoSans text-[1.125rem] font-bold"
              style={{
                width: "1rem",
                height: "1rem",
                flexShrink: 0,
              }}
            >
              {/* Heart */}
            </span>
          </button>
          <button className="text-white flex items-center space-x-2">
            <img src={Avatar} alt="Avatar" className="rounded-lg"/>
            <span
              className="text-[var(--White, #FFF)] font-NotoSans text-[1.125rem] font-bold"
              style={{
                width: "1rem",
                height: "1rem",
                flexShrink: 0,
              }}
            >
              {/* Currency */}
            </span>
          </button>
        </div>
      </div>

      {/* Line Separator */}
      <div className="h-px bg-[#DEE2E6] opacity-25"></div>

      {/* Bottom Section */}
      <div className="py-2 px-4 sm:px-20 flex justify-between items-center">
        <div className="space-x-4">
            <button className="text-white hover:bg-[#1E293B] p-4 rounded-md">Store</button>
            <button className="text-white hover:bg-[#1E293B] p-4 rounded-md">Designer</button>
            <button className="text-white hover:bg-[#1E293B] p-4 rounded-md">Categories</button>
        </div>
        <div className="w-[15rem] flex items-center bg-[#94A3B81A] rounded-lg">
          <div className="w-10 h-10 p-2 rounded-tl-6 rounded-bl-6 ">
            {/* Search Icon */}
            <button className="text-white flex items-center space-x-2">
              {/* Search SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.4001 3.50002C4.63279 3.50002 3.2001 4.93271 3.2001 6.70002C3.2001 8.4673 4.63279 9.90002 6.4001 9.90002C8.16738 9.90002 9.6001 8.4673 9.6001 6.70002C9.6001 4.93271 8.16738 3.50002 6.4001 3.50002ZM1.6001 6.70002C1.6001 4.04906 3.74913 1.90002 6.4001 1.90002C9.05106 1.90002 11.2001 4.04906 11.2001 6.70002C11.2001 7.73669 10.8715 8.69658 10.3127 9.48122L14.1658 13.3343C14.4782 13.6467 14.4782 14.1533 14.1658 14.4657C13.8534 14.7781 13.3468 14.7781 13.0344 14.4657L9.1813 10.6126C8.39666 11.1714 7.43676 11.5 6.4001 11.5C3.74913 11.5 1.6001 9.35098 1.6001 6.70002Z"
                  fill="#64748B"
                />
              </svg>
            </button>
          </div>
          <input
            className="flex-1 ml-2 text-[#94A3B8] text-sm bg-transparent border-transparent focus:border-transparent focus:ring-0"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

