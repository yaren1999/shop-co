"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.css";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    stars: 4,
    name: "A. D.",
    comment: "Ürün beklediğimden çok daha kaliteli çıktı. Çok memnunum!",
  },
  {
    stars: 5,
    name: "B. K.",
    comment: "Hızlı kargo ve harika paketleme. Kesinlikle tavsiye ederim.",
  },
  {
    stars: 4,
    name: "C. M.",
    comment: "Müşteri hizmetleri çok ilgiliydi, teşekkür ederim.",
  },
  {
    stars: 5,
    name: "D. S.",
    comment: "Fiyat-performans oranı çok iyi. Tekrar alışveriş yapacağım.",
  },
  {
    stars: 5,
    name: "E. T.",
    comment: "Kaliteyi gerçekten hissediyorsunuz, bayıldım!",
  },
];

const HappyCustomers = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our Happy Customers</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        className={styles.swiperContainer}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < review.stars ? "#f5c518" : "#ddd"}
                    size={18}
                  />
                ))}
              </div>
              <div className={styles.name}>
                {review.name} <FaCheckCircle color="#4caf50" size={14} />
              </div>
              <p className={styles.comment}>"{review.comment}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HappyCustomers;
