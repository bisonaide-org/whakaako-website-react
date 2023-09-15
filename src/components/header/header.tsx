import Image from "next/image";
import whiteLogo from "../../../public/photos/white_Logo.svg";

interface Props {
  backgroundImage: string;
  heading: string;
  text: string;
}

const Header = (props: Props) => {
  return (
    <div className=" relative h-full min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
      ></div>
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="flex justify-center px-5 pl-14  text-white gap-6">
          <div>
            <Image src={whiteLogo.src} alt="logo" width={135} height={152} />
          </div>
          <div>
            <h1 className=" font-display text-yellowGreen text-7xl py-2 mb-6">
              {props.heading}
            </h1>
            <p className=" text-quote w-1/2">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
