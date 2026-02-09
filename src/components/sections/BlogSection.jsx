import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const blogs = [
    {
        id: 1,
        title: "How to Choose the Perfect Laptop for Your Needs",
        excerpt: "Discover the key factors to consider when selecting a laptop that suits your lifestyle and work requirements.",
        date: "5, 2024",
        month: "Feb",
        img: "seed/blog1/400/250",
    },
    {
        id: 2,
        title: "Top 10 Must-Have Gadgets for Tech Enthusiasts",
        excerpt: "Explore the latest and greatest gadgets that every tech lover should have in their collection.",
        date: "10, 2024",
        month: "Mar",
        img: "seed/blog2/400/250.jpg",
    },
    {
        id: 3,
        title: "The Ultimate Guide to Building Your Own PC",
        excerpt: "Step-by-step instructions and tips for assembling a custom PC that meets your performance needs.",
        date: "15, 2024",
        month: "Apr",
        img: "seed/blog3/400/250.jpg",
    },
    {
        id: 4,
        excerpt: "Learn about the latest trends in wearable technology and how they are changing the way we interact with our devices.",
        title: "Wearable Tech: The Future of Personal Technology",
        date: "20, 2024",
        month: "May",
        img: "seed/blog4/400/250.jpg",
    }
];

function BlogSection() {
    return (
        <section className="py-12 px-8 md:px-56">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Latest Blog Posts</h2>
                <p className="text-center text-gray-600 mb-12">Stay updated with the latest trends and tips in technology.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogs.map((blog) => (
                        <Card key={blog.id} className="overflow-hidden border hover:shadow-md transition">
                            <div className="flex flex-col md:flex-row">

                                {/* IMAGE */}
                                <div className="relative md:w-1/2">
                                    <img
                                        src={`https://picsum.photos/${blog.img}`}
                                        alt={blog.title}
                                        className="w-full h-52 md:h-full object-cover"
                                    />

                                    <div className="absolute top-3 left-3 bg-white text-center shadow px-2 py-1">
                                        <p className="text-sm font-bold text-gray-800">{blog.date}</p>
                                        <p className="text-xs text-white bg-orange-500">{blog.month}</p>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <CardContent className="md:w-1/2 p-5 flex flex-col justify-center">
                                    <h3 className="font-semibold text-lg mb-2 hover:text-orange-500 cursor-pointer">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm mb-4">
                                        {blog.excerpt}
                                    </p>

                                    <a
                                        href="#"
                                        className="text-orange-500 text-sm font-medium hover:underline w-fit"
                                    >
                                        Read more →
                                    </a>
                                </CardContent>

                            </div>

                        </Card>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default BlogSection;