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

export default function Home() {
  return (
    <div>
      <section className="mainSec1 relative">
        <Image src={secOneBg} alt="Background Image"></Image>
        <Container>
          <div className="bg-[#826F66] w-[45%] h-full flex justify-center items-center md:absolute md:top-0">
            <div className="flex flex-col justify-center text-white gap-5">
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
          <div className="flex flex-wrap justify-between gap-[3%]">
            <div className="main-card-1 w-[22%]">
              <Image
                src={tableware}
                alt="table-ware"
                className="w-[100%] object-cover"
              ></Image>
              <p className="text-center text-[18px] font-semibold mt-[10px]">
                TABLEWARE
              </p>
            </div>
            <div className="main-card-1 w-[22%]">
              <Image
                src={homeDecor}
                alt="table-ware"
                className="w-[100%] object-cover"
              ></Image>
              <p className="text-center font-semibold text-[18px] mt-[10px]">
                HOME DECOR
              </p>
            </div>
            <div className="main-card-1 w-[22%]">
              <Image
                src={holiday}
                alt="holiday"
                className="w-[100%] object-cover"
              ></Image>
              <p className="text-center text-[18px] font-semibold mt-[10px]">
                HOLIDAY
              </p>
            </div>
            <div className="main-card-1 w-[22%]">
              <Image
                src={collection}
                alt="collection"
                className="w-[100%] object-cover"
              ></Image>
              <p className="text-center text-[18px] font-semibold mt-[10px]">
                COLLECTION
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="sec-3 bg-white">
        <Container>
          <div className="sec-3 flex">
            <div className="sec-3-text w-[50%] flex flex-col gap-5 justify-center items-center bg-[#F7F6F5] text-center">
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
            <div className="sec-3-img w-[50%]">
              <Image
                src={offimage}
                alt="off-image"
                className="object-cover w-[100%]"
              ></Image>
            </div>
          </div>
        </Container>
      </section>
      <section className="sec-4 bg-white">
        <Container>
          <div className="sec-4 flex">
            <div className="sec-4-text w-[50%] flex flex-col gap-5 justify-center items-center bg-[#F7F6F5] text-center">
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
            <div className="sec-3-img w-[50%]">
              <Image
                src={vietnam}
                alt="off-image"
                className="object-cover w-[100%] h-full"
              ></Image>
            </div>
          </div>
          <div className="sec-4 flex">
            <div className="sec-3-img w-[50%]">
              <Image
                src={history}
                alt="off-image"
                className="object-cover w-[100%]"
              ></Image>
            </div>
            <div className="sec-4-text w-[50%] flex flex-col gap-5 justify-center items-center bg-[#F7F6F5] text-center">
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
    </div>
  );
}
