import { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "../components/SeacrhInput";
import { Warehouse } from "lucide-react";

export default function SendToShowcase() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const warehouseId = "4905a54b-bfa3-42bd-8e82-6a9373058c0b";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchShops = async () => {
      if (!token) return;

      try {
        const response = await axios.get(
          `https://testwalldesign.limsa.uz/shop/all-shops/${warehouseId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
            params: { page: 1, limit: 50 },
          }
        );

        const res = response.data?.data?.shops;

        if (Array.isArray(res)) {
          setShops(res);
        } else {
          console.warn("Данные магазинов не массив.");
        }
      } catch (err) {
        console.error("Ошибка при загрузке:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, [token]);

  if (loading) {
    return <div className="text-white p-4">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">Ошибка при загрузке данных</div>;
  }

  return (
    <div className="bg-[#17212B] min-h-screen text-white">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition duration-300 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-wrap">
            {shops.map((shop) => (
              <div
                key={shop.id}
                className="flex items-center gap-3 flex-wrap text-wrap"
              >
                <Warehouse size={32} />
                <h3 className="text-base sm:text-lg font-medium overflow-hidden">
                  {shop.name} — омбордаги маҳсулотларни витринга юбориш
                </h3>
              </div>
            ))}
            <SearchInput />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="border border-white rounded-md px-4 py-2 hover:bg-white hover:text-black transition">
            Витринани Кўриш
          </button>
          <div className="flex gap-3 items-center">
            <span className="bg-[#364153] px-4 py-1 rounded-xl">
              Танланган: 0
            </span>
            <button
              className="border border-gray-400 rounded-md px-4 py-1 text-gray-300 cursor-not-allowed"
              disabled
            >
              Юбориш
            </button>
          </div>
        </div>

        <p className="text-center text-2xl font-semibold mt-20">
          Маълумот топилмади
        </p>
      </div>
    </div>
  );
}
