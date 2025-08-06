import { Loader } from "@/components/Loader";
import PostsListAdmin from "@/components/PostsListAdmin";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export const metdada: Metadata = {
  title: 'Admin Post',
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<Loader className="mb-16 text-white" />}>
      <PostsListAdmin />
    </Suspense>
  );
}
