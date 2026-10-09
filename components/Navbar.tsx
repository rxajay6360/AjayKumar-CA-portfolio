"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="site-nav">
      <Link href="#about">About</Link>
      <Link href="#services">Services</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  );
}
