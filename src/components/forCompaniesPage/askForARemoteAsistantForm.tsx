"use client";

import Script from "next/script";
import HowItWorks from "@/components/forCompaniesPage/HowItWorks";

declare const Tally: any;

function AskForARemoteAssistantForm() {
  return (
    <div id="#Howitworks" className="relative z-10 py-16 max-w-md mx-auto">
      <iframe
        data-tally-src="https://tally.so/embed/npoEZE?alignLeft=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="1213"
        title="Ask for a remote assistant"
      ></iframe>
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onReady={() => {
          Tally.loadEmbeds();
        }}
      />
    </div>
  );
}

export default AskForARemoteAssistantForm;
