import React from "react";
import InfoBar from "@/components/InfoBar";
import Navbar from "@/components/Navbar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen bg-no-repeat bg-cover bg-[url('/images/landing-page/landing-page-bg.png')]">
      <Navbar className="pt-4 mb-9.5" />
      <InfoBar />
      <div className="relative max-w-[600px] w-[34%]">
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={(index) => (
            <div className="indicator w-3 h-3 rounded-full border-2 border-white bg-white"></div>
          )}
          arrows={false}
        >
          <div
            style={{
              textAlign: "center",
              background: "red",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            First Slide
          </div>
          <div
            style={{
              textAlign: "center",
              background: "orange",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            Second Slide
          </div>
          <div
            style={{
              textAlign: "center",
              background: "yellow",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            Third Slide
          </div>
          <div
            style={{
              textAlign: "center",
              background: "green",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            Fourth Slide
          </div>
          <div
            style={{
              textAlign: "center",
              background: "blue",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            Sixth Slide
          </div>
          <div
            style={{
              textAlign: "center",
              background: "indigo",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            Seventh Slide
          </div>
          <div
            style={{
              textAlign: "center",
              background: "violet",
              padding: "200px 0",
              fontSize: "30px",
            }}
          >
            Eight Slide
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default LandingPage;
