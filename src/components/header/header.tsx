import Image from "next/image";
import iconOakyardOnDark from "../../../public/photos/logos/Icon_Oakyard_on_dark.svg";
import playIcon from "../../../public/photos/Shared_Icons/play.svg";

interface Props {
  backgroundImage: string;
  heading: string;
  text: string;
  playTitle?: string;
  playText?: string;
}

const Header: React.FC<Props> = ({
  backgroundImage,
  heading,
  text,
  playTitle,
  playText,
}) => {
  return (
    <div className=" relative h-full min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
      ></div>
      <div className="relative z-10 min-h-screen max-w-5xl flex flex-col justify-center px-5 md:p-14  mx-auto ">
        <div className="flex items-center gap-5">
          <Image
            className="hidden md:block"
            src={iconOakyardOnDark.src}
            alt="oakyard logo"
            width={150}
            height={150}
          />
          <h1 className=" font-display text-yellowGreen text-5xl md:text-7xl mb-6">
            {heading}
          </h1>
        </div>
        <div className=" max-w-[700px] pl-0 md:pl-[170px]">
          <p className=" text-white text-quote whitespace-pre-wrap ">{`${text}`}</p>
          {playTitle && (
            <div className="absolute mt-5 text-white flex  justify-start items-center gap-6">
              <div>
                <Image
                  src={playIcon.src}
                  width={50}
                  height={50}
                  alt="play icon"
                />
              </div>
              <div>
                <span className="font-bold">{playTitle}</span>
                <span className="font-normal">{playText}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
