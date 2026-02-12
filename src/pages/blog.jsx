import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Heart, MessageSquare} from "lucide-react";

const posts = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title: `Shopping Tips #${i + 1}`,
  category: ["Guides", "Trends", "News"][i % 3],
  excerpt: "Learn how to choose better products, save money and shop smarter with our practical advice.",
  content:
    "This is the full blog article. It explains useful tips, product comparisons and shopping strategies to help customers make better decisions online.",
  image: `https://picsum.photos/600/400?random=${i + 30}`,
  author: `Author ${i % 5 + 1}`,
  authorImage: `https://i.pravatar.cc/100?img=${i + 5}`,
  date: `2026-02-${(i % 28) + 1}`,
  likes: Math.floor(Math.random() * 200),
  comments: Math.floor(Math.random() * 40),
}));

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);
  const [page, setPage] = useState(1);

  const perPage = 6;

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCategory = category === "All" || p.category === category;
      const matchQuery = p.title.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="pt-28 px-4 md:px-12 pb-20">
      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
        <p className="text-muted-foreground text-lg">
          Discover shopping advice, trends and product insights to help you make smarter choices.
        </p>
      </section>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[260px_1fr] gap-10">
        {/* SIDEBAR */}
        <aside className="space-y-8 lg:sticky lg:top-24 h-fit">
          <Card className="p-5 space-y-4">
            <h2 className="font-semibold">Search</h2>
            <Input
              placeholder="Search article..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </Card>

          <Card className="p-5 space-y-3">
            <h2 className="font-semibold">Categories</h2>
            {["All", "Guides", "Trends", "News"].map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className={`block w-full text-left hover:text-orange-500 ${category === c ? "text-orange-500 font-semibold" : ""}`}
              >
                {c}
              </button>
            ))}
          </Card>

          <Card className="p-5 space-y-4">
            <h2 className="font-semibold">Recent Posts</h2>
            {posts.slice(0,3).map(p => (
              <div key={p.id} className="flex gap-3 items-center">
                <img src={p.image} className="w-14 h-14 rounded-lg object-cover" />
                <div className="text-sm">
                  <p className="font-medium line-clamp-2">{p.title}</p>
                  <span className="text-muted-foreground text-xs">{p.date}</span>
                </div>
              </div>
            ))}
          </Card>

          <Card className="p-5 space-y-4">
            <h2 className="font-semibold">Popular</h2>
            {posts.sort((a,b)=>b.likes-a.likes).slice(0,3).map(p => (
              <div key={p.id} className="flex gap-3 items-center">
                <img src={p.image} className="w-14 h-14 rounded-lg object-cover" />
                <div className="text-sm">
                  <p className="font-medium line-clamp-2">{p.title}</p>
                  <span className="text-muted-foreground text-xs"><Heart/> {p.likes}</span>
                </div>
              </div>
            ))}
          </Card>
        </aside>

        {/* POSTS */}
        <div className="space-y-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((post) => (
              <Card key={post.id} className="cursor-pointer hover:shadow-md transition" onClick={() => setSelectedPost(post)}>
                <img src={post.image} className="w-full h-40 object-cover rounded-t-xl" />
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={post.authorImage} className="w-7 h-7 rounded-full" />
                      <span className="text-xs">{post.author}</span>
                    </div>
                    <span className="text-xs">{post.date}</span>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <span><Heart/> {post.likes}</span>
                    <span><MessageSquare/> {post.comments}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button key={i} variant={page === i + 1 ? "default" : "outline"} onClick={() => setPage(i + 1)}>
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background max-w-2xl w-full rounded-2xl p-6 space-y-4 relative">
            <button className="absolute top-4 right-4" onClick={() => setSelectedPost(null)}>✕</button>
            <img src={selectedPost.image} className="rounded-xl w-full h-60 object-cover" />
            <h2 className="text-2xl font-semibold">{selectedPost.title}</h2>
            <p className="text-muted-foreground">{selectedPost.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
