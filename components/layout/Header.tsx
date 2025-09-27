import Link from "next/link";
import type { NavItem } from "@/interfaces";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Next.js Docs", href: "https://nextjs.org/docs", external: true }
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          ALX Project 2
        </Link>
        <nav className="flex gap-4 text-sm text-gray-600">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900"
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className="hover:text-gray-900">
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
