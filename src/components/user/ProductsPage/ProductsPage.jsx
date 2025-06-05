'use client';

import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Ürünler yüklenemedi");
  }
  return res.json();
}

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const productsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Tüm Ürünler</h1>
        <div className={styles.productList}>
          {currentProducts.map((product) => (
            <div key={product._id} className={styles.card}>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.productName}
                  className={styles.productImage}
                />
              )}
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <p>
                <strong>Fiyat:</strong> {product.price} ₺
              </p>
            </div>
          ))}
        </div>

        <div className={styles.paginationWrapper}>
          <ul className={styles.pagination}>
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
              <li key={index + 1}>
                <button
                  className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ''}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

     
            <div className={styles.customerReviews}>
  <h2 className={styles.reviewTitle}>Kullanıcı Yorumları</h2>
  <div className={styles.reviewList}>
    {[
      {
        stars: 5,
        name: "A. K.",
        comment: "Ürün çok kaliteli, hızlı kargo ile elime ulaştı.",
      },
      {
        stars: 4,
        name: "B. D.",
        comment: "Genel olarak memnunum ama paketleme geliştirilebilir.",
      },
      {
        stars: 5,
        name: "C. M.",
        comment: "Beklentimi aştı, teşekkür ederim 💖",
      },
      {
        stars: 4,
        name: "D. N.",
        comment: "Fiyat-performans ürünü, tavsiye ederim.",
      },
      {
        stars: 5,
        name: "E. T.",
        comment: "Tek kelimeyle mükemmel. Hızlı teslimat 👌",
      },
      {
        stars: 4,
        name: "F. Y.",
        comment: "Ürün güzel ama kargo 1 gün gecikti.",
      },
      {
        stars: 5,
        name: "Y. M.",
        comment: "Tek kelimeyle mükemmel. Hızlı teslimat 👌",
      },
      {
        stars: 4,
        name: "B. T.",
        comment: "Ürün güzel ama kargo 1 gün gecikti.",
      }
    ].map((review, index) => (
      <div className={styles.reviewCard} key={index}>
          <div className={styles.reviewStars}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: i < review.stars ? "#f5c518" : "#ddd" }}>★</span>
            ))}
          </div>
          <div className={styles.reviewName}>
            {review.name} <span className={styles.verified}>✔</span>
          </div>
          <p className={styles.reviewComment}>"{review.comment}"</p>
        </div>
    ))}
       </div>
    </div>

    <div className={styles.youMightLike}>
        <h2 className={styles.sectionTitle}>You might like ✨</h2>
        <div className={styles.productList}>
          {products.slice(0, 4).map((product) => (
            <div key={product._id} className={styles.card}>
              <img
                src={product.image}
                alt={product.productName}
                className={styles.productImage}
              />
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <p><strong>Fiyat:</strong> {product.price} ₺</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductsPage;

