import { useEffect, useState } from "react";
import axios from "axios";
import { Inbox, File } from "lucide-react";
import GoodsTable from "../components/GoodsTable";
import SearchInput from "../components/SeacrhInput";

const Goods = () => {
  const [products, setProducts] = useState([]);
  const [totalInfo, setTotalInfo] = useState({
    total_price: 0,
    total_quantity: 0,
  });
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

        const res = response.data?.data;

        if (Array.isArray(res?.data)) {
          setProducts(res.data);
          setTotalInfo({
            total_price: res.total_price,
            total_quantity: res.total_quantity,
          });
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
    <div className="bg-black/50 min-h-screen">
      <div
        className="absolute inset-0 bg-cover h-screen bg-black bg-center blur-md z-0"
        style={{
          backgroundImage:
            "url('https://walldesign-tests-jgda.vercel.app/assets/bg-sklad-BclbMkb4.png')",
          zIndex: -1,
        }}
      ></div>

      <div className="relative container mx-auto flex gap-5 flex-col p-8 rounded-xl text-white text-center">
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-4 hover:bg-white/30 transition-all duration-300 ease-in">
          <div className="flex items-center gap-5">
            <Inbox size={40} />
            <p className="text-xl font-semibold">Маҳсулотлар</p>
          </div>
          <SearchInput />
        </div>

        <div className="flex items-center justify-between p-4 bg-[#1E2939] rounded-md text-xl font-semibold">
          <p>Жами нарх: {totalInfo.total_price}</p>
          <p>Жами миқдор: {totalInfo.total_quantity}</p>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-3 bg-[#00A63E] px-3 py-2 rounded-md cursor-pointer hover:bg-green-700 transition">
            <File />
            <p>Excel orqali yuklab olish</p>
          </button>
        </div>

        <GoodsTable products={products} />
      </div>
    </div>
  );
};

export default Goods;
