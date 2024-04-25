import Container from "@/app/components/Container";
import Image from "next/image";
import secOneBg from "../public/assets/home-sec-1-bg.png";
import flower from "../public/assets/flower.png";
import tableware from "../public/assets/table-ware.png";
import homeDecor from "../public/assets/home-decor.png";
import collection from "../public/assets/collection.png";
import holiday from "../public/assets/holiday.png";
import offimage from "../public/assets/off-image.png";
import vietnam from "../public/assets/vietnam.png";
import history from "../public/assets/history.png";
import Link from "next/link";
import BestSellers from "./components/bestsellers/BestSellers";
import Blog from "./components/blog/Blog";
import NewArrivals from "./components/newarrivals/NewArrivals";
import News from "./components/newscollection/News";

const accessories = [
  {
    name: "TABLEWARE",
    imageSrc: tableware,
  },
  {
    name: "HOME DECOR",
    imageSrc: homeDecor,
  },
  { name: "HOLIDAY", imageSrc: holiday },
  { name: "COLLECTION", imageSrc: collection },
];

export default function Home() {
  return (
    <div>
      <section className="mainSec1 relative">
        <Image
          src={secOneBg}
          alt="Background Image"
          className="md:h-auto h-[50vh] w-[100%]"
        ></Image>
        <Container>
          <div className="bg-[#826F66] md:w-[45%] md:h-full flex justify-center items-center md:absolute md:top-0">
            <div className="flex flex-col justify-center text-white gap-5 py-5">
              <div className="sec-1-img">
                <Image
                  src={flower}
                  alt=""
                  className="mx-auto"
                  width={85}
                  height={81}
                ></Image>
              </div>
              <div className="content flex flex-col gap-3">
                <p className="text-[1rem]">
                  Handcrafted in Viet Nam since 1650
                </p>
                <h1 className="text-[2.25rem] text-center line-height-40 font-bold font-garamond">
                  BAT TRANG <br />
                  DINNER SET
                </h1>
              </div>
              <button className="bg-[#ffffff] text-[14px] font-semibold text-black w-[220px] py-[12px] px-[1rem] mx-auto">
                Shop Now
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#ffffff] md:py-[5%]">
        <Container>
          <div className="p-8 flex lg:items-center lg:justify-center overflow-x-auto">
            {accessories.map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col items-center justify-center min-w-[300px]"
              >
                <Image
                  src={item.imageSrc}
                  className="p-2 h-full w-full object-cover"
                  alt="team-img"
                />
                <div className="text-[1rem] font-semibold mt-2">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="sec-3 bg-white">
        <Container>
          <div className="sec-3 md:flex md:h-[438px]">
            <div className="sec-3-text md:w-[50%] flex flex-col py-2 gap-5 justify-center items-center bg-[#F7F6F5] text-center">
              <h2 className="text-[32px] font-garamond font-bold leading-32">
                Up to 40% off our <br /> Christmas collection
              </h2>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipiscing <br /> eli
                mattis sit phasellus mollis sit aliquam sit nullam <br /> neque
                ultrices.
              </p>
              <Link
                href="#"
                className="text-[14px] font-bold border-black border-b-2"
              >
                SHOP NOW
              </Link>
            </div>
            <div className="sec-3-img md:w-[50%]">
              <Image
                src={offimage}
                alt="off-image"
                className="object-cover w-[100%] h-full"
              ></Image>
            </div>
          </div>
        </Container>
      </section>
      <BestSellers />
      <section className="sec-4 bg-white">
        <Container>
          <div className="sec-4 md:flex md:h-[348px] overflow-hidden">
            {/* Section with text */}
            <div className="sec-4-text md:w-[50%] w-[100%] flex flex-col py-2 gap-5 justify-center items-center bg-[#F7F6F5] text-center">
              <h2 className="text-[32px] font-garamond font-bold leading-32">
                Made in viet Nam <br />
                since 1450
              </h2>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipiscing eli <br />
                mattis sit phasellus mollis sit aliquam sit nullam neque <br />
                ultrices.
              </p>
              <Link
                href="#"
                className="text-[14px] font-bold border-black border-b-2"
              >
                LEARN MORE
              </Link>
            </div>

            {/* Image section */}
            <div className="sec-3-img md:w-[50%]">
              <Image
                src={vietnam}
                alt="off-image"
                className="object-cover w-full h-[50vh] md:h-full"
              />
            </div>
          </div>

          <div className="sec-4 md:flex md:h-[348px] overflow-hidden">
            {/* Image section */}
            <div className="sec-3-img md:w-[50%] w-[100%]">
              <Image
                src={history}
                alt="off-image"
                className="object-cover w-[100%] h-[50vh] md:h-full"
              />
            </div>
            {/* Section with text */}
            <div className="sec-4-text md:w-[50%] w-[100%] py-2 flex flex-col gap-5 justify-center items-center bg-[#F7F6F5] text-center">
              <h2 className="text-[32px] font-garamond font-bold leading-32">
                Our History
              </h2>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipiscing eli <br />{" "}
                mattis sit phasellus mollis sit aliquam sit
              </p>
              <Link
                href="#"
                className="text-[14px] font-bold border-black border-b-2"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <NewArrivals />
      <Blog />
      <News />
    </div>
  );
}
