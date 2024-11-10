import React from "react";
import Button from "../../Ui/Button";
import Image from "next/image";
const Content = () => {
  return (
    <>
      <div className="px-8 py-6">
        <div className="container flex w-full mx-auto">
          {/* Left Side */}
          <div className="flex flex-col w-2/6 gap-4">
            <div className="flex items-center gap-4 ">
              <Button item={"Rezervasyon Yap"} />
              <Image
                src={"/images/world.png"}
                width={60}
                height={60}
                alt="image"
                className="object-contain "
              />
            </div>
            <div>
              <p className="px-3 font-serif text-lg text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum vitae explicabo minima fugit consectetur labore odio
                laudantium. Quisquam provident iure quaerat porro optio
                cupiditate delectus, consectetur sint saepe accusamus,
                asperiores aliquid voluptatem earum quo vitae magnam libero
                dicta natus beatae veritatis debitis nihil atque unde! Dicta
                aperiam commodi itaque illo!
              </p>
            </div>
          </div>
          {/* Left Side */}
          {/* Right Side */}
          <div className="flex gap-4 h-[500px] ">
            <div className="w-[300px] h-[350px] border-2 border-[#FF851F] rounded-lg">
              <Image
                src={"/images/hero-img01.jpg"}
                width={600}
                height={600}
                alt="image"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="mt-10 w-[300px] h-[350px] border-2 border-[#FF851F] rounded-lg">
              <video
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-lg "
              >
                <source src="/images/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="mt-20 w-[300px] h-[350px] border-2 border-[#FF851F] rounded-lg">
              <Image
                src={"/images/hero-img02.jpg"}
                width={600}
                height={600}
                alt="image"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          {/* Right Side */}
        </div>
      </div>
    </>
  );
};

export default Content;
