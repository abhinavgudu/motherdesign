// HeroCarousel.tsx – simple auto‑rotating carousel for the hero section
// No external library is used; it relies on React state and a timer.
// The four Google‑Maps Street‑View image URLs are hard‑coded as they were
// provided by the client.

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  // 1 – higher resolution
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7jQRLY59coif9yadGTMHkgkXvOy6gwuN3L4A_rARBTyEIjvkXPF2MCWuEMPBZ-Mqy_-VpanJEyJ8EyE3uM4VkEUhviB-ZdAL3Z3__vYueXW-Y7lJxYoyWhKeZxM6wYDt_FRxDZl1-dXyg=w1280-h720-k-no",
  // 2 – higher resolution
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TQuqqlJ91_QEgGS41MFYx4OHQaARDrRCZYL_YndQjFB9j--NueIakJ4jeFvf-1C_QP6u_X1qS2_1YyWkQCG2Ml-NmGgPnxAvGdbYCRwtoqd4gA3iMgx3-QEa-6gQcBmf0Bhzf6EQ=w1280-h720-k-no",
  // 3 – same as 2 (higher resolution)
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TQuqqlJ91_QEgGS41MFYx4OHQaARDrRCZYL_YndQjFB9j--NueIakJ4jeFvf-1C_QP6u_X1qS2_1YyWkQCG2Ml-NmGgPnxAvGdbYCRwtoqd4gA3iMgx3-QEa-6gQcBmf0Bhzf6EQ=w1280-h720-k-no",
  // 4 – higher resolution (original is small, increase)
  "https://lh3.googleusercontent.com/grass-cs/AABkmLef_8F0rvDfqSaGIXhUgatlqSVUA7l0JGZQLA3vnVojDAF4ptSeC50RCp4tCrRNoRtNqXeDF9VgII9TNOmiWqP5-tqI0K1NH7MyES_wlHh4K2NyCMvqjFDGQZccdLJ9wk8cX57F9DVNgidF=w1280-h720-k-no"
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <Image
      src={images[index]}
      alt="Mother's Design & Construction hero image"
      fill
      priority
      className="object-cover object-top transition-opacity duration-700 ease-in-out"
    />
  );
}

