import { NavLink, useLocation } from "react-router-dom";
import navdata from "../utils/navbarData";
import { useRef, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import useClickOutside from "../hooks/useClickOutside";
import mindlogo from "../assets/images/mind_logo.png";
function Header() {
  const location = useLocation();
  const [isOpenNavLinks, setIsOpenNavLinks] = useState(false);

  // Ref for user menu
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setIsOpenNavLinks(false));

  // Toggle navigation links
  const toggleNavLinks = () => {
    setIsOpenNavLinks(!isOpenNavLinks);
  };

  return (
    <div className="relative w-full ">
      <nav className="bg-white w-full h-[90px] flex items-center justify-center px-2">
        <div className="w-[100%] md:w-[95%] lg:w-[90%] xl:w-[80%] h-full flex justify-between items-center ">
          <div className="min-w-[10%] h-full flex justify-center items-center gap-2">
            <div className="flex justify-center items-center">
              <img src={mindlogo} alt="" className="h-[40px] w-[40px]" />{" "}
            </div>
            <h3 className="text-3xl font-bold h-[80%] hidden md:flex justify-center items-center">
             <span className="text-secondary">Mindmed </span> <span className="text-ternary">Innovations</span>
            </h3>
          </div>

          {/* Middle Links (Hidden on small screens) */}
          <div className="min-w-[30%]  hidden md:flex gap-3 md:gap-5 h-[60%] justify-start">
            {navdata.map((link) => {
              return (
                <NavLink
                  to={link.path}
                  key={link.id}
                  className={({ isActive }) => {
                    const isHomeActive =
                      location.pathname === "/" ||
                      location.pathname === "/home";

                    // Highlight "Home" for both "/" and "/home"
                    const applyActiveClass =
                      (link.path === "/" && isHomeActive) || isActive;
                    return `font-semibold h-full flex items-center transition-colors duration-300 ease-in-out  ${
                      applyActiveClass
                        ? "text-ternary border-b-4 border-ternary font-bold"
                        : "text-gray-500 border-b-4 border-transparent hover:border-gray-200"
                    }`;
                  }}
                >
                  {link.title}
                </NavLink>
              );
            })}
          </div>
          <button className="md:hidden block" onClick={toggleNavLinks}>
            <IoMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      <div className="absolute left-0 bottom-0 w-full h-[7px] bg-gradient-to-r from-secondary  to-[#00d258]"></div>
      {/* Mobile Menu */}
      <div
        className={`fixed flex md:hidden flex-col w-full inset-0 bg-white text-gray-700 z-50 transform transition-transform duration-500 ease-in-out p-5 ${
          isOpenNavLinks ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="text-xl self-end mb-4" onClick={toggleNavLinks}>
          <IoClose />
        </button>
        <div
          className="flex flex-col items-start space-y-4 py-4 w-full"
          ref={menuRef}
        >
          {navdata.map((link) => {
            return (
              <div key={link.id} className="w-full border-b border-gray-300">
                <NavLink
                  to={link.path}
                  key={link.id}
                  className={({ isActive }) => {
                    const isHomeActive =
                      location.pathname === "/" ||
                      location.pathname === "/home";

                    // Highlight "Home" for both "/" and "/home"
                    const applyActiveClass =
                      (link.path === "/" && isHomeActive) || isActive;
                    return `font-semibold h-full flex items-center transition-colors duration-300 ease-in-out  ${
                      applyActiveClass
                        ? "text-ternary  font-bold"
                        : "text-gray-500 border-transparent hover:border-gray-200"
                    }`;
                  }}
                  onClick={toggleNavLinks}
                >
                  {link.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
