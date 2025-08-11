import { Loader } from "@/components/Loader";
import PostsListAdmin from "@/components/Admin/PostsListAdmin";
import type { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Post",
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<Loader className="mb-16 text-white" />}>
      <PostsListAdmin />
    </Suspense>
  );
}
