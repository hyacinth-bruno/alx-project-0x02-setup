import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          ALX Project 2
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-700">
          <Link href="/home" className="transition hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-gray-900">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
