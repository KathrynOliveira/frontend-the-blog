import { FileTextIcon, HouseIcon } from "lucide-react";
import Link from "next/link";

export function MenuAdmin() {
  const navClasses = "bg-slate-900 text-slate-100 rounded-lg flex flex-col overflow-hidden h-10 mb-8 sm:flex-row sm:flex-wrap";
  const linkClasses = "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex transition hover:bg-slate-800 items-center justify-start gap-2 h-10 shrink-0";

  return (
    <nav className={navClasses}>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>
    </nav>
  );
}
