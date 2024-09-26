import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2">
      <img src="./assets/Purple-Shape.svg" alt="1" className="-rotate-[45deg] h-64 md:h-80 lg:h-[400px]" />
      <img src="./assets/Pink-Shape.svg" alt="2" className="absolute -rotate-[30deg] h-64 md:h-80 lg:h-[400px]"/>
      <img src="./assets/Blue-Shape.svg" alt="3" className="absolute -rotate-[15deg] h-64 md:h-80 lg:h-[400px]" />
      <img src="./assets/Hero-Model.png" alt="4" className="absolute h-64 md:h-80 lg:h-[400px]" />
      </div>
      <div className="lg:flex-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight lg:text-7xl lg:leading-tight lg:py-2">Host Your Website in less than 5 minutes.</h1>
        <p className="font-lato text-gray-800 lg:text-xl lg:py-2">With Hosterr, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
        <form action="" className="flex flex-col gap-4 md:flex-row lg:flex-row lg:gap-6 lg:py-2">
            <input className="rounded-md px-4 py-3 placeholder:text-gray-800 lg:bg-white lg:w-80 lg:rounded-none" type="email" placeholder="Enter email address"/>
            <button className="rounded-md px-4 py-3 bg-purple-400 hover:bg-purple-700 text-white font-playfair">Join The Waitlist</button>
        </form>
        <div className="flex gap-2 ">
            <img src="./assets/Checkmark.svg" alt="check"/>
            <p className="font-lato text-gray-800 lg:text-lg">No Spam,Ever Unsubscribe Anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
