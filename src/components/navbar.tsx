import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Navigation } from "lucide-react";
import { NavigationMenuDemo } from "./navlinks";


function Navbar() {
  return (
    <div className="navbar bg-myWhite">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <details>
              <summary>Women</summary>
              <ul className="p-2">
                <li>
                  <Link href={"#"}>Tops</Link>
                </li>
                <li>
                  <Link href={"#"}>Pants</Link>
                </li>
                <li>
                  <Link href={"#"}>Acessories/Jewelry</Link>
                </li>
                <li>
                  <Link href={"#"}>Shoes</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center ">
        <div className="hidden lg:flex">
          <NavigationMenuDemo />
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

export default Navbar;
