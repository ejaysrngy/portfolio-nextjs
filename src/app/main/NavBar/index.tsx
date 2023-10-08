import { useState, useEffect } from "react";

export default function NavBar(props: {
  navLinks: Array<{ text: string; link: string }>;
}) {
  const { navLinks } = props;

  const [navBg, setNavBg] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos >= 100) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`flex justify-between sticky top-0 transition-all duration-200 ease-in-out ${
        navBg ? `bg-red-accents` : "bg-transparent"
      }`}
    >
      {navLinks.map((link, index) => {
        return (
          <a href={link.link} className="font-poppins text-5xl font-bold">
            {link.text.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
