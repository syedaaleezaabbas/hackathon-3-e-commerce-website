'use client';

import Swal from 'sweetalert2';
import { addToCart } from '@/app/actions/action';

interface AddToCartButtonProps {
    product: Products;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: `${product.title} added to cart`,
            showConfirmButton: false,
            timer: 1000,
        });
        addToCart(product);
    };

    return (
        <button
            className='bg-gradient-to-r from-[#2e004f] via-[#4b0082] to-[#6a0dad] text-white font-semibold py-3 px-16 rounded-lg shadow-md hover:shadow-lg'
            onClick={handleAddToCart}
        >
            Add to cart
        </button>
    );
};

export default AddToCartButton;