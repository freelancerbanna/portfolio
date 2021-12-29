import { MenuList } from "..";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const menu = document.getElementById("menu");
    const allLi = menu.querySelectorAll("li");
    function linkAction() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
      setMenuActive(false);
    }
    allLi.forEach((n) => n.addEventListener("click", linkAction));
  }, []);
  return (
    <header>
      <nav className="nav bd_grid">
        <Link href="/">
          <a className="nav_logo">
            <span style={{ color: "var(--second-color)" }}>Hasanul</span>
            <span style={{ color: "var(--first-color)" }}>Haque</span>
            <span style={{ color: "var(--second-color)" }}>Banna</span>
          </a>
        </Link>
        <ul id="menu" className={menuActive ? "show" : undefined}>
          {MenuList &&
            MenuList.map((n) => (
              <li key={n.id}>
                <Link href={`${n.href}`}>
                  <a>{n.name}</a>
                </Link>
              </li>
            ))}
          <li></li>
        </ul>
        <i onClick={() => setMenuActive(!menuActive)} className="toggleMenu">
          <BiMenuAltRight />
        </i>
      </nav>
    </header>
  );
};

export { Header };
