import React from "react";
import Image from 'next/image'
import { LuAlarmClock } from "react-icons/lu";
import { FaComment } from "react-icons/fa";
import { PiGreaterThanLight } from "react-icons/pi";

const FeaturedPosts = () => {
    const posts = [
        {
            id: 1,
            googleTrending: {
                google: "Google",
                trending: "Trending",
                news: "News",
            },
            title: "Loudest à la Madison #1 (L'Integrál)",
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            Image: "/featuredpostpic2.png",
            date: "22 April 2021",
            comments: 10,
            tag: "NEW",
        },
        {
            id: 2,
            googleTrending: {
                google: "Google",
                trending: "Trending",
                news: "News",
            },
            title: "Loudest à la Madison #1 (L'Integrál)",
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            Image: "/featuredpostpic3.png",
            date: "22 April 2021",
            comments: 10,
            tag: "New",
        },
        {
            id: 3,
            googleTrending: {
                google: "Google",
                trending: "Trending",
                news: "News",
            },
            title: "Loudest à la Madison #1 (L'Integrál)",
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            Image: "/featuredpostpic1.png",
            date: "22 April 2021",
            comments: 10,
            tag: "New",
        },
    ];

    return (
        <div className="bg-white py-10 mt-28 max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h2 className="text-[28px] font-bold text-gray-800">Featured Posts</h2>
                <p className="text-gray-500 md:px-0 px-4">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        {/* Post Image */}
                        <div className="relative">
                            <Image src={post.Image} alt={post.title} width={200} height={200} className="w-full h-80 object-cover" />
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                                {post.tag}
                            </span>
                        </div>

                        {/* Post Content */}
                        <div className="p-5">
                            <p className="text-sm mb-2">
                                <span className="text-blue-500">{post.googleTrending.google}</span>
                                <span className="text-gray-500 ml-3">{post.googleTrending.trending}</span>
                                <span className="text-gray-500 ml-3">{post.googleTrending.google}</span>
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                            <p className="text-gray-600 text-md mt-2">{post.description}</p>
                            <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                                <div className="flex items-center">
                                    <LuAlarmClock className="mr-1 h-5 w-5 text-blue-500" /><span>{post.date}</span></div>
                                <div className="flex items-center">
                                    <FaComment className="mr-1 h-5 w-5 text-green-700" /><span>{post.comments} comments</span>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="text-gray-500 text-sm font-bold mt-4 inline-flex items-center hover:underline"
                            >
                                <span>Learn More</span> <PiGreaterThanLight className="h-5 w-5 ml-1 text-blue-500" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedPosts;