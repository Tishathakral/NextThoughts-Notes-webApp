"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

const Hero = () => {
  const products = [
    {
      title: "Notes",

      thumbnail: "/products/image1.jpg",
    },
    {
      title: "Notes",

      thumbnail: "/products/image2.jpg",
    },
    {
      title: "Notes",

      thumbnail: "/products/image3.jpg",
    },
    {
      title: "Notes",

      thumbnail: "/products/image4.jpg",
    },
    {
      title: "Notes",

      thumbnail: "/products/image5.jpg",
    },
    {
      title: "Notes",

      thumbnail: "/products/image6.jpg",
    },
    {
      title: "Notes",

      thumbnail: "/products/image7.jpg",
    },
    {
      title: "Notes",

      thumbnail: "/products/image8.jpg",
    },
    {
      title: "Notes",

      thumbnail: "/products/image9.jpg",
    },
    {
      title: "Notes",

      thumbnail: "/products/image10.jpg",
    },
  ];

  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
};

export default Hero;
