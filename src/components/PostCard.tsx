import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { HiTag as Tag } from "react-icons/hi2";

const PostCard = ({ post }: Readonly<{ post: Blog }>) => {
  return (
    <Link
      href={post.link}
      className="flex flex-col gap-4 p-4 border-2 border-dashed"
    >
      <div className="max-h-[50%] w-full">
        <Image
          src={post.image}
          alt={post.title}
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 justify-between h-full">
        <div>
          <h3 className="text-xl font-medium">{post.title}</h3>
          <p>{post.description}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Tag className="size-5" />
            {post.tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
          <p>{post.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
