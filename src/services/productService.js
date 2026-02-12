import axios from "axios";

const API = "https://fakestoreapi.com/products";

// adapter API → UI
const mapProduct = (item) => ({
  id: item.id,
  name: item.title,
  price: item.price,
  img: item.image,
  shortdescription: item.description.substring(0, 60) + "...",
  description: item.description,
  rating: item.rating?.rate || 4,
  reviews: item.rating?.count || 0,
  category: item.category,
  badge: item.rating?.rate >= 4.5 ? "BEST" :
         item.rating?.rate >= 4 ? "POPULAR" :
         "NEW",
});

export const getAllProducts = async () => {
  const res = await axios.get(API);
  return res.data.map(mapProduct);
};
