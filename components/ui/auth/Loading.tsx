import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={120}
          height={120}
          className="animate-pulse duration-700 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Loading;
