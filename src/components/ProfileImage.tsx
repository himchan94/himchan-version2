"use client";

import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const ProfileImage = (props: Props) => {
  const { src, alt, className } = props;

  return (
    <div className={`relative w-32 h-42 ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className='object-contain'
        unoptimized={true}
      />
    </div>
  );
};

export default ProfileImage;
