"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({path, prefetch = true, children}) {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <Link prefetch={prefetch} className={isActive ? 'text-blue-500': ''} href={path}>{children}</Link>
  )
}
