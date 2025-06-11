import { useEffect, useState } from "react";
import axios from "axios";

export default function GoodsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const warehouseId = "4905a54b-bfa3-42bd-8e82-6a9373058c0b";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://testwalldesign.limsa.uz/warehouse-products/all-products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              page: 1,
              limit: 100,
              warehouseId,
            },
          }
        );

        const items = response.data?.data?.data;

        if (Array.isArray(items)) {
          setProducts(items);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Ошибка при загрузке:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-white p-4">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">Ошибка при загрузке данных</div>;
  }

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full table-auto border-collapse bg-slate-800 text-white">
        <thead>
          <tr className="bg-slate-700">
            <th className="px-4 py-2 border border-slate-600 rounded-tl-lg">
              №
            </th>
            <th className="px-4 py-2 border border-slate-600">Артикул</th>
            <th className="px-4 py-2 border border-slate-600">Партия</th>
            <th className="px-4 py-2 border border-slate-600">Рулон сони</th>
            <th className="px-4 py-2 border border-slate-600">
              Витринадаги махсулот
            </th>
            <th className="px-4 py-2 border border-slate-600">Нархи ($)</th>
            <th className="px-4 py-2 border border-slate-600 rounded-tr-lg">
              Расм
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id} className="hover:bg-slate-600 transition">
              <td className="px-4 py-2 border border-slate-700 text-center">
                {index + 1}
              </td>
              <td className="px-4 py-2 border border-slate-700 text-center">
                {item.article}
              </td>
              <td className="px-4 py-2 border border-slate-700 text-center">
                {item.batch_number}
              </td>
              <td className="px-4 py-2 border border-slate-700 text-center">
                {item.quantity}
              </td>
              <td className="px-4 py-2 border border-slate-700 text-center">
                {item.shop_product_item}
              </td>
              <td className="px-4 py-2 border border-slate-700 text-center">
                {item.price}
              </td>
              <td className="px-4 py-2 border border-slate-700 text-center">
                <img
                  src={item.image_url}
                  alt="Товар"
                  className="w-16 h-16 object-cover mx-auto rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center gap-2 p-4">
        <button className="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600">
          {"<"}
        </button>
        <span className="px-3 py-1 rounded bg-blue-600">1</span>
        <button className="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600">
          {">"}
        </button>
      </div>
    </div>
  );
}
