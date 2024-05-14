"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";



const Hero = () => {
  const products = [
    {
      title: "Notes",
      link: "/image1.jpg",
      thumbnail: "/products/image1.jpg",
    },
    {
      title: "Notes",
      link: "/image2.jpeg",
      thumbnail: "/products/image2.jpg",
    },
    {
      title: "Notes",
      link: "/image3.jpeg",
      thumbnail: "/products/image3.jpg",
    },
    {
      title: "Notes",
      link: "/image3.jpeg",
      thumbnail: "/products/image4.jpg",
    },
    {
      title: "Notes",
      link: "/image3.jpeg",
      thumbnail: "/products/image5.jpg",
    },
    {
      title: "Notes",
      link: "/image3.jpeg",
      thumbnail: "/products/image6.jpg",
    },
    {
      title: "Notes",
      link: "/image3.jpeg",
      thumbnail: "/products/image7.jpg",
    },
    {
      title: "Notes",
      link: "/image3.jpeg",
      thumbnail: "/products/image8.jpg",
    },
    {
      title: "Notes",
      link: "/image3.jpeg",
      thumbnail: "/products/image9.jpg",
    },
    {
      title: "Notes",
      link: "/image3.jpeg",
      thumbnail: "/products/image10.jpg",
    },
  ];

  return (
    <div className="space-y-4">
      <HeroParallax products={products} />
    </div>
  );
};

export default Hero;
