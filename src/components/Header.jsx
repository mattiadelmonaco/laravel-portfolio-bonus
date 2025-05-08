import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="w-[1200px] mx-auto py-5 flex justify-between items-center ">
        <h1 className="text-white text-5xl">LOGO</h1>
        <nav>
          <ul className="flex gap-5 text-white text-2xl">
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
