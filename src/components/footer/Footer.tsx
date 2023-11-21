import Image from "next/image";
import Link from "next/link";
import oakyardLogo from "../../../public/photos/05_Footer/Oakyard_Logo.png";
import linkedinLogo from "../../../public/photos/05_Footer/linkedinLogo.svg";
import footerBgImage from "../../../public/photos/05_Footer/Footer_bg_image.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center text-grayBodtText px-5 pt-16 pb-14 md:px-0 ">
      <div className=" relative w-full pb-48">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${footerBgImage.src})`,
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
        ></div>
        <div className="mt-10 ml-10 relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-15  text-white">
          <div>
            <div className="h-100">
              <Link href="https://www.oakyard.org">
                {/* When the domain name is clarified, it will be arranged again. */}
                <Image
                  src={oakyardLogo}
                  alt="profile"
                  className="object-center"
                  width={150}
                  height={100}
                />
              </Link>
            </div>
            <div className="ml-20 mt-9 text-white">
              <Link href="https://maps.app.goo.gl/dgMiVvFNm8X3vWY8A">
                <p>Adress:</p>
                <p>bisonaide gGmbH</p>
                <p>Riedlesweg 14</p>
                <p>89269 Vöhringen</p>
                <p>Germany</p>
              </Link>
            </div>
          </div>
          <div>
            <div className="h-100">
              <h2 className="text-display2 font-display font-normal">
                Contact
              </h2>
              <hr className=" w-20 h-[4px]  bg-white rounded" />
            </div>

            <div className="mt-10">
              <p>
                <Link href="tel:+49 (0)7306 33009-0">
                  Tel: +49 (0)7306 33009-0
                </Link>
              </p>
              <p>
                <Link href="mailto:info@bisonaide.org">
                  Mail: info@bisonaide.org
                </Link>
              </p>
              <p>Contact us</p>
              <Link href="https://www.linkedin.com/company/80333487">
                <Image
                  src={linkedinLogo}
                  alt="profile"
                  className="object-center"
                  width={90}
                  height={10}
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="h-100">
              <h2 className="text-display2 font-display font-normal">Legal</h2>
              <hr className=" w-20  h-[4px]  bg-white rounded" />
            </div>

            <div className="flex flex-col mt-10">
              <Link href="/documents/Privacy.pdf" target="_blank">
                Privacy Policy
              </Link>
              <Link href="/documents/Imprint.pdf" target="_blank">
                Imprint Document
              </Link>
              <Link
                href="/documents/Refund_and_Cancellation_Policy_for_Oakyard_Academy_Online_Courses.pdf"
                target="_blank"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
