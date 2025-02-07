"use client";

import React, { useEffect, useState } from "react";
import { getCartItems, updateCartQuantity, removeFromCart } from "../actions/action";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";

const CartPage = () => {
    const [cartItems, setCartItems] = useState<Products[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire("Removed!", "Item has been removed from your cart.", "success");
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) {
            handleQuantityChange(id, product.inventory + 1);
        }
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.inventory > 1) {
            handleQuantityChange(id, product.inventory - 1);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
    };

    const handleProceed = () => {
        Swal.fire({
            title: "Processing your order...",
            text: "Please wait a moment.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Success!", "Your order has been successfully processed!", "success");
                setCartItems([]);
            }
        });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="md:text-3xl text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
                    Shopping Cart
                </h1>

                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div
                            key={item._id}
                            className="flex items-center justify-between border-b py-5"
                        >
                            <div className="flex items-center gap-5">
                                {item.productImage && (
                                    <Image
                                        src={urlFor(item.productImage).url()}
                                        className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-md shadow-md"
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                    />
                                )}
                                <div>
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-gray-500 text-base font-semibold">$ {item.price.toFixed(2)}</p>
                                    <div className="flex items-center mt-3">
                                        <button
                                            onClick={() => handleDecrement(item._id)}
                                            className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                                        >
                                            -
                                        </button>
                                        <span className="mx-3 font-medium text-lg">{item.inventory}</span>
                                        <button
                                            onClick={() => handleIncrement(item._id)}
                                            className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemove(item._id)}
                                className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 font-semibold"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-center md:text-xl text-lg font-semibold">Your cart is empty.</p>
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-800">Total:</h2>
                        <p className="text-2xl font-bold text-gray-800">
                            ${calculateTotal().toFixed(2)}
                        </p>
                    </div>
                    <button
                        onClick={handleProceed}
                        className="mt-6 w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-lg font-semibold"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;