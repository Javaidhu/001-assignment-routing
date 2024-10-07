import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="flex items-center justify-center gap-x-4 ring-blue-700 p-5">
        <li><Link href="/">Home</Link>|</li>
        <li><Link href="/country">Country</Link>|</li>
        <li><Link href="/login">Login</Link>|</li>
      </ul>
    </nav>
  );
}
