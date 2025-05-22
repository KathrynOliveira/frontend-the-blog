import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export default async function PostList() {
  const posts = await postRepository.findAll();
  return (
    <div className="grid frid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              linkProps={{
                href: `/post/${post.slug}`,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <PostSummary
              postLink={post.slug}
              postHeading='h2'
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
