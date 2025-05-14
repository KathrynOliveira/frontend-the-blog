import { Container } from "@/components/Container";
import { Loader } from "@/components/Loader";
import PostList from "@/components/PostList";
import { Suspense } from "react";

export default async function Home() {
  return (
      <Container>
        <header>
            <h1 className="text-6xl font-bold text-center py-8">Header</h1>
        </header>

        <Suspense fallback={<Loader/>}>
            <PostList/>
        </Suspense>

        <footer>
          <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
        </footer>
      </Container>
  );
}
