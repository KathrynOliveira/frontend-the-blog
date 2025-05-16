import Link from "next/link";

type PostHeadingProps = {
    children: React.ReactNode;
    url: string;
    as?: "h1" | "h2";
}

const headingClassesMap = {
  h1: "text-2xl/tight sm:text-4xl font-extrabold",
  h2: "text-2xl/tight font-bold",
};

export function PostHeading({ children, url, as: Tag = "h2" }: PostHeadingProps) {
return (
  <Tag className={headingClassesMap[Tag]}>
    <Link className="hover:text-slate-600 transition" href={url}>{children}</Link>
  </Tag>
);
}