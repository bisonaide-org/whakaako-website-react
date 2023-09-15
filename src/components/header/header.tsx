import Image from "next/image";
import whiteLogo from "../../../public/photos/white_Logo.svg";
import playIcon from "../../../public/play.svg";

interface Props {
  backgroundImage: string;
  heading: string;
  text: string;
  playTitle?: string;
  playText?: string;
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
            <p className=" text-quote w-1/2 mb-20">{props.text}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
