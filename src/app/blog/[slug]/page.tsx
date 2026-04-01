import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import BlogDetailView from "@/components/blog-detail-view";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | CACS FinAcc Blog`,
    description: post.summary,
    alternates: {
      canonical: `https://cacsfinaccservices.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://cacsfinaccservices.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "CACS FinAcc",
      images: [
        {
          url: post.image?.src || "/Image/cacshero.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://cacsfinaccservices.com${post.image?.src || "/Image/cacshero.png"}`,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "CACS FinAcc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cacsfinaccservices.com/Image/logo.png"
      }
    },
    "datePublished": post.date,
    "mainEntityOfPage": {
       "@type": "WebPage",
       "@id": `https://cacsfinaccservices.com/blog/${slug}`
    },
    "description": post.summary
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailView post={post} recentPosts={recentPosts} />
    </>
  );
}
