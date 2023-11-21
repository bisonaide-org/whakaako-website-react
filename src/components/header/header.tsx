import Image from "next/image";
import iconOakyardOnDark from "../../../public/photos/logos/Icon_Oakyard_on_dark.svg";
import playIcon from "../../../public/photos/Shared_Icons/play.svg";
import Link from "next/link";

interface Props {
  backgroundImage: string;
  heading: string;
  text: string;
  playTitle?: string;
  playText?: string;
  isButton?: boolean;
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
      <div className="relative z-10 min-h-screen max-w-5xl flex flex-col justify-center px-5 pt-24 text-white md:grid md:grid-rows-5 md:grid-flow-col md:gap-6  md:px-0 md:pl-14 md:mx-auto md:pt-0 md:justify-start ">
        <div className="hidden md:block md:row-start-3 md:row-span-1">
          <Image
            src={iconOakyardOnDark.src}
            alt="oakyard logo"
            width={135}
            height={152}
          />
        </div>
        <div className="md:row-start-3 md:row-span-3 ">
          <h1 className=" font-display text-yellowGreen text-5xl md:text-7xl mb-6">
            {props.heading}
          </h1>
          <div className=" md:w-[540px] ">
            <p className=" text-quote mb-20 whitespace-pre-wrap ">{`${props.text}`}</p>
          </div>
          {props.playTitle && (
            <div className="flex  justify-start items-center gap-6">
              <div>
                <Image
                  src={playIcon.src}
                  width={49.47}
                  height={49.47}
                  alt="play icon"
                />
              </div>
              <div>
                <span className="font-bold">{props.playTitle}</span>
                <span className="font-normal">{props.playText}</span>
              </div>
            </div>
          )}
          {props.isButton && (
            <div className="text-center">
              <Link
                href="#"
                className="px-4 py-2 text-sm font-semibold font-display rounded-lg border-2 border-cyan hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Get started
              </Link>
            </div>
          )}
          {/* Jump to How It Works component when it is ready */}
        </div>
      </div>
    </div>
  );
};

export default Header;
