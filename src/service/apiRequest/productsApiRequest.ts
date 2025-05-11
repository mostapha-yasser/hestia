import axiosInstance from "@/lib/axios/instance";
import { Product,  } from "@/types/product";

const ProductUrl:string= "/products";

const getFilteredOrAllProducts = async (uRLSearchParams:string|null): Promise<Product[]> => {
  const { data } = await axiosInstance.get(`${ProductUrl}?${uRLSearchParams}`);
  return data;
};

const getProductById = async (ProductId:string): Promise<Product> => {
  const { data } = await axiosInstance.get(`${ProductUrl}/${ProductId}`);
  return data;
};

export { getProductById,getFilteredOrAllProducts};
