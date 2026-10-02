import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPostsData } from "@/data/blogPosts";
import { SeoHead } from "@/components/seo/SeoHead";
import { Badge } from "@/components/ui/badge";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { ArrowRight, Clock, Calendar, Search } from "lucide-react";

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Architecture",
    "Frontend",
    "eCommerce",
    "SEO & Performance",
    "Engineering Management",
  ];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPostsData[0];

  return (
    <>
      <SeoHead
        title="Engineering & Design Insights — WaveOn Insights"
        description="Deep dives into React Server Components, headless eCommerce architectures, Core Web Vitals optimization, and engineering leadership."
        canonicalPath="/blog"
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <Badge variant="subtle" className="text-xs uppercase tracking-wider">
            Insights & Engineering
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Practical Engineering & Product Architecture
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Battle-tested strategies, performance optimization techniques, and architectural blueprints written by senior developers and product leaders.
          </p>
        </div>
      </section>

      {/* Featured Post Card */}
      <section className="py-12 border-b border-border/60 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-background p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="text-xs font-bold uppercase tracking-wider">
                  Featured Article
                </Badge>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground font-semibold">
                  {featuredPost.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground hover:text-primary transition-colors">
                <Link to={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {featuredPost.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>By {featuredPost.author.name}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{featuredPost.publishDate}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredPost.readingTime}</span>
                  </span>
                </div>

                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 border-b border-border/60 bg-muted/20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                    : "bg-background text-muted-foreground border border-border/80 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 rounded-full border border-border bg-background pl-10 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 lg:py-20 border-b border-border/60 bg-background">
        <div className="container mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-base font-bold text-foreground mb-1">
                No matching articles found
              </h3>
              <p className="text-xs text-muted-foreground">
                Try a different keyword or reset your filter category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="subtle" className="text-[11px] font-semibold">
                        {post.category}
                      </Badge>
                      <span className="text-[11px] text-muted-foreground">
                        {post.readingTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground hover:text-primary transition-colors mb-2 leading-snug">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.publishDate}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Band */}
      <CtaBandSection />
    </>
  );
};

export default BlogPage;
