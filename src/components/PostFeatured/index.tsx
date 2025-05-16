import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostCoverImage
              linkProps={{
                href: "/post/asdfasdf",
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: "/images/bryen_9.png",
                alt: "Alt da imagem",
                priority: true,
              }}
            />
            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-600 block text-sm/tight"
                dateTime="2025-04-20"
              >
                2025-04-20 10:00
              </time>
    
              <PostHeading as="h2" url="#">
                Lorem ipsum dolor sit amet
              </PostHeading>
    
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                sapiente nam non est dicta aut sunt tenetur recusandae nemo
                exercitationem.
              </p>
            </div>
          </section>
  );
}
