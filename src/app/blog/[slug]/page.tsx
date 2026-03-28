import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import BlogDetailView from "@/components/blog-detail-view";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  const recentPosts = blogPosts.filter((p) => p.id !== slug).slice(0, 3);

  return <BlogDetailView post={post} recentPosts={recentPosts} />;
}
