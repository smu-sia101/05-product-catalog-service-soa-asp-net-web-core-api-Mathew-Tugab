import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://localhost:7264/api/Products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <div className="loading">Loading product details...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="product-details-container">
            <h2 className="product-title">Product Details</h2>
            <div className="product-details-card">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                />
                <div className="product-info">
                    <p><strong>ID:</strong> {product.id}</p>
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;