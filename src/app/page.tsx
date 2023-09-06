import Image from "next/image";
import Whakaako_Stamp_On_White from "../../public/photos/Whakaako_Stamp_On_White.svg";
import {BsFillPlayFill} from "react-icons/bs";
import backgroundImage from "../../public/photos/01_landingPage/photos/close-up-portrait-of-freelance-it-specialists-looking-at-laptop-screen-with-smile.jpg";

const Whakaako: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
            className="flex flex-col h-screen bg-opacity-80 relative"
        >
            <div className="flex justify-between flex-col items-start">
                <div className="grid grid-rows-5">
                    <div className="grid grid-cols-9 row-span-3  gap-6 h-[600px]  ">
                        <div className="text-white m-auto col-span-2">
                            <Image
                                className="w-56  "
                                src={Whakaako_Stamp_On_White}
                                alt="Whakaako Logo"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center col-span-7 h-full ">
                            <div className="grid gap-10  ">
                                <div className="row-span-6">
                                    <div className="text-[7rem] text-yellowGreen">
                                        Spark your feature.
                                    </div>
                                    <div className="text-xl mr-52 text-white">
                                        With the whakaako initiative, we offer free IT training
                                        courses for <br/> disadvantaged people.
                                        <br/>
                                        <div className="text-xl text-white">Worldwide.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 mb-10">
                        <div className="flex  justify-start items-center gap-10">
                            <div className="rounded-full  bg-yellowGreen w-20 h-20 ml-72 flex items-center justify-center">
                                <BsFillPlayFill className="text-white text-4xl"/>
                            </div>
                            <div className="font-bold text-white">
                                whakaako.<span className="font-normal">in 30 Seconds</span>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whakaako;
