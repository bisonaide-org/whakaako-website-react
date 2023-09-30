import Header from "@/components/header/header";
import backgroundImage from "../../public/photos/01_landingPage/photos/background.jpg";
import WhatWeDoAndWhy from "@/components/whatWeDoAndWhy/whatWeDoAndWhy";
import OurMission from "@/components/ourMission";

const Whakaako: React.FC = () => {
    return (
        <div>
            <Header
                backgroundImage={backgroundImage.src}
                heading="Spark your future"
                text="With the whakaako initiative, we offer free IT training courses for disadvantaged people. Worldwide."
                playTitle="whakaako."
                playText="in 30 Seconds"
            />
            <WhatWeDoAndWhy/>
            <OurMission />
        </div>
    );
};

export default Whakaako;
