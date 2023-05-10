import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image
          src={"/images/logo_black.png"}
          alt="logo"
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Lorem ipsum dolor sit amet</h1>
    </header>
  );
};

export default Header;
