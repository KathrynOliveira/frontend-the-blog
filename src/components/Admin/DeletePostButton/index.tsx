'use client';

import { deletePostAction } from "@/actions/post/delete-post-actions";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostButtonProps = {
    id: string;
    title: string;
};
export function DeletePostButton({ id, title }: DeletePostButtonProps) {
    const [isPending, startTransition] = useTransition();

    function handleClick() {
        if(!confirm('Tem certeza?')) return;
        startTransition(async () => {
            const result = await deletePostAction(id);
            alert(`O result é: ${result}`);
        });
    }
    return (
      <button
        className="text-red-500 cursor-pointer transition [&_svg]:w-4 [&_svg]:h-4 
                hover:scale-120 hover:text-red-700 disabled:text-slate-600 disabled:cursor-not-allowed"
        arial-label={`Apagar post: ${title}`}
            title={`Apagar post: ${title}`}
            onClick={handleClick}
            disabled={isPending}
      >
        <Trash2Icon />
      </button>
    );
}