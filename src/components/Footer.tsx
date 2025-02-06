import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white max-w-screen-2xl mx-auto">
            {/* Top Section */}
            <div className="flex justify-between items-center px-8 py-10 bg-gray-200">
                <h2 className="text-2xl font-bold text-[#252b42]">Bandage</h2>
                <div className="flex space-x-4">
                    <a href="#" className="text-blue-500">
                        <FaFacebook className="text-2xl" />
                    </a>
                    <a href="#" className="text-blue-500">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="#" className="text-blue-500">
                        <FaInstagram className="text-2xl" />
                    </a>
                </div>
            </div>

            {/* Middle Section with Columns */}
            <div className="px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Column 1 */}
                    <div>
                        <h3 className="font-semibold text-[#252b42]">Company Info</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">About Us</a></li>
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">Carrier</a></li>
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">We are hiring</a></li>
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">Blog</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="font-semibold text-[#252b42]">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">About Us</a></li>
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">Carrier</a></li>
                            <li><a href="#" className=" text-[#737373] hover:text-blue-500">We are hiring</a></li>
                            <li><a href="#" className=" text-[#737373] hover:text-blue-500">Blog</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="font-semibold text-[#252b42]">Features</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">Business Marketing</a></li>
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">User Analytics</a></li>
                            <li><a href="#" className=" text-[#737373] hover:text-blue-500">Live Chat</a></li>
                            <li><a href="#" className=" text-[#737373] hover:text-blue-500">Unlimited Support</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="font-semibold text-[#252b42]">Resources</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">iOS & Android</a></li>
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">Watch a Demo</a></li>
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">Customers</a></li>
                            <li><a href="#" className="text-[#737373] hover:text-blue-500">API</a></li>
                        </ul>
                    </div>

                    {/* column 5 */}
                    {/* Newsletter Section */}
                    <div>
                        <h3 className="font-semibold text-[#252b42]">Get In Touch</h3>
                        <form className="mt-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="px-6 py-2 w-full border border-gray-600 rounded-l-md focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-2 py-2 rounded-r-md hover:bg-blue-600"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-start py-4 px-6 bg-gray-200 text-[#737373] font-medium border-t md:text-lg">
                Made With Love By Finland. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;