import { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "../components/SeacrhInput";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const GoodsShowcase = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const warehouseId = "4905a54b-bfa3-42bd-8e82-6a9373058c0b";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://testwalldesign.limsa.uz/shop/all-shops/${warehouseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              page: 1,
              limit: 50,
            },
          }
        );

        const res = response.data?.data?.shops;

        if (Array.isArray(res)) {
          setShops(res);
        }
      } catch (err) {
        console.error("Ошибка при загрузке:", err);
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
    <div className="bg-[#17212B] min-h-screen text-white">
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-4 hover:bg-white/30 transition-all duration-300 ease-in mb-6">
          <div className="flex items-center gap-5">
            <User size={40} />
            <p className="text-xl font-semibold">Маҳсулотлар</p>
          </div>
          <SearchInput />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {shops.map((shop) => (
            <Link
              key={shop.id}
              to="/sendtoshowcase"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all cursor-pointer block"
            >
              <h3 className="text-lg font-medium">{shop.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoodsShowcase;
