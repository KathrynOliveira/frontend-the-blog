import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Loader } from "@/components/Loader";
import { PostCoverImage } from "@/components/PostCoverImage";
import PostList from "@/components/PostList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: '/post/asdfasdf',
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/bryen_9.png',
            alt: 'Alt da imagem',
            priority: true,
          }}
        />
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
