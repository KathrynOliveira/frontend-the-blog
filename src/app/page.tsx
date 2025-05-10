import { Loader } from "@/components/Loader";
import PostList from "@/components/PostList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <header>Header</header>

      <Suspense fallback={<Loader/>}>
          <PostList/>
      </Suspense>

      <footer>
          Footer
      </footer>
    </div>
  );
}
