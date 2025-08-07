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
            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}

      <div
        className="fixed inset-0 bg-black/50 
      backdrop-blur-xs flex items-center justify-center z-50"
      >
        <div className="bg-slate-100 p-6 rounded-lg 
        max-w-2xl mx-6 flex flex-col gap-6 dark:text-black shadow-lg
        shadow-black/30 text-center"
        >
          <h3 className="text-xl font-extrabold">Título do diálogo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            impedit porro dolores facere, molestiae placeat eveniet
            exercitationem quod quo error perspiciatis sunt eaque quos dolorum
            sed, neque eum corporis vitae.
          </p>
          <div className="flex items-center justify-around">
            <button
              className="bg-slate-200 hover:bg-slate-300 transition text-slate-950 flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer"
              autoFocus
            >
              Cancelar
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 transition text-blue-50 flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
