import { deletePostAction } from "@/actions/post/delete-post-actions";
import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import { DeletePostButton } from "../Admin/DeletePostButton";

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={`py-2 px-2 flex gap-2 items-center justify-between ${
              !post.published && "bg-slate-300"
            }`}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não publicado)
              </span>
            )}
            <DeletePostButton
              id={post.id}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
