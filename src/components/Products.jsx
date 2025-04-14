import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { CiStar } from "react-icons/ci";
const products = [
  {
    id: 1,
    name: "Basic Tee London",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    discount: "$30",
    color: "Mate Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$78",
    color: "White",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$23",
    color: "Gray",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$23",
    color: "Gray",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$23",
    color: "Gray",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$23",
    color: "Gray",
  },

  // More products...
];
const Products = () => {
  return (
    <div className="mt-10 mb-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        modules={[Autoplay]} // Register autoplay module
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white px-2 rounded-md shadow">
              <div className="h-70">
                <img
                  className="w-full h-full object-cover rounded"
                  alt={product.imageAlt}
                  src={product.imageSrc}
                />
              </div>

              <div className="mt-2 text-center">
                <div className="flex justify-center text-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <span className="text-base font-medium">4.5</span>
                      <CiStar className="text-xl font-medium" />
                      <span className="text-base font-medium">|</span>
                    </div>
                    <span className="text-base font-medium">1400</span>
                  </div>
                </div>
                <h3 className="text-md  text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.color}</p>
                <div className="flex gap-2 justify-center">
                  <span className="text-sm font-bold text-gray-900">
                    {product.discount}
                  </span>
                  <span className="text-sm font-semibold line-through text-gray-500">
                    {product.price}
                  </span>
                  <span className="text-sm font-semibold  text-orange-300">
                    20% Off
                  </span>
                </div>
                <div className="mt-1  bg-amber-400 mx-8 text-center py-1.5 text-sm font-semibold rounded">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
