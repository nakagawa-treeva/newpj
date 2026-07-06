"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { office } from "@/data/site";

const navItems = [
  ["CONCEPT", "/#concept"],
  ["WORKS", "/works"],
  ["SERVICE", "/#service"],
  ["PROFILE", "/#profile"],
  ["FLOW", "/#flow"],
  ["CONTACT", "/#contact"]
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${office.name} トップへ`}>
        <span>{office.name}</span>
      </Link>
      <button className="menu-button" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {open ? <X size={22} /> : <Menu size={22} />}
        <span className="sr-only">メニュー</span>
      </button>
      <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="主要ナビゲーション">
        {navItems.map(([label, href]) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
        <a href={office.blog} target="_blank" rel="noreferrer">
          BLOG
        </a>
      </nav>
    </header>
  );
}
