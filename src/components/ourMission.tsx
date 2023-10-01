import React from "react";
import backgroundImage from "../../public/photos/01_landingPage/photos/our_mission/background.jpeg";
import Image from "next/image";

const array = [
    {
        imagePath: "/photos/01_landingPage/flashGREEN.png",
        content: "You are motivated but have a disadvantaged background",
        iconPath: "/photos/01_landingPage/1.png",
    },
    {
        imagePath: "/photos/01_landingPage/flashGREEN.png",
        content: "We offer free digital education with focus on practical training",
        iconPath: "/photos/01_landingPage/2.png",
    },
    {
        imagePath: "/photos/01_landingPage/flashGREEN.png",
        content: "Start to work with no need for migration",
        iconPath: "/photos/01_landingPage/3.png",
    },
    {
        imagePath: "/photos/01_landingPage/flashBLUE.png",
        content: "Become tutor and share your knowledge",
        iconPath: "/photos/01_landingPage/4.png",
    },
];

interface Props {
    imagePath: string,
    content: string,
    iconPath: string
}

export const IconComponent = ({imagePath, content, iconPath}: Props) => {
    return (
        <div className="flex flex-col w-1/4">
            <div className="flex flex-row justify-evenly items-center">
                <Image src={imagePath} alt="icon" width={150} height={150}/>
                <p className="w-24"> {content} </p>
            </div>
            <div className="flex justify-end w-[86%] items-center">
                <Image src={iconPath} alt="arrow" width={80} height={80}/>
            </div>
        </div>
    );
};

const OurMission = () => {
    return (
        <div
            className="flex flex-col w-full h-screen bg-no-repeat bg-cover "
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundPosition: "center center",
                    // opacity:"0.7"
            }}
        >
            <div className="h-1/4 flex flex-col justify-evenly text-white items-center">
                {/* Our Mission */}

                <p className="text-4xl "> Our Mission</p>

                <div className="w-[50%] flex text-center justify-center items-center">
                    People with passion can change the world for the better. The people
                    who are crazy enough to think they can change the world are the ones
                    who do.
                </div>
                <div className=" w-full text-center ">- Steve Jobs</div>
                <div className="w-36 border border-b-8 border-white rounded m-auto my-4 mb-1"></div>
            </div>
            {/* icons */}
            <div className="h-1/4 flex flex-row text-white  w-[80%] mx-auto ">
                {array.map((item, index) => (
                    <IconComponent
                        key={index}
                        imagePath={item.imagePath}
                        content={item.content}
                        iconPath={item.iconPath}
                    />
                ))}
            </div>

            {/*Right of Education */}
            <div className="h-1/2 w-[50%] flex flex-col mt-24 justify-evenly mx-auto items-center text-white">
                <div className="text-4xl w-[47%]">Right of education</div>
                <div className="w-[47%]  mx-auto flex flex-col gap-6">
                    <div>
                        We enable people who are disadvantaged due to gender, origin, faith
                        or social status to receive attractive vocational training. And we
                        do so in professions that can be practiced remotely.
                    </div>
                    <div>
                        We ensure that people do not have to leave their homes to fulfill
                        their family obligations, but can earn their living where they are
                        needed. At home.
                        <br/>
                        We encourage our students to become teacher themselves
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
