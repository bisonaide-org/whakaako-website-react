"use client";

import Script from "next/script";
import { useState } from "react";

const SupportUsFinancally = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  return (
    <div className="flex justify-center items-center pt-16 max-w-5xl min-h-screen mx-auto">
      {scriptLoaded ? (
        // If the script is loaded, render the Betterplace donation form
        <div>
          <iframe
            src={`https://www.betterplace.org/en/donate/iframe/projects/128972?background_color=ffffff&color=003060&donation_amount=100&bottom_logo=true&default_payment_method=&default_interval=single&utm_campaign=external_donation_forms&utm_source=domain:%20127.0.0.1&utm_medium=project_128972&utm_content=127.0.0.1`}
            title="Betterplace Donation Form"
            className=" w-screen px-5 md:w-[600px] h-[1300px] lg:h-[1100px]"
          ></iframe>
        </div>
      ) : (
        // If the script is not yet loaded, display a loading spinner and link to form on the betterplace.org
        <div
          className=" h-72 px-5"
          id="betterplace_donation_iframe"
          style={{
            background:
              "transparent url('https://www.betterplace.org/assets/new_spinner.gif') 275px 20px no-repeat",
          }}
        >
          <strong>
            <a href="https://www.betterplace.org/de/donate/platform/projects/128972-it-ausbildung-und-vermittlung-fuer-benachteiligte-junge-erwachsene">
              Jetzt Spenden für „IT Ausbildung und Vermittlung für
              Benachteiligte junge Erwachsene“ bei unserem Partner
              betterplace.org
            </a>
          </strong>
        </div>
      )}
      <Script
        async
        src="https://betterplace-assets.betterplace.org/assets/load_donation_iframe.js"
        onReady={() => {
          setScriptLoaded(true);
        }}
      />
    </div>
  );
};

export default SupportUsFinancally;
