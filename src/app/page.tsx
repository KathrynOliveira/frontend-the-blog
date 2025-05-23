import { Loader } from "@/components/Loader";
import { PostFeatured } from "@/components/PostFeatured";
import PostList from "@/components/PostList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <PostList />
      </Suspense>
    </>
  );
}
