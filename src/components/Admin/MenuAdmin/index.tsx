"use client";

import { logoutAction } from "@/actions/login/logout-action";
import {
  CircleXIcon,
  FileTextIcon,
  HourglassIcon,
  HouseIcon,
  LogOutIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = `bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 rounded-lg flex flex-col mb-8 sm:flex-row sm:flex-wrap sm:overflow-visible sm:h-auto ${
    !isOpen && "h-10 overflow-hidden"
  }`;
  const linkClasses =
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex transition hover:bg-slate-800 dark:hover:bg-slate-200 items-center justify-start gap-2 h-10 shrink-0 cursor-pointer";

  const openCloseBtnClasses =
    "text-blue-200 dark:text-blue-800 italic sm:hidden";
  
  function handleLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    startTransition(async () => {
      await logoutAction();
    })
  }
  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen((s) => !s)}
        className={[linkClasses, openCloseBtnClasses].join(" ")}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href="/admin/post/new">
        <PlusIcon />
        Criar post
      </Link>

      <a onClick={handleLogout} href="" className={linkClasses}>
        {isPending && (
          <>
            <HourglassIcon />
            Aguarde...
          </>
        )}

        {!isPending && (
          <>
            <LogOutIcon />
            Sair
          </>
        )}
      </a>
    </nav>
  );
}
