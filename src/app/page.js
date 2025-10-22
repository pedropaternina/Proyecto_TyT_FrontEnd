'use client'
import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Carousel3d from "./components/Carousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      <NavBar></NavBar>
      <Hero></Hero>
      <Carousel3d></Carousel3d>
      <Footer></Footer>
    </main>
  );
}
