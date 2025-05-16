import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Loader } from "@/components/Loader";
import { PostHeading } from "@/components/PostHeading";
import PostList from "@/components/PostList";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src='/images/bryen_0.png' width={1200} height={720} alt="Titulo do post" priority></Image>
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 block text-sm/tight" dateTime="2025-04-20">20/04/2025 10:00</time>
          <PostHeading as="h1" url="#">
            Lorem, ipsum dolor sit amet consectetur
          </PostHeading>
        </div>
      </section>
      <Suspense fallback={<Loader/>}>
        <PostList/>
      </Suspense>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
