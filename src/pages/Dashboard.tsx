import { useEffect, useState } from "react";
import { useAxios } from "../hook/useAxios";
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export interface ProductType {
  id: number;
  images: string;
  title: string;
  price: number;
  brand: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    useAxios("/products").then((res) => {
      setProducts(
        res.data.products.map((item: any) => {
          const data: ProductType = {
            id: item.id,
            images: item.images[0],
            title: item.title,
            price: item.price,
            brand: item.brand,
          };
          return data;
        })
      );
    });
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 dark:bg-gray-900 py-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item: ProductType) => (
          <li
            key={item.id}
            className={`border dark:border-red-500 cursor-pointer rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 p-4 dark:bg-gray-800 text-white bg-white border-gray-300`}
          >
            <img
              src={item.images}
              alt={item.brand}
              className="mx-auto object-contain h-48 w-full rounded-lg mb-4"
            />
            <p className="font-semibold text-lg text-black dark:text-white line-clamp-1 mb-2">{item.title}</p>
            <p className="text-gray-600 dark:text-gray-300 pb-2">Price: ${item.price}</p>
            <Button startIcon={<ShoppingCartIcon />} variant="contained" color="error">
              Order
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;