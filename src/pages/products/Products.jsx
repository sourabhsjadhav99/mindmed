import { NavLink, useLocation, Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import productsData from "../../utils/productsData";

export default function Products() {
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
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      {/* Dynamic Navigation */}
      <div className="flex gap-4 mb-5 border-b pb-3">
        {productsData.map((product) => (
          <NavLink
            to={product.path}
            key={product.id}
            className={({ isActive }) => {
              const isHomeActive =
                location.pathname === "/" || location.pathname === "/home";

              // Highlight "Home" for both "/" and "/home"
              const applyActiveClass =
                (product.path === "/" && isHomeActive) || isActive;
              return `font-semibold h-full flex items-center transition-colors duration-300 ease-in-out  ${
                applyActiveClass
                  ? "text-ternary border-b-4 border-ternary font-bold"
                  : "text-gray-500 border-b-4 border-transparent hover:border-secondary hover:text-secondary"
              }`;
            }}
          >
            {product.title}
          </NavLink>
        ))}
      </div>

      {/* Nested Routes Render Here */}
      <Outlet />
    </div>
  );
}
