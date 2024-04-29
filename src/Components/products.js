import React from "react";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h3>{product.title}</h3>
      <p>Posté par: {product.postedBy}</p>
      <p>Date et heure de post: {product.postDateTime}</p>
      <p>Quantité: {product.quantity}</p>
      <p>Prix: {product.price}</p>
      <p>Lieu: {product.location}</p>
      <p>Catégorie: {product.category}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductItem;
