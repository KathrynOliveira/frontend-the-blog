import { Loader } from "@/components/Loader";
import { PostFeatured } from "@/components/PostFeatured";
import PostList from "@/components/PostList";
import { Suspense } from "react";

export const dynamic = 'force-static';

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loader className="min-h-20 mb-16" />}>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<Loader className="min-h-20 mb-16" />}>
        <PostList />
      </Suspense>
    </>
  );
}
