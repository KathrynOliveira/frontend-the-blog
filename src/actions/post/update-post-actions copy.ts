"use server";

import { PostUpdateSchema } from "@/lib/post/validations";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { makePartialPublicPost, makePublicPostFromDb, PublicPost } from "@/dto/post/dto";
import { PostModel } from "@/models/post/post-model";
import { postRepository } from "@/repositories/post";
import { revalidateTag } from "next/cache";

type UpdatePostActionState = {
  formState: PublicPost;
  errors: string[];
  success?: true;
};

export async function updatePostAction(
  prevState: UpdatePostActionState,
  formData: FormData
): Promise<UpdatePostActionState> {
  // TODO: verificar se o usuário tá logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["Dados inválidos"],
    };
  }

  const id = formData.get('id').toString() || ''

  if (!id || typeof id !== 'string') {
     return {
       formState: prevState.formState,
       errors: ["ID inválido"],
     };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParsedObj = PostUpdateSchema.safeParse(formDataToObj);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error.format());
    return {
      errors,
      formState: makePartialPublicPost(formDataToObj),
    };
  }

  const validPostData = zodParsedObj.data;
  const newPost: PostModel = {
    ...validPostData
  };

  let post;

  try {
   post = await postRepository.update(id, newPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: makePartialPublicPost(formDataToObj),
        errors: [e.message],
      };
    }

    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: ["Erro desconhecido"],
    };
  }

  revalidateTag("posts");
  revalidateTag(`post-${post.slug}`);

  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: true,
  }
}
