import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Loader } from "@/components/Loader";
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
          <Image className="group-hover:scale-105 transition" src='/images/bryen_0.png' width={1200} height={720} alt="Titulo do post"></Image>
        </Link>
        <div>

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
