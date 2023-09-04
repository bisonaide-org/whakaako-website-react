import Link from "next/link";
import "./navbar.css";
import Whakaako_Stamp_On_White from "../../public/photos/Whakaako_Stamp_On_White.svg";
import Image from "next/image";

function NavBar() {
  return (
    <div className="h-16">
      <div className="w-full text-white mt-6 ">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <nav className="flex justify-between w-full">
            <div className="flex items-center space-x-4">
              <Link
                className="text-2xl flex justify-center items-center tracking-widest lowercase rounded-lg focus:outline-none focus:shadow-outline"
                href="#"
              >
                <Image
                  className="w-8 flex mt-2 mr-1"
                  src={Whakaako_Stamp_On_White}
                  alt="Whakaako Logo"
                />
                Whakaako
              </Link>
            </div>

            <div className="flex space-x-4">
              <Link
                className="px-4 py-2 text-xl font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="/whatwedo"
              >
                What we do
              </Link>
              <Link
                className="px-4 py-2 text-xl font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Take Action
              </Link>
              <Link
                className="px-4 py-2 text-xl font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white bg-pink-400 px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                <span>support us</span>
              </button>
              <button className="text-white px-4 py-2 text-sm font-semibold rounded-lg border border-green-500 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                <span>volunteer</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
