import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/content/posts';
import Card from '../ui/Card';

interface PostCardProps {
  post: Post;
  priority?: boolean;
  featured?: boolean;
}

export function PostCard({ post, priority = false, featured = false }: PostCardProps) {
  return (
    <Card hoverEffect className="flex flex-col h-full group bg-white">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-stone-100"
        tabIndex={-1}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 bg-white/95 backdrop-blur-xs text-stone-900 rounded-sm shadow-xs">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Anti-slop zero-pill clean metadata with typographic separators */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-2.5">
          <span>{post.date}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 group-hover:text-[#8C4A32] transition-colors leading-snug mb-3">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-stone-600 line-clamp-3 mb-4 leading-relaxed flex-1">
          {post.excerpt}
        </p>

        <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span>By {post.author.name}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="font-medium text-[#8C4A32] group-hover:underline flex items-center gap-1"
          >
            <span>Read guide</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default PostCard;
