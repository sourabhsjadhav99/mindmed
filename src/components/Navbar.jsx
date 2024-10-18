// import { NavLink } from "react-router-dom";
// import navdata from "../utils/navbarData";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-600 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <NavLink to="/" className="text-white">
//             Mindmaid
//           </NavLink>
//         </div>
//         {/* Navigation Links */}
//         <ul className="flex space-x-4">
//           {navdata.map((item, index) => (
//             <li key={index}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-400 font-semibold" // Style for the active link
//                     : "text-white hover:text-gray-400" // Style for the inactive link
//                 }
//               >
//                 {item.title}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
import { NavLink, useLocation } from "react-router-dom";
import navdata from "../utils/navbarData";

export default function Navbar() {
  const location = useLocation(); // Hook to get the current URL location

  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <NavLink to="/" className="text-white">
            Mindmaid
          </NavLink>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-4">
          {navdata.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  const isHomeActive =
                    location.pathname === "/" || location.pathname === "/home";
                  
                  // Highlight "Home" for both "/" and "/home"
                  const applyActiveClass =
                    (item.path === "/" && isHomeActive) || isActive;

                  return applyActiveClass
                    ? "text-blue-400 font-semibold" // Style for the active link
                    : "text-white hover:text-gray-400"; // Style for the inactive link
                }}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
