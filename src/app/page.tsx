import { Loader } from "@/components/Loader";
import PostList from "@/components/PostList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen dark:bg-slate-900 dark:text-slate-100">
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Header</h1>
      </header>

      <Suspense fallback={<Loader/>}>
          <PostList/>
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </div>
  );
}
