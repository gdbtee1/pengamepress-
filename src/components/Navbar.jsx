import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Books", "/books"],
  ["Publishing", "/publishing"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#111]/10 bg-[#F8F4EE]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="font-serif text-2xl font-black">
          Pen Game Press
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-widest transition ${
                  isActive ? "text-[#B8860B]" : "text-[#111]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-[#B8860B] px-6 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#111] md:inline-flex"
        >
          Contact
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#111]/10 bg-[#F8F4EE] md:hidden">
          <div className="flex flex-col p-5">
            {links.map(([label, href]) => (
              <NavLink
                key={label}
                to={href}
                onClick={() => setOpen(false)}
                className="py-4 text-sm font-black uppercase tracking-widest"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}