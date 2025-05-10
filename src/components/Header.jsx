import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-3 md:px-10 py-4 flex justify-between items-center gap-2">
        <div className="w-[100px] bg-neutral-100 p-1.5 rounded-xl">
          <a href="/">
            <img src="images/mdm-portfolio.png" alt="logo portfolio" />
          </a>
        </div>
        <nav>
          <ul className="flex gap-5 text-white text-lg">
            <li>
              <NavLink to="/">HomePage</NavLink>
            </li>
            <li>
              <NavLink to="/projects">I miei progetti</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
