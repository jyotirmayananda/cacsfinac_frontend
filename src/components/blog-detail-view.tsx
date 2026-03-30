"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogDetailViewProps {
  post: BlogPost;
  recentPosts: BlogPost[];
}

export default function BlogDetailView({ post, recentPosts }: BlogDetailViewProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={post.image.src}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container max-w-4xl text-center"
          >
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm px-4 py-1">
              Financial Advisory
            </Badge>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-[1.2] text-center md:text-left">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm border-t border-white/10 pt-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                By {post.author}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 -mt-20 relative z-10 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-md overflow-hidden rounded-3xl">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* Intro */}
                    {post.content.map((p, i) => (
                      <p key={i} className="text-xl leading-relaxed text-muted-foreground mb-8 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                        {p}
                      </p>
                    ))}

                    {/* Sections */}
                    <div className="space-y-12 my-12">
                      {post.sections.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="text-primary font-bold tracking-widest text-sm border-l-4 border-primary pl-6">Who we are</div>
                          <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground border-l-4 border-primary pl-6">
                            {section.heading}
                          </h2>
                          {section.isList ? (
                            <ul className="list-none space-y-4 pl-0">
                              {(section.content as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-3 bg-primary/5 p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors">
                                  <div className="mt-1.5 min-w-[20px] h-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                                    {i + 1}
                                  </div>
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-muted-foreground leading-relaxed pl-6 border-l-4 border-transparent">
                              {section.content}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Key Insight */}
                    <div className="relative overflow-hidden bg-primary p-8 md:p-12 rounded-3xl text-primary-foreground my-16 shadow-lg">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                      <div className="relative z-10">
                        <div className="text-primary font-bold tracking-widest text-xs mb-6">Our Approach</div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                          <span className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">💎</span> Key Financial Insight
                        </h3>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
                          "{post.keyInsight}"
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="border-t pt-12">
                      <div className="bg-muted p-8 rounded-3xl border border-border/50">
                        <div className="text-primary font-bold tracking-widest text-xs mb-4">Distinction</div>
                        <p className="text-muted-foreground mb-6">
                          {post.cta}
                        </p>
                        <Button className="rounded-full px-8 py-6 h-auto text-lg group" asChild>
                          <Link href="/contact" className="!no-underline">
                            Connect for Consultation
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <Button variant="ghost" asChild className="group">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Other Posts */}
              <div className="sticky top-24">
                <div className="text-primary font-bold tracking-widest text-xs mb-6">Market Segments</div>
                <h3 className="text-xl font-bold font-headline mb-6 pb-2 border-b">
                  Recommended Reading
                </h3>
                <div className="space-y-6">
                  {recentPosts.map((otherPost) => (
                    <Link key={otherPost.id} href={`/blog/${otherPost.id}`} className="group block">
                      <div className="grid grid-cols-[100px_1fr] gap-4">
                        <div className="relative aspect-square rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                          <Image
                            src={otherPost.image.src}
                            alt={otherPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-bold tracking-widest text-slate-600 dark:text-white leading-tight">{otherPost.title}</p>
                          <h4 className="text-sm font-semibold line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                            {otherPost.title}
                          </h4>
                          <p className="text-xl font-bold text-slate-600 dark:text-slate-100 tracking-tight">{otherPost.date}</p>
                          <p className="text-[10px] text-muted-foreground tracking-widest">
                            {otherPost.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Newsletter / Contact Promo */}
                <Card className="mt-12 bg-primary/5 border-primary/20 rounded-2xl overflow-hidden relative">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-lg font-bold mb-3 font-headline">Need Expert Advice?</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Our team specializes in resolving complex financial data inconsistencies and systemic compliance issues.
                    </p>
                    <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10" asChild>
                      <Link href="/contact">Book a Session</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.aside>

          </div>
        </div>
      </section>
    </main>
  );
}
