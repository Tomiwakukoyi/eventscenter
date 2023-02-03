import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Link href="/" passHref>
            <Image src={"/images/logo_black.png"} width={50} height={50} />
          </Link>

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
        <p className="title">The home of Events</p>
      </div>
    </header>
  );
};

export default Header;
