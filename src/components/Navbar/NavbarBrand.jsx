import { Link } from "react-scroll";

export default function NavbarBrand() {
  return (
    <Link
      to="hero"
      smooth
      duration={500}
      offset={-70}
      className="cursor-pointer bg-linear-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-2xl font-bold text-transparent"
    >
      Hasan
    </Link>
  );
}
