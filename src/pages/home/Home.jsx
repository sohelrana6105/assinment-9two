import React from "react";
import Testimonials from "../../components/Testimonials/Testimonials";
import Featured from "../../components/Featured/Featured";

const Home = () => {
  return (
    <>
      <div className="bg-[#41ff81]">
        <div className="carousel w-full md:w-9/12 ">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/HLPGZCBM/unnamed.png"
              className="w-full object-contain p-2 h-90"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/8gT9NSs8/desco.png"
              className="w-full object-contain p-1 h-90"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/q8DmvTh/1200x630wa.png"
              className="w-full object-contain p-1 h-90"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/gMnXxLR7/2770051-Gas-meter-1.jpg"
              className="w-full object-contain p-1 h-90"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      <Testimonials></Testimonials>
      <Featured></Featured>
    </>
  );
};

export default Home;
