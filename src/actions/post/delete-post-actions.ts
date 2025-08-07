"use server";

import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";
export async function deletePostAction(id: string) {
  await asyncDelay(2000); 
  logColor(id);

  return id;

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