"use server";

import { logColor } from "@/utils/log-color";
export async function deletePostAction(formData: FormData) {
  const id = formData.get("id");

  logColor(id);

  // if (!id) {
  //   throw new Error("Post ID is required");
  // }

  // try {
  //   // Assuming you have a function to delete the post by ID
  //   await deletePostById(id);
  //   return { success: true, message: "Post deleted successfully" };
  // } catch (error) {
  //   console.error("Error deleting post:", error);
  //   return { success: false, message: "Failed to delete post" };
  // }
}