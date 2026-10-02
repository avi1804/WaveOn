import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPostsData } from "@/data/blogPosts";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { ArrowRight, Calendar, Clock, ArrowLeft } from "lucide-react";

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = blogPostsData.filter((p) =>
    post.relatedPostSlugs.includes(p.slug)
  );

  return (
    <>
      <SeoHead
        title={`${post.title} — WaveOn Insights`}
        description={post.summary}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
      />

      {/* Article Header */}
      <article className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="space-y-4">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              {post.category}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/60">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  {post.author.avatarInitials}
                </div>
                <div>
                  <span className="font-bold text-foreground block">
                    {post.author.name}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <span>·</span>

              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>{post.publishDate}</span>
              </div>

              <span>·</span>

              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Article Body */}
      <section className="py-16 lg:py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/90 text-base sm:text-lg leading-relaxed">
            <p className="text-xl font-medium text-foreground leading-relaxed italic border-l-4 border-primary pl-4 py-1">
              {post.summary}
            </p>

            {post.content.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Callout Box */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-muted/40 border border-border/80 flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-black text-base shrink-0 shadow-sm">
              {post.author.avatarInitials}
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">
                Written by {post.author.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {post.author.role} at WaveOn. Passionate about performant web architectures and reliable digital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-b border-border/60 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl font-bold text-foreground mb-8 text-center sm:text-left">
              Related Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.slug}`}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <Badge variant="subtle" className="text-[10px] mb-2">
                      {rel.category}
                    </Badge>
                    <h4 className="text-base font-bold text-foreground hover:text-primary transition-colors mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default BlogPostPage;
