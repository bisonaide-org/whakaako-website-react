"use client";
import Script from "next/script";
import backgroundImage from "../../../../public/photos/02_ForTalents/JoinTheCommunityPhotos/formBackground.jpg";

declare const Tally: any;

function CommunityApplicationForm() {
  return (
    <div className=" relative h-full min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
      ></div>
      <div className="relative z-10 py-16 max-w-md mx-auto">
        <iframe
          data-tally-src="https://tally.so/embed/mYGlpN?alignLeft=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="1242"
          title="Community application"
        ></iframe>
        <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onReady={() => {
            Tally.loadEmbeds();
          }}
        />
      </div>
    </div>
  );
}

export default CommunityApplicationForm;
